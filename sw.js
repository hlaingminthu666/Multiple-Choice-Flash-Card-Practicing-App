/* Multiple Choice Flash Cards: service worker
   UPDATE RULE: every time you upload a new index.html to GitHub, change VERSION below
   (e.g. "2.1.1", "2.2"). That is what tells phones/PCs that a new version exists. */
const VERSION = "2.1.0";
const PREFIX = "mcq-flashcards-";
const APP_CACHE = PREFIX + "app-" + VERSION;
const FONT_CACHE = PREFIX + "fonts-v1";
const APP_FILES = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png",
  "./icons/apple-touch-icon.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(APP_CACHE)
      .then((c) => c.addAll(APP_FILES.map((u) => new Request(u, { cache: "reload" }))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      // only delete THIS app's old caches (other apps on the same github.io site keep theirs)
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith(PREFIX) && k !== APP_CACHE && k !== FONT_CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

const isFont = (url) => url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com";

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // Google Fonts: cache-first, so Myanmar + cartoon fonts still work offline
  if (isFont(url)) {
    event.respondWith(
      caches.open(FONT_CACHE).then(async (c) => {
        const hit = await c.match(req);
        if (hit) return hit;
        try { const res = await fetch(req); if (res.ok || res.type === "opaque") c.put(req, res.clone()); return res; }
        catch { return hit || Response.error(); }
      })
    );
    return;
  }
  if (url.origin !== self.location.origin) return;

  // The page itself: network-first (gets the newest version when online), cache when offline
  if (req.mode === "navigate") {
    event.respondWith((async () => {
      const c = await caches.open(APP_CACHE);
      try {
        const res = await fetch(req, { cache: "no-store" });
        if (res.ok) c.put("./index.html", res.clone());
        return res;
      } catch {
        return (await c.match("./index.html")) || (await c.match("./")) || Response.error();
      }
    })());
    return;
  }

  // Icons / manifest: cache-first, refresh in background
  event.respondWith((async () => {
    const c = await caches.open(APP_CACHE);
    const hit = await c.match(req, { ignoreSearch: true });
    const net = fetch(req).then((res) => { if (res.ok) c.put(req, res.clone()); return res; }).catch(() => null);
    return hit || (await net) || Response.error();
  })());
});
