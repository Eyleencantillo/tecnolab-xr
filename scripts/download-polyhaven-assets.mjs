import fs from "node:fs/promises";
import path from "node:path";

const assets = [
  "classic_laptop",
  "circuit_board",
  "retro_multimeter",
  "gamepad",
  "vintage_radio_transceiver",
  "security_camera_01",
  "portable_generator",
  "industrial_microscope",
  "modular_electric_cables",
  "television_02",
  "vintage_video_camera"
];
const root = path.resolve("public/models/polyhaven");
const manifest = {};
const headers = {"User-Agent":"TECNOLAB-XR/1.0 (CC0 model download during build)"};
const allowed = /\.(gltf|glb|bin|png|jpe?g|webp|ktx2)$/i;

function collectFiles(value, out=[]) {
  if (!value || typeof value !== "object") return out;
  if (typeof value.url === "string" && allowed.test(new URL(value.url).pathname)) out.push(value.url);
  for (const [key, child] of Object.entries(value)) {
    if (key !== "url") collectFiles(child, out);
  }
  return [...new Set(out)];
}
function chooseGltfBranch(data) {
  const branch = data.gltf || data.glTF || data.gltf2 || data;
  if (!branch || typeof branch !== "object") return null;
  for (const key of ["1k","2k","4k","8k"]) if (branch[key]) return branch[key];
  return branch;
}
function basename(url) {
  return decodeURIComponent(path.posix.basename(new URL(url).pathname));
}

await fs.mkdir(root,{recursive:true});
for (const id of assets) {
  try {
    const response=await fetch("https://api.polyhaven.com/files/"+encodeURIComponent(id),{headers});
    if(!response.ok) throw new Error("API HTTP "+response.status);
    const data=await response.json();
    const branch=chooseGltfBranch(data);
    const urls=collectFiles(branch);
    const sceneUrl=urls.find(url=>/\.gltf(?:\?|$)/i.test(url)) || urls.find(url=>/\.glb(?:\?|$)/i.test(url));
    if(!sceneUrl) throw new Error("No se encontró archivo glTF/GLB en la descarga oficial");
    const folder=path.join(root,id);
    await fs.mkdir(folder,{recursive:true});
    for(const url of urls){
      const fileResponse=await fetch(url,{headers});
      if(!fileResponse.ok) throw new Error("Descarga HTTP "+fileResponse.status+" para "+basename(url));
      const bytes=Buffer.from(await fileResponse.arrayBuffer());
      await fs.writeFile(path.join(folder,basename(url)),bytes);
    }
    manifest[id]={file:basename(sceneUrl),source:"Poly Haven",license:"CC0",url:"https://polyhaven.com/a/"+id};
    console.log("Modelo CC0 descargado:",id,urls.length,"archivos");
  } catch(error) {
    console.warn("Modelo omitido (se usará el respaldo del simulador):",id,error.message);
  }
}
await fs.writeFile(path.join(root,"manifest.json"),JSON.stringify(manifest,null,2));
console.log("Manifiesto Poly Haven:",Object.keys(manifest).length,"de",assets.length,"modelos disponibles");
