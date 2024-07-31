'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f7677e896d4563037a3f7b5d39f4a696",
"assets/AssetManifest.bin.json": "365785d88ceafcf76b1a47b156027ecc",
"assets/AssetManifest.json": "c237bcc107f321ba97cacfb6b2ce7101",
"assets/assets/icons/archive_folder_96px.png": "424317d53769ec0b281e34a8dbff0f2e",
"assets/assets/icons/banner.png": "cc47271295e01a1086adf584dcce60c9",
"assets/assets/icons/banner_bg.png": "76e15465c78f69d9e6f68ebccd280a86",
"assets/assets/icons/bg_bhyt.png": "e7952f1d028371f3ede9fb663fa47e5f",
"assets/assets/icons/bhyt.png": "59f3218cfb9c56ea0ab24fb0200776a2",
"assets/assets/icons/box_important_32px.png": "5bf82dcd482f22a1ae07ae468a5f51fc",
"assets/assets/icons/calendar.png": "6a0b6ddbccfcfb7e891d5d6f67cc56e2",
"assets/assets/icons/card_payment_96px.png": "381875a76a33e538ee0b024fad1ff474",
"assets/assets/icons/cccd.png": "7e2ee1c9a6939374877e6334ab6718d4",
"assets/assets/icons/cheque_96px.png": "b9584c4668485323c21678c76f45f57d",
"assets/assets/icons/client_management_96px.png": "0f960e61c00bca0da4157143a5d6e0fc",
"assets/assets/icons/confetti_64px.png": "c1dc702e91b84488f7f8c5e933281f01",
"assets/assets/icons/document.png": "7b2d9e0049f86e8a8f18969a48dc9ee0",
"assets/assets/icons/drawer_96px.png": "9733025d5dff32995a9c6dcdc3738c54",
"assets/assets/icons/edit_profile_96px.png": "192dca41e326086f9d6478f401a7dd8e",
"assets/assets/icons/graphic-designer.png": "629db6636372f5d20d94c1b467265f9c",
"assets/assets/icons/Health%2520Insurance_96px.png": "e3b1e683d6699a1308a20172da03ea3a",
"assets/assets/icons/image_notfound.png": "38e77298d7bea13c8f40d044a9e8cc7f",
"assets/assets/icons/list.png": "02308fce499a49eda469bd6831dba561",
"assets/assets/icons/live_folder_96px.png": "c0293e51e0a81e8e27b17e56e88da679",
"assets/assets/icons/logo.png": "35cf531ba61de82eed440f8001f559da",
"assets/assets/icons/logo2.png": "baab7b1111ad8d6b628f2edcbb4ed602",
"assets/assets/icons/notification.png": "ea61f034809949d97cf6749cf705586b",
"assets/assets/icons/pass_fail_96px.png": "382f43b9791597dc151d5e7037079676",
"assets/assets/icons/pay_money.png": "9ebd121ba563a75a0c7e58d914ab5862",
"assets/assets/icons/pdf_96px.png": "df1360794c793a55c0afa4a30b7b32f7",
"assets/assets/icons/placeholder_image.png": "5b73bed39c51d1910a6ea60b86df6f81",
"assets/assets/icons/quiz_96px.png": "b7bed75e6c1b36c12ad0f986edd50c1d",
"assets/assets/icons/schedule_96px.png": "b2d7099ca7ce28f5fe59142da30d5f46",
"assets/assets/icons/user_50px.png": "37b5ec7276bd4cf4493907f5a6905326",
"assets/assets/images/bvtbna_bg2.png": "189549a27d43621ac6b3db6e03efa920",
"assets/assets/images/bvtbna_logo.png": "bd2d3b62fbb4ba9a1cb2301d39680f26",
"assets/assets/images/bvtbna_logo_notitle.png": "795f4ddf93e992d5ef5f4c884923d742",
"assets/assets/images/change_password.png": "b7a06f1a031452def04fac6279fb361b",
"assets/assets/images/DczdBVtTzQ.json": "71a666116886ffd8c9b22de6ef37686c",
"assets/assets/images/gkHCBAPMwm.json": "eb79edd80cf5a12aa04a8479737a1071",
"assets/assets/images/maps.png": "fcd4dc89de64a5735d67eb615aad476b",
"assets/assets/images/maps_dark.png": "e3a89511a1023f09077232731a863d18",
"assets/assets/images/nonebg.png": "514171f5122d939884e4ed6ea3d00374",
"assets/assets/images/notification.png": "db64ba5d1a185f5a141863439840a779",
"assets/assets/images/schedule.png": "28394fc738cc467ecb3e19cd6c4b754e",
"assets/assets/images/today.png": "4fe74dba51ac5495eb2f1159c3903247",
"assets/assets/images/Vr9qkOwtxU.json": "32085f8ebc23ff793825971c010898ed",
"assets/assets/sounds/click.wav": "668417c5a28e5762ab07c7941960c5c9",
"assets/assets/sounds/notification.mp3": "00ba96d19651ccc05a04b3da938bf4cf",
"assets/assets/sounds/success.mp3": "e10fb2df41fc12e50443c5e81c409d41",
"assets/assets/sounds/toast_sound.mp3": "d5cd57c9f8026a63b8e64b310d658ecc",
"assets/assets/sounds/warning_sound.wav": "0958e4bdaa541575f710c2e6d89ab88b",
"assets/FontManifest.json": "9cfce70c59ddf4f8372ed142e844ec05",
"assets/fonts/MaterialIcons-Regular.otf": "d5ddcf561e565b852cf1b2f1aeeca08a",
"assets/NOTICES": "92e681c2817b8f4bba745d43642f07e9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "ffd063c5ddbbe185f778e7e41fdceb31",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "aed192d6d31ea5b2e96d5d628fb7629a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "27fbae993bc5c3811805183e0c202494",
"assets/packages/syncfusion_flutter_pdfviewer/assets/highlight.png": "7384946432b51b56b0990dca1a735169",
"assets/packages/syncfusion_flutter_pdfviewer/assets/squiggly.png": "c9602bfd4aa99590ca66ce212099885f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/strikethrough.png": "cb39da11cd936bd01d1c5a911e429799",
"assets/packages/syncfusion_flutter_pdfviewer/assets/underline.png": "c94a4441e753e4744e2857f0c4359bf0",
"assets/packages/unicons/icons/UniconsLine.ttf": "8924ce5cafaa7c12e593a2ef8478122f",
"assets/packages/unicons/icons/UniconsSolid.ttf": "580e5390f4d0c77fa9e8115af69e41c7",
"assets/packages/unicons/icons/UniconsThinline.ttf": "b9ac88a304738945c1b1fa4c168a14b9",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "9566d618c7dd61f33e1f4120cdd1108c",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "89c0e8a4ff8cd0d6738449b873c09d2c",
"icons/Icon-512.png": "8ff20c075d071c2f7eeb5af75cdef4f5",
"icons/Icon-maskable-192.png": "89c0e8a4ff8cd0d6738449b873c09d2c",
"icons/Icon-maskable-512.png": "8ff20c075d071c2f7eeb5af75cdef4f5",
"index.html": "9c523576b23ed4fa36ba79f01b4d71c0",
"/": "9c523576b23ed4fa36ba79f01b4d71c0",
"main.dart.js": "707b51bfaccd480e4e0471f7a24fcf35",
"manifest.json": "399b7295ac0018963df75980a1e058bb",
"version.json": "f8cea7e564a5f746ec73e6e7ae207711"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
