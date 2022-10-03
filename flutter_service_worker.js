'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "41d888d02d55325e68899e4ae131cbb7",
"assets/assets/appainter_theme.json": "daea7ab31aa902dfa596b95219453be1",
"assets/assets/appartment_login.jpg": "e3d26a05974eee4c92f08d0d10e3019f",
"assets/assets/appartment_sliverheader.jpg": "9cf539d4020a13a30962ca323e06135f",
"assets/assets/badimage.jpg": "6c793bc170efc8ddd0a9e20076b82368",
"assets/assets/bezirke_anywhere.png": "a78cf5545920d500f8c1f10239ffaff1",
"assets/assets/bezirke_central.png": "277bfb2ed37a39c189e3b5f65b64ec3f",
"assets/assets/bezirke_semi-central.png": "26ce89605ee6d3dbd5aa397036b7941d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "64c8c52ab64607ffacd0670641b97490",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "ae6c1fd6f6ee6ee952cde379095a8f3f",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "b92bcb062b24fe84dc8c7bc038459f89",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "a10e28093f351f3926929f4dbb14b649",
"icons/Icon-512.png": "ac43773dad2c2d30d624633a0db092b2",
"icons/Icon-maskable-192.png": "a10e28093f351f3926929f4dbb14b649",
"icons/Icon-maskable-512.png": "ac43773dad2c2d30d624633a0db092b2",
"index.html": "f5760be248ed762caefb649102a84a4f",
"/": "5cbf80c9946ea803f33a8fdb72282bf0",
"main.dart.js": "5fe489e55d60ab3c082bfd6d10465a02",
"manifest.json": "4a892068280500f11938e8c91813930c",
"maxx-st.github.io/.git/config": "ef065b701262d93c6af68feac0395812",
"maxx-st.github.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"maxx-st.github.io/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"maxx-st.github.io/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"maxx-st.github.io/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"maxx-st.github.io/.git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
"maxx-st.github.io/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"maxx-st.github.io/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"maxx-st.github.io/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"maxx-st.github.io/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"maxx-st.github.io/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"maxx-st.github.io/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"maxx-st.github.io/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"maxx-st.github.io/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"maxx-st.github.io/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"maxx-st.github.io/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"maxx-st.github.io/.git/index": "bd274eece1f539e8b14d4a49aca80941",
"maxx-st.github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"maxx-st.github.io/.git/logs/HEAD": "74f5dd551036b1fd6e42c4f089ee9ee2",
"maxx-st.github.io/.git/logs/refs/heads/main": "74f5dd551036b1fd6e42c4f089ee9ee2",
"maxx-st.github.io/.git/logs/refs/remotes/origin/HEAD": "74f5dd551036b1fd6e42c4f089ee9ee2",
"maxx-st.github.io/.git/objects/pack/pack-e49fa5b8d01e616e3a8f590c36ce6ef901506ffe.idx": "216c398d1338f0bde2d535f52d3b3f41",
"maxx-st.github.io/.git/objects/pack/pack-e49fa5b8d01e616e3a8f590c36ce6ef901506ffe.pack": "62809a5809abb271d01f5a04131cbbff",
"maxx-st.github.io/.git/packed-refs": "7fb0ab011948cf340db13f5e1964b1fb",
"maxx-st.github.io/.git/refs/heads/main": "b6c25a2f41544853e3ac4ed557868977",
"maxx-st.github.io/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"maxx-st.github.io/assets/AssetManifest.json": "41d888d02d55325e68899e4ae131cbb7",
"maxx-st.github.io/assets/assets/appainter_theme.json": "f0625745820f58947f3eda5f8bfffe3b",
"maxx-st.github.io/assets/assets/appartment_login.jpg": "e3d26a05974eee4c92f08d0d10e3019f",
"maxx-st.github.io/assets/assets/appartment_sliverheader.jpg": "9cf539d4020a13a30962ca323e06135f",
"maxx-st.github.io/assets/assets/badimage.jpg": "6c793bc170efc8ddd0a9e20076b82368",
"maxx-st.github.io/assets/assets/bezirke_anywhere.png": "a78cf5545920d500f8c1f10239ffaff1",
"maxx-st.github.io/assets/assets/bezirke_central.png": "277bfb2ed37a39c189e3b5f65b64ec3f",
"maxx-st.github.io/assets/assets/bezirke_semi-central.png": "26ce89605ee6d3dbd5aa397036b7941d",
"maxx-st.github.io/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"maxx-st.github.io/assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"maxx-st.github.io/assets/NOTICES": "a451aeb82966dedb30688756b6e854b6",
"maxx-st.github.io/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"maxx-st.github.io/assets/shaders/ink_sparkle.frag": "ae6c1fd6f6ee6ee952cde379095a8f3f",
"maxx-st.github.io/canvaskit/canvaskit.js": "cf51f0145ed508c7203981a6297dfb6c",
"maxx-st.github.io/canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"maxx-st.github.io/canvaskit/profiling/canvaskit.js": "e069e181424052299c5bffb1b300bb13",
"maxx-st.github.io/canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"maxx-st.github.io/favicon.png": "b92bcb062b24fe84dc8c7bc038459f89",
"maxx-st.github.io/flutter.js": "db931120412af26cc1511fa058afaf0a",
"maxx-st.github.io/icons/Icon-192.png": "a10e28093f351f3926929f4dbb14b649",
"maxx-st.github.io/icons/Icon-512.png": "ac43773dad2c2d30d624633a0db092b2",
"maxx-st.github.io/icons/Icon-maskable-192.png": "a10e28093f351f3926929f4dbb14b649",
"maxx-st.github.io/icons/Icon-maskable-512.png": "ac43773dad2c2d30d624633a0db092b2",
"maxx-st.github.io/index.html": "5cbf80c9946ea803f33a8fdb72282bf0",
"maxx-st.github.io/main.dart.js": "9544c047a9f50d096b4ebcbb7e380c25",
"maxx-st.github.io/manifest.json": "32992beefde04c84185eebbcbfe8e7bc",
"maxx-st.github.io/version.json": "11e1a177d57c5da2bc6e3a6acc3010f4",
"version.json": "11e1a177d57c5da2bc6e3a6acc3010f4"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
