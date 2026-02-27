const CACHE = "trail-app-v1";

const ASSETS = [
  "./",
  "./index.html",
  "./map.geojson",
  "https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.js",
  "https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.css"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});