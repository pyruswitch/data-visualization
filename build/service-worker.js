"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","aa2e3693187314aa0190b9e79cc0f4d4"],["/static/js/main.a3a092d9.js","0dff9124d3b59142e02c96cc742616ed"],["/static/media/0.f9234c95.svg","f9234c952daeef2816d91aac049e3540"],["/static/media/1.2f232ca3.svg","2f232ca3c9b023c99e12e7d9424d61fb"],["/static/media/2.993421e0.svg","993421e008944997c8cd904e2bbca20a"],["/static/media/3.1d0027af.svg","1d0027af588718a80bfbe08567507bdf"],["/static/media/4.2b8e2725.svg","2b8e2725885f4737577ed61a85544b45"],["/static/media/5.002543d1.svg","002543d1d4ae38a253bcbf1f4c2523ff"],["/static/media/6.9364ff4f.svg","9364ff4f29b138ba73db28c06678b06c"],["/static/media/7.a9fdce31.svg","a9fdce31e95479a2b957330766f09094"],["/static/media/8.a6ce679c.svg","a6ce679c0adf400fac96fe2b351d92e0"],["/static/media/9.f0a01562.svg","f0a015629d78aa059293bd1621ab0062"],["/static/media/bg.1f43a266.svg","1f43a2664f20b63153939b9a856f21b8"],["/static/media/bg.9bd27aa1.svg","9bd27aa17deb044337bda7e04028c9b0"],["/static/media/bg.e52f922e.svg","e52f922e1131f8ea17faaa21de7ef926"],["/static/media/comma.5399b4a5.svg","5399b4a56753ad730f7a2c7bcdf432ed"],["/static/media/logo.b7ca1b8f.svg","b7ca1b8f904a68e18e1db950d3356a99"],["/static/media/menu-active.0eb92993.svg","0eb929933003a5480d95d0a20a577b08"],["/static/media/menu-default.ae861860.svg","ae8618604cb687383646717e8d19d81a"],["/static/media/money.ee51811e.svg","ee51811e9c9d9b4ce83ffad37b5c5a32"],["/static/media/point.3c4c97dd.svg","3c4c97ddd83e7618abf4249143f9beec"],["/static/media/unit.b3277ca8.svg","b3277ca85e19cf366ea17dcdbe9618ef"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});