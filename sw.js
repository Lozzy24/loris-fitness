/* Loris Fitness — Service Worker
   Stratégie : network-first pour la page (toujours la dernière version en ligne),
   cache-first pour les librairies/assets (rapide + offline). */
const CACHE = 'lorisfit-v26';
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './vendor/chart.umd.min.js',
  './vendor/html5-qrcode.min.js',
  './vendor/supabase.min.js',
  './vendor/bodydata.js',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  const isDoc = e.request.mode === 'navigate'
    || url.pathname.endsWith('/')
    || url.pathname.endsWith('index.html');

  if (isDoc) {
    // NETWORK-FIRST : prend la dernière version si en ligne, sinon le cache (offline)
    e.respondWith(
      fetch(e.request).then(resp => {
        const copy = resp.clone();
        caches.open(CACHE).then(c => c.put('./index.html', copy)).catch(() => {});
        return resp;
      }).catch(() => caches.match(e.request).then(r => r || caches.match('./index.html')))
    );
    return;
  }

  // CACHE-FIRST pour les assets (librairies, icônes, manifest)
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(resp => {
        const copy = resp.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
        return resp;
      }).catch(() => cached);
    })
  );
});
