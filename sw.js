self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('amigos-fc-store').then((cache) => cache.addAll([
      '/gestao-amigos-fc/',
      '/gestao-amigos-fc/index.html'
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
