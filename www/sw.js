self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('static-v3')
    .then(cache => cache.addAll([
      '/offline.html',
      '/css/main.css'
    ]))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
    .then(response => response || fetch(event.request))
    .catch(() => {
        if (event.request.mode == 'navigate') {
          return caches.match('/offline.html');
        }
    })
  );
});

const expectedCaches = [
  'static-v3'
];

self.addEventListener('active', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promisse.all(
        cacheNames.map(cacheName => {
          if(!expectedCaches.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    })
  )
});
