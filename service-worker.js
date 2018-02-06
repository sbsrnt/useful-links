"use strict";var precacheConfig=[["/useful-links/index.html","4f766b69b6926aa2e05c3a01c494e2bd"],["/useful-links/static/css/main.3512948c.css","8ed6afde70287afee2772191055ee8f5"],["/useful-links/static/js/main.6dba423f.js","4ceca120a191c1cc208207a5fd57fd87"],["/useful-links/static/media/adobecolor.72c3123e.jpg","72c3123ebb2e7dbec0190c6ce390a0e6"],["/useful-links/static/media/antdesign.700b3a7e.jpg","700b3a7e37851dd19dffce8788226098"],["/useful-links/static/media/awwwards.80f3ee12.jpg","80f3ee12a20369c8eefc2a0047dc200d"],["/useful-links/static/media/caniuse.b334af08.jpg","b334af080ca5936c1d5065e927cb848e"],["/useful-links/static/media/codrops.8ae0430b.jpg","8ae0430b6e0b4c9e788adf5499c5393e"],["/useful-links/static/media/collectui.d898a5cc.jpg","d898a5cc8ef7147f29b6e6bc04637e61"],["/useful-links/static/media/cssgridgarden.629db2c4.jpg","629db2c4c30148fdbb0bcc4255f7190d"],["/useful-links/static/media/devhints.7f208fa6.jpg","7f208fa6691d3d6d17fef9f90ff1b2fd"],["/useful-links/static/media/dribbble.ac9cc64e.jpg","ac9cc64e1b1bf596861229c688e15e0c"],["/useful-links/static/media/feathericons.bb43003b.jpg","bb43003b534c332865e0382f29835cac"],["/useful-links/static/media/fontawesomeicons.cfbc8ddc.jpg","cfbc8ddc67c376201c5a085778230afd"],["/useful-links/static/media/fontelloicons.04d8a1fd.jpg","04d8a1fdb07b405892e1658985bfe614"],["/useful-links/static/media/frontend_cl.2dfacb43.jpg","2dfacb4304de58860d146cb58cc9a9fc"],["/useful-links/static/media/gitignore.a030476f.jpg","a030476f7e4d71eb655e5f6b683cdbb7"],["/useful-links/static/media/icomoonicons.81b94c30.jpg","81b94c30216da4f1a9a58615e4a23c26"],["/useful-links/static/media/image_filters.78c45037.jpg","78c45037058b27c32602d57e10f845c3"],["/useful-links/static/media/js_weekly.8ce3318e.jpg","8ce3318e2849577d0db58318493698a9"],["/useful-links/static/media/materialui.816d8e85.jpg","816d8e854af406675225fd0eadc4a7c2"],["/useful-links/static/media/overapi.665ded76.jpg","665ded76b3694f745d6d2b1f8c4977d3"],["/useful-links/static/media/reddit_webdev.fac583c5.jpg","fac583c5a2a2c9e15a95fbde51eaa5cc"],["/useful-links/static/media/semanticui.f54dd10d.jpg","f54dd10d1dbb1d01520cf14f2b4ed94f"],["/useful-links/static/media/smashing_magazine.255c8606.jpg","255c86060305283fcaaa2da26d0e87a0"],["/useful-links/static/media/tldrlegal.6edbf041.jpg","6edbf041474b22d7347c4453196aeb32"],["/useful-links/static/media/views.f1ad7420.svg","f1ad742077a2165c0f1b3a6a7c10eb87"],["/useful-links/static/media/webdev_cl.1c8dcb88.jpg","1c8dcb883365265911f434fe0b8dd4ed"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),a=urlsToCacheKeys.has(t));var n="/useful-links/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(n,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});