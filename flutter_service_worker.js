'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"version.json": "c4878a55cb39b294ff2263b102372005",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/AssetManifest.json": "1ba4987a64a690ed187f6b1cc50cb3a4",
"assets/assets/olho7.png": "4900eb6aa683e297cbac8ce2eccdc4c6",
"assets/assets/Ebbinghaus.png": "ea0cdc94dae2b03405ace8cd02245612",
"assets/assets/olho12.png": "c8b09b4d1ad50e757ef04ebe3ea32d48",
"assets/assets/emoji_com_ciumes.png": "82b0922f8c8ecabd4748430c66bc099c",
"assets/assets/olho10.png": "6d84d934477711275006b5e46ea1485d",
"assets/assets/arvore_free.png": "973cafdac6d739f1c161ca7f4976d9e1",
"assets/assets/emoji_sonolento.png": "7e45515068b8c298377d3855d5300c82",
"assets/assets/assinatura_resia.png": "e5ef8e46a858d6e2ba146f9368cad13d",
"assets/assets/intel_2e.png": "f05f756a5c7407471c1322401be3eb61",
"assets/assets/olho3.png": "f4b7a964d4d236ca4b6700e0ec78423a",
"assets/assets/intel_1e.png": "c569a1cadffc7437c9065600970a6d8e",
"assets/assets/questao32.png": "9ec5dd7884c796b682eafcaba4ea02d2",
"assets/assets/olho4.png": "8a7fce9096c7d154190d5fb11fe597e4",
"assets/assets/emoji_em_paz.png": "d912d4b86954b0d6010b23effb6efc77",
"assets/assets/olho8.png": "0d130bf9f98ecee8b89d9bd182739f25",
"assets/assets/intel_1.png": "8347e50075486ae76575a50a61cbf35e",
"assets/assets/questao45leaonovo.png": "987398f65de03044ab3669deca6adf81",
"assets/assets/emoji_comendo_muito.png": "80313b95763813cab677aabb3ecee132",
"assets/assets/emoji_desequilibrado.png": "2f29b619c3a16faeb77f35c87cdf3d23",
"assets/assets/reciclagem.png": "10ed929c48522a8e7081c063d983e716",
"assets/assets/emoji_otimista.png": "f0d8f898793a7def09cd720bfd7fb58e",
"assets/assets/questao48.png": "78cd53877e90cb9305696e897daf8e38",
"assets/assets/questao45carro.png": "e930a955bd79c3a6d5cc57ec855f5c7a",
"assets/assets/intel_2c.png": "0802d52aca1207a217c7d785e3f5aa1a",
"assets/assets/emoji_pura_alegria.png": "ee94e15e450eb2e7eb6cf33fc16ddbc7",
"assets/assets/emoji_indeciso.png": "8a7bf727c560b14d6b02014b0a484454",
"assets/assets/emoji_forte.png": "c013b336c002407951d7af21c641945e",
"assets/assets/questao45trabalhador.png": "c18aa859da8f1adae0e655259b70a86b",
"assets/assets/emoji_nojo.png": "8fcc469e7de9fd415bda077593af4b9e",
"assets/assets/emoji_frustrado.png": "b5b2093bcb80fbce926b4557ee1853ed",
"assets/assets/emoji_surpreso.png": "c482d1ba8b8a405686db882cea88ed85",
"assets/assets/assinatura_keiji.png": "0272b78d4d33f9614a1245001302988e",
"assets/assets/questao45gato.png": "eaccd9fe9102c2b35d739f261e5754dc",
"assets/assets/intel_2b.png": "5e4ea15cd3700a2d50612a1623f3caff",
"assets/assets/emoji_envergonhado.png": "f826c752c829a76183166c4fdc14a4a0",
"assets/assets/emoji_sempre_atrasado.png": "50fcf7a455fba4a95e233713894e0bb6",
"assets/assets/five_errors1.jpg": "4b42e6a62991160a2993f9fb0f2e30da",
"assets/assets/emoji_entediado.png": "920cf4f1712e947ac767d02cdec37d2f",
"assets/assets/emoji_inteligente.png": "f40ddb1e2ff4f2acb9c3e57076e3a250",
"assets/assets/PAPAI%2520NOEL.png": "bf75752649c486a47a26bf0d9e9f5ce4",
"assets/assets/emoji_reflexivo.png": "ed5f59372f3a77b7df04aae549b0ca29",
"assets/assets/intel_1a.png": "eec20acd253e7d808d53fb604675570b",
"assets/assets/emoji_emocionado.png": "df328ad3ae730fbb4e80158fac57d2e5",
"assets/assets/emoji_confiante.png": "4c44abdc3498d93c73698d6d1be95108",
"assets/assets/emoji_pessimista.png": "51aa485383077e983a5a7e2a10b557b3",
"assets/assets/audios/aguacorrente-edited_v2.mp3": "43b19d83ad60fd4bce057690783df54b",
"assets/assets/audios/chuva.mp3": "44fd53eb44e2778bf261aa15f0cc5203",
"assets/assets/audios/quatro_palavras.mp3": "05a50eb6b5aa4d70f4451cb611a73c74",
"assets/assets/audios/chuva_edited.wav": "78f0311224acfa9b58a512cbfca736b2",
"assets/assets/audios/dez_palavras.mp3": "d51b10ccee7f39916ea702ac971302e2",
"assets/assets/audios/chuva_edited.mp3": "9605f524e60c150203a86342904098a7",
"assets/assets/olho13.png": "316e1ab1495b891c20570b5cde84bb52",
"assets/assets/questao45coquetel.png": "6b01f2ef51d26fcb65db5ebaff6649fd",
"assets/assets/montandocerebro.png": "5cfcce7d0c71350dc07f551e5e206850",
"assets/assets/emoji_com_raiva.png": "0b1c025fe01c7cf3ae9e0ca8fb061ab0",
"assets/assets/emoji_triste.png": "d8630d7d6aa67abbad8a2805a7aed9d8",
"assets/assets/emoji_animado.png": "1e910d9dd1133c2ef0bac9d91faeae53",
"assets/assets/CORREDOR.png": "bb4e2956c777eb18cfdb5445387587e2",
"assets/assets/intel_1b.png": "07da4f006935ab2877ceb2abf31e80ac",
"assets/assets/questao45cerveja.png": "25cd44dacf6d1a8111900c65bd42fd72",
"assets/assets/questao45bombons.png": "08f20c58956eeacca2df4839261b921e",
"assets/assets/emoji_poderoso.png": "adf3d14eb47c23d3fb3f9c58c3557a1c",
"assets/assets/intel_2f.png": "bc5930112cb557e5718e836979d887cb",
"assets/assets/emoji_com_gratidao.png": "4aea3e2adbd3fa54552cbc13e6bd5dd6",
"assets/assets/questao45livros.png": "e5fd9ff3ea4083377ee97cc4b07957bd",
"assets/assets/questao45viajar.png": "9fe74ee4fc53c282bb2c8a21164d3b98",
"assets/assets/questao45humburgue.png": "f20dc45fa8281019d30bfba3b038490f",
"assets/assets/emoji_desanimado.png": "bf864ef7a65242cc65bcd8e8645fe796",
"assets/assets/questao45cachorro.png": "ee5a89b6fdfcf017fbe0ef89f7cd8596",
"assets/assets/intel_1c.png": "d34d49598607c6b1e5ec461b7e9235ba",
"assets/assets/emoji_apaixonado.png": "64331fc215694dccaca2758a2141e621",
"assets/assets/intel_2d.png": "47243914c7f7076c9400ce45ffff1574",
"assets/assets/emoji_agressivo.png": "7c1fe397f27436e3e1b4fa311dd4f2b2",
"assets/assets/emoji_sem_paciencia.png": "2f269cf0bf48801ffbf45aad36d81191",
"assets/assets/questao45passaro.png": "83ea3354b1ad730efbf6ac03ba1ea234",
"assets/assets/NUMERO8.png": "edfde848bb9160e4092eafdc2b07344e",
"assets/assets/chuteira.png": "718a2e0902e0c72fa815e5721325f815",
"assets/assets/emoji_burro.png": "ce46b8b67fc6a4eec66171a84a41420f",
"assets/assets/arvore_circulos.png": "d5127c8a8fd0263a4dafa6d58aa3c107",
"assets/assets/emoji_feliz.png": "0207fb8ef4bfe37ab4c270b9c92ed571",
"assets/assets/intel_1f.png": "0439a6cb3283e488f17c230835cdbc40",
"assets/assets/olho11.png": "a297d521b25f18b460e3315bca49035e",
"assets/assets/emoji_abencoado.png": "33e9ecd4104a02129beada8deee5d65f",
"assets/assets/emoji_impulsivo.png": "7cb756de9bd823d0fb55ede7e5bc2ee2",
"assets/assets/emoji_fumando_muito.png": "2860acaafcc0714a05b187759899ae2f",
"assets/assets/questao45cafe.png": "c11a886c85c5fea63b7fa51a0f8a5b73",
"assets/assets/olho14.png": "f0d167f4e42bae2143aa9d9e5d83ed49",
"assets/assets/intel_2.png": "373960231eb9828fc17a4d915a796d47",
"assets/assets/olho5.png": "731fb836661729b34490d4840fb0417c",
"assets/assets/questao45controlegame.png": "a3b23a3cd2ecd78c729af9d6b9b0acd4",
"assets/assets/intel_1d.png": "8c82ec8030379000863f227d62ceeb8c",
"assets/assets/emoji_em_panico.png": "d028a53dca464e491e067cc69368fbad",
"assets/assets/questao45casa.png": "6fd85ac744afb300be501703a6ec5354",
"assets/assets/olho2.png": "1d88c412e1bad164457ec87d59c5a8a4",
"assets/assets/olho1.png": "d0ab8def16275d0ea149597aa42d94c4",
"assets/assets/intel_2a.png": "1809154a7a9ccaff5a9a73fc5760dac4",
"assets/assets/questao45cocacola.png": "c019efb83eda6b0bf2b4d890fa2173d6",
"assets/assets/seisimagens.png": "1212f6e8b19239fd34c67d4b06ca908f",
"assets/assets/emoji_jesus.png": "b4eb13ae74b5c7d617bcaa3d5ab71c8e",
"assets/assets/five_errors2.jpg": "df22e49a2ba8d3e09b877092e2265035",
"assets/assets/olho9.png": "84c421f20f6ff7bd6008385a3938ecb9",
"assets/assets/olho6.png": "a1608df5ad6c9a676299b55d9f11e845",
"assets/assets/emoji_amado.png": "83684ff973c6d701b3cfc0a7625845f8",
"assets/assets/emoji_gordo.png": "88f3cc8b29ecabadfe80a5d45770acc5",
"assets/assets/emoji_esperancoso.png": "064ef7facd067ddb324c33655a8621d7",
"assets/assets/emoji_bebendo_muito.png": "8c31736e886709252ca319cbcc22e3b3",
"assets/assets/circo.png": "4b0209a565df58631d61b526ca9d7b6e",
"assets/assets/emoji_sem_forcas.png": "93d7a12a9e2e9655230642abb811d5f9",
"assets/assets/emoji_silenciado.png": "e5ff4ab12212526b9128ea1ac82eebcc",
"assets/assets/emoji_confuso.png": "609e247d668efe85d394f972a111e38d",
"assets/assets/emoji_velho.png": "fcaa63fc8268fe2476ca944726fca760",
"assets/assets/emoji_desesperado.png": "8c81ffe57f128fc0d434202ff9f62909",
"assets/assets/emoji_preocupado.png": "65b71bad2fca52becddecac8713af93b",
"assets/assets/emoji_fraude.png": "05d3fe79cb443efac5a7c23dc097b6f8",
"assets/assets/emoji_ansioso.png": "29efc3f36fa81032449bfcb936e60774",
"assets/AssetManifest.bin": "2a7efb26739b98a8afc8259714223f31",
"assets/fonts/MaterialIcons-Regular.otf": "7cc2a08e1410fa82f032acb3dc59d593",
"assets/NOTICES": "3fe71ce7786ad965f391384c8a9c6cd6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b17e9bfaa8c7a2a88aaa2726c65f02c2",
"/": "b17e9bfaa8c7a2a88aaa2726c65f02c2",
"main.dart.js": "0a2828d3a838b5a9b7bfe34bc19f83c8",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5cfcce7d0c71350dc07f551e5e206850",
"manifest.json": "e9b13aed05873b2373ff643afb629b86"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
