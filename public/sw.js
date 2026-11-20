// Service worker de transición: se instala para retirar workers y cachés antiguos.
self.addEventListener("install",event=>event.waitUntil(self.skipWaiting()));
self.addEventListener("activate",event=>{
  event.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(keys.filter(key=>key.startsWith("tecnolab-xr-")).map(key=>caches.delete(key)));
    await self.clients.claim();
    const clients=await self.clients.matchAll({type:"window",includeUncontrolled:true});
    await Promise.all(clients.map(client=>client.postMessage({type:"TECNOLAB_CLEAR_RELOAD"})));
    await self.registration.unregister();
  })());
});
