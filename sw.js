const CACHE='lead-english-v2.0.0';
const CORE=['./','./index.html','./curriculum.js','./manifest.json','./icon.svg','./grade1_source.html','./grade2_source.html','./grade3_source.html','./Grade4_Jordan_TeamTogether_S1_Daily_Planner.html','./Grade4_Jordan_TeamTogether_S2_5E_Siraj_Lesson_Planner-3.html','./grade5_source.html','./grade6_source.html'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(cached=>cached||fetch(e.request).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return r}).catch(()=>cached)));});
