const CACHE="tecnolab-xr-v11";
const CORE=["./","./index.html","./styles.css","./app.js","./manifest.webmanifest"];
self.addEventListener("install",event=>{
  event.waitUntil((async()=>{
    const cache=await caches.open(CACHE);
    await cache.addAll(CORE);
    await self.skipWaiting();
  })());
});
self.addEventListener("activate",event=>{
  event.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(keys.filter(key=>key.startsWith("tecnolab-xr-")&&key!==CACHE).map(key=>caches.delete(key)));
    await self.clients.claim();
  })());
});
self.addEventListener("fetch",event=>{
  const request=event.request;
  if(request.method!=="GET"||new URL(request.url).origin!==self.location.origin)return;
  event.respondWith((async()=>{
    try{
      const response=await fetch(request,{cache:"no-store"});
      if(response&&response.ok){
        const cache=await caches.open(CACHE);
        await cache.put(request,response.clone());
      }
      return response;
    }catch(error){
      const cached=await caches.match(request);
      if(cached)return cached;
      if(request.mode==="navigate"){
        const fallback=await caches.match("./index.html");
        if(fallback)return fallback;
      }
      throw error;
    }
  })());
});