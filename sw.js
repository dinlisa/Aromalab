/* AromaLab 1.3.3 - cache first for static resources, network-first for the app page.
   Scoped to the repository directory. Does not cache third-party content. */
const CACHE_NAME = 'aromalab-pwa-v1.3.3';
const PRECACHE = [
  './',
  './index.html',
  './config.js',
  './manifest.webmanifest',
  './icon.svg',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(names => Promise.all(
      names.filter(name => name.startsWith('aromalab-') && name !== CACHE_NAME)
        .map(name => caches.delete(name))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin || !url.pathname.startsWith(self.registration.scope ? new URL(self.registration.scope).pathname : new URL('./',self.location.href).pathname)) return;

  // La configuration cloud doit être relue sur GitHub après modification :
  // cache-first bloquerait la création des comptes après activation.
  if (url.pathname.endsWith('/config.js')) {
    event.respondWith((async () => {
      try {
        const fresh = await fetch(request, { cache: 'no-store' });
        if (fresh.ok) {
          const cache = await caches.open(CACHE_NAME);
          await cache.put(request, fresh.clone());
        }
        return fresh;
      } catch (_) {
        return (await caches.match(request)) || new Response('window.AROMALAB_CLOUD_CONFIG={url:"",publishableKey:""};', {
          headers: { 'Content-Type': 'application/javascript; charset=utf-8' }
        });
      }
    })());
    return;
  }

  if (request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const response = await fetch(request);
        if (response.ok) {
          const cache = await caches.open(CACHE_NAME);
          await cache.put('./index.html', response.clone());
        }
        return response;
      } catch (error) {
        const cached = await caches.match('./index.html');
        if (cached) return cached;
        return new Response('AromaLab est indisponible hors connexion. Ouvre une fois le site avec Internet puis réessaie.', {
          status: 503,
          headers: { 'Content-Type': 'text/plain; charset=utf-8' }
        });
      }
    })());
    return;
  }

  event.respondWith((async () => {
    const cached = await caches.match(request);
    if (cached) return cached;
    return fetch(request);
  })());
});
