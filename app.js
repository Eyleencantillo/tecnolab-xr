const modules=[
{id:"hardware",name:"Hardware del computador",short:"Reconoce y ensambla los componentes de un equipo.",icon:"▦",tag:"ENSAMBLAJE",description:"Explora los componentes internos de un computador y descubre cómo trabajan juntos.",objective:"Identificar los componentes principales de un computador y comprender su función.",tip:"Selecciona una pieza, gírala y amplíala. Después prueba las herramientas.",items:[["Placa base","Tarjeta principal que conecta y permite la comunicación entre los componentes.","▤"],["Procesador","Ejecuta instrucciones y realiza operaciones.","▣"],["Memoria RAM","Almacena temporalmente datos que el equipo necesita utilizar rápidamente.","▥"],["Unidad SSD","Guarda archivos y programas de manera permanente.","▧"],["Tarjeta gráfica","Procesa imágenes para mostrarlas en la pantalla.","▨"],["Fuente de poder","Suministra energía eléctrica a los componentes.","▩"]],actions:["Mostrar conexiones","Separar componentes","Probar encendido"],challenge:"Identifica el procesador, la memoria RAM y la unidad SSD. Después simula el encendido del equipo."},
{id:"redes",name:"Redes informáticas",short:"Conecta dispositivos y observa cómo viajan los datos.",icon:"⌘",tag:"CONECTIVIDAD",description:"Construye una red básica y observa cómo se comunican los dispositivos.",objective:"Reconocer dispositivos de red y comprender cómo comparten información.",tip:"Usa «Conectar red» para visualizar conexiones simuladas.",items:[["Router","Dirige el tráfico de datos entre redes.","⌘"],["Switch","Conecta varios dispositivos dentro de una red local.","▦"],["Servidor","Proporciona recursos o servicios a otros equipos.","▣"],["Computador","Envía y recibe información a través de la red.","▤"]],actions:["Conectar red","Enviar paquetes","Simular falla"],challenge:"Conecta el computador, el switch y el router. Envía paquetes y observa el recorrido de la información."},
{id:"robotica",name:"Robótica",short:"Explora un robot, activa sus partes y programa una ruta.",icon:"⚙",tag:"AUTOMATIZACIÓN",description:"Conoce las partes de un robot y experimenta con movimientos y sensores.",objective:"Identificar componentes de un robot y comprender cómo las instrucciones controlan sus movimientos.",tip:"Activa «Ejecutar secuencia» para observar un movimiento programado.",items:[["Controlador","Interpreta instrucciones y coordina el robot.","▣"],["Sensor","Detecta información del entorno, como distancia u obstáculos.","◉"],["Motor","Transforma energía en movimiento.","⚙"],["Brazo robótico","Permite sujetar o desplazar objetos.","⌁"]],actions:["Ejecutar secuencia","Activar sensor","Probar motores"],challenge:"Activa el sensor y ejecuta la secuencia para que el robot complete su recorrido."},
{id:"programacion",name:"Programación",short:"Organiza instrucciones y ejecuta una secuencia lógica.",icon:"⌨",tag:"LÓGICA",description:"Construye una secuencia de instrucciones para resolver un problema.",objective:"Comprender cómo una secuencia ordenada de instrucciones permite resolver tareas.",tip:"Agrega bloques de instrucciones y ejecuta el programa.",items:[["Inicio","Indica dónde comienza la ejecución.","▶"],["Mover adelante","Ordena avanzar una posición.","↑"],["Girar","Cambia la dirección del movimiento.","↻"],["Repetir","Permite ejecutar varias veces una instrucción.","⟳"]],actions:["Agregar instrucción","Ejecutar programa","Limpiar programa"],challenge:"Crea una secuencia de instrucciones y ejecútala para llevar el robot hasta la meta."},
{id:"ciberseguridad",name:"Ciberseguridad",short:"Detecta riesgos digitales y protege la información.",icon:"◈",tag:"SEGURIDAD",description:"Aprende a reconocer amenazas comunes y tomar decisiones seguras en internet.",objective:"Identificar prácticas básicas de protección de datos, contraseñas y navegación segura.",tip:"Utiliza solo ejemplos ficticios; nunca escribas tus contraseñas personales.",items:[["Contraseña segura","Una clave robusta combina longitud y variedad de caracteres.","▣"],["Phishing","Engaño que busca obtener información simulando ser una entidad confiable.","⚠"],["Firewall","Sistema que controla el tráfico de red según reglas de seguridad.","◈"],["Cifrado","Transforma información para proteger su lectura.","▤"]],actions:["Analizar contraseña de ejemplo","Detectar phishing","Activar firewall"],challenge:"Identifica señales de alerta y distingue un mensaje confiable de uno sospechoso."},
{id:"ia",name:"Inteligencia artificial",short:"Experimenta con clasificación y reconocimiento.",icon:"✳",tag:"INTELIGENCIA",description:"Explora cómo un sistema puede aprender patrones a partir de ejemplos.",objective:"Comprender de forma introductoria los procesos de clasificación y reconocimiento.",tip:"Prueba la clasificación de objetos de demostración; los resultados son ilustrativos.",items:[["Datos","Ejemplos que pueden utilizarse para entrenar un modelo.","▤"],["Modelo","Representación aprendida que produce resultados a partir de entradas.","✳"],["Entrenamiento","Proceso de ajuste de un modelo usando datos.","⌁"],["Predicción","Resultado que genera el modelo ante un dato nuevo.","◎"]],actions:["Clasificar ejemplo","Agregar muestra","Ver proceso"],challenge:"Clasifica ejemplos y explica por qué los datos de entrenamiento influyen en los resultados."},
{id:"electronica",name:"Electricidad y electrónica",short:"Construye un circuito y comprueba su funcionamiento.",icon:"ϟ",tag:"CIRCUITOS",description:"Explora una representación de un circuito eléctrico sencillo.",objective:"Diferenciar circuitos abiertos y cerrados e identificar sus componentes.",tip:"Activa el interruptor para cerrar el circuito y observar la bombilla.",items:[["Batería","Proporciona energía eléctrica al circuito.","▰"],["Cable","Conduce la corriente entre los componentes.","⌁"],["Interruptor","Abre o cierra el paso de corriente.","◉"],["Bombilla","Transforma energía eléctrica en luz.","✦"]],actions:["Cerrar interruptor","Abrir interruptor","Probar circuito"],challenge:"Identifica los elementos del circuito y enciende la bombilla cerrando el interruptor."},
{id:"arvr",name:"Realidad aumentada y virtual",short:"Manipula objetos digitales en un espacio tridimensional.",icon:"◇",tag:"EXPERIENCIAS XR",description:"Explora objetos 3D y conoce las diferencias entre realidad aumentada y virtual.",objective:"Distinguir experiencias de realidad aumentada y realidad virtual mediante ejemplos.",tip:"Usa el escenario 3D; la disponibilidad de AR depende del dispositivo y navegador.",items:[["Objeto virtual","Elemento digital representado en un entorno tridimensional.","◇"],["Realidad aumentada","Integra contenido digital con la percepción del entorno real.","◎"],["Realidad virtual","Crea un entorno digital inmersivo.","◉"],["Seguimiento","Estima la posición o movimiento del usuario o dispositivo.","⌖"]],actions:["Cambiar perspectiva","Mostrar objeto","Comprobar compatibilidad AR"],challenge:"Manipula el objeto virtual y compara el escenario 3D con las opciones inmersivas disponibles."},
{id:"sistemas",name:"Sistemas operativos",short:"Organiza archivos, carpetas y ventanas.",icon:"▣",tag:"SISTEMAS",description:"Interactúa con un escritorio digital y practica la organización de información.",objective:"Reconocer funciones básicas de un sistema operativo y la gestión de archivos.",tip:"Selecciona los elementos del escritorio para ver su función.",items:[["Carpeta","Agrupa archivos y otras carpetas.","▰"],["Archivo","Contiene información digital, como texto, imágenes o sonido.","▤"],["Ventana","Muestra el contenido de una aplicación o documento.","▢"],["Papelera","Almacena temporalmente elementos eliminados.","♲"]],actions:["Crear carpeta demo","Organizar escritorio","Restablecer escritorio"],challenge:"Organiza los elementos del escritorio y explica por qué conviene clasificar los archivos."},
{id:"impresion",name:"Impresión 3D",short:"Observa cómo un objeto se construye capa por capa.",icon:"▱",tag:"FABRICACIÓN",description:"Explora una impresora 3D y el proceso de fabricación aditiva.",objective:"Comprender la idea general de la impresión 3D y sus componentes.",tip:"Inicia la simulación para observar la construcción progresiva del modelo.",items:[["Extrusor","Deposita material según la trayectoria programada.","▥"],["Filamento","Material utilizado para fabricar el objeto.","〰"],["Plataforma","Superficie sobre la que se construye la pieza.","▱"],["Modelo 3D","Representación digital del objeto que se desea fabricar.","◇"]],actions:["Iniciar impresión","Pausar impresión","Reiniciar capas"],challenge:"Inicia la impresión y observa cómo se forma el objeto por capas."},
{id:"datos",name:"Almacenamiento y procesamiento",short:"Explora cómo se guardan y procesan los datos.",icon:"▤",tag:"DATOS",description:"Conoce dispositivos que almacenan información y componentes que la procesan.",objective:"Diferenciar almacenamiento y procesamiento mediante ejemplos tecnológicos.",tip:"Selecciona cada componente para consultar su función.",items:[["Procesador","Ejecuta instrucciones y operaciones.","▣"],["Memoria","Conserva datos temporalmente para el trabajo del sistema.","▥"],["Almacenamiento","Conserva archivos incluso cuando el equipo se apaga.","▤"],["Servidor","Ofrece recursos o servicios a otros dispositivos.","▦"]],actions:["Simular transferencia","Guardar archivo demo","Limpiar transferencia"],challenge:"Distingue qué componente procesa información y cuál la conserva."},
{id:"evolucion",name:"Evolución tecnológica",short:"Recorre hitos de la historia de la tecnología.",icon:"◷",tag:"HISTORIA",description:"Explora cambios en dispositivos y herramientas a través del tiempo.",objective:"Reconocer que la tecnología evoluciona para responder a necesidades humanas.",tip:"Selecciona cada objeto y compara sus características.",items:[["Telégrafo","Permitió transmitir mensajes a distancia mediante señales.","⌁"],["Teléfono","Facilitó la comunicación oral a distancia.","☎"],["Computador","Automatiza el procesamiento de información.","▣"],["Dispositivo móvil","Integra comunicación y múltiples herramientas digitales.","▯"]],actions:["Ver línea de tiempo","Comparar dispositivos","Explorar galería"],challenge:"Ordena los hitos tecnológicos y explica un cambio importante en la comunicación."}
];
const $=s=>document.querySelector(s);let current=null,selectedEl=null,handStream=null,handTask=null,handLoop=null,scaleStart=null,arSession=null,arOriginalBackground=null,arCameraStream=null,arModeActive=false;
const world=$("#world");
function toast(msg){const t=$("#toast");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2600)}
function showModal(title,body,eyebrow="TECNOLAB XR"){$("#modalTitle").textContent=title;$("#modalBody").innerHTML=body;$("#modalEyebrow").textContent=eyebrow;$("#modal").classList.remove("hidden")}
function closeModal(){$("#modal").classList.add("hidden")}
function buildCards(){$("#moduleGrid").innerHTML=modules.map((m,i)=>`<button class="module-card" data-module="${m.id}"><span class="module-arrow">↗</span><div class="module-icon">${m.icon}</div><h3>${m.name}</h3><p>${m.short}</p><span class="module-tag">${String(i+1).padStart(2,"0")} / ${m.tag}</span></button>`).join("");document.querySelectorAll("[data-module]").forEach(b=>b.addEventListener("click",()=>openLab(b.dataset.module)))}
function goHome(){$("#labView").classList.remove("active");$("#homeView").classList.add("active");stopHands();current=null;window.scrollTo({top:0,behavior:"smooth"})}
function openLab(id){current=modules.find(m=>m.id===id);if(!current)return;$("#homeView").classList.remove("active");$("#labView").classList.add("active");$("#labTitle").textContent=current.name;$("#labDescription").textContent=current.description;$("#labEyebrow").textContent="LABORATORIO "+String(modules.indexOf(current)+1).padStart(2,"0");$("#objectiveText").textContent=current.objective;$("#tipText").textContent=current.tip;$("#progressBar").style.width="0%";$("#selectedName").textContent="Selecciona un objeto";$("#selectedDescription").textContent="Haz clic o toca un objeto del escenario para conocerlo y manipularlo.";$("#selectedIcon").textContent=current.icon;$("#selectedLabel").textContent="Ningún objeto seleccionado";selectedEl=null;buildScene();buildActions();window.scrollTo({top:0,behavior:"smooth"})}
function el(tag,attrs={},parent=world){const e=document.createElement(tag);Object.entries(attrs).forEach(([k,v])=>e.setAttribute(k,v));parent.appendChild(e);return e}
function buildScene(){
 world.innerHTML="";
 // Suelo continuo y arquitectura del laboratorio: se elimina la apariencia de escenario vacío.
 el("a-plane",{position:"0 0 0",rotation:"-90 0 0",width:"11.5",height:"9",color:"#102c45",material:"roughness: .82"});
 el("a-plane",{position:"0 3.1 -4.35",width:"11.5",height:"6.2",color:"#10243b",material:"roughness: .9"});
 el("a-plane",{position:"-5.72 2.8 0",rotation:"0 90 0",width:"8.8",height:"5.6",color:"#0b2036"});
 el("a-plane",{position:"5.72 2.8 0",rotation:"0 -90 0",width:"8.8",height:"5.6",color:"#0b2036"});
 // Paneles arquitectónicos, ventanales y líneas de luz en la pared posterior.
 for(let i=0;i<5;i++){
   const x=-4.55+i*2.27;
   el("a-box",{position:`${x} 2.55 -4.22`,width:"2.08",height:"4.75",depth:".08",color:i%2?"#173b59":"#14334f",material:"roughness:.72"});
   el("a-box",{position:`${x} 4.92 -4.14`,width:"1.55",height:".035",depth:".025",color:i%2?"#51e5ff":"#55e6bd",material:"emissive: #248da8; emissiveIntensity:.45"});
 }
 // Pantalla técnica central que da identidad visual al espacio.
 el("a-box",{position:"0 3.35 -4.02",width:"3.35",height:"1.62",depth:".16",color:"#07182b",material:"metalness:.35; roughness:.3"});
 el("a-plane",{position:"0 3.35 -3.925",width:"3.12",height:"1.4",color:"#123e5a",material:"emissive:#0b3550; emissiveIntensity:.25"});
 el("a-text",{value:"TECNOLAB  /  XR",position:"0 3.52 -3.89",align:"center",color:"#8cecff",width:"4.2"});
 el("a-text",{value:"LABORATORIO INTERACTIVO",position:"0 3.19 -3.89",align:"center",color:"#d5eaf5",width:"3.2"});
 // Marcos de iluminación superior y luminarias.
 for(let i=0;i<4;i++){
   el("a-box",{position:`${-3.6+i*2.4} 5.85 -1.4`,width:"1.45",height:".045",depth:".22",color:"#51e5ff",material:"emissive:#51e5ff; emissiveIntensity:.65"});
 }
 el("a-grid",{position:"0 .012 0",rotation:"-90 0 0",width:"11.5",height:"9",color:"#3b7794",opacity:".22"});
 // Módulos laterales bajos para que el espacio se perciba como un laboratorio equipado.
 for(const x of [-4.65,4.65]){
   el("a-box",{position:`${x} .52 -1.9`,width:".82",height:"1.04",depth:"2.2",color:"#173b58",material:"roughness:.55; metalness:.22"});
   el("a-box",{position:`${x} 1.06 -1.9`,width:".9",height:".08",depth:"2.28",color:"#287b9b",material:"metalness:.35; roughness:.3"});
   for(let n=0;n<3;n++)el("a-box",{position:`${x} ${.3+n*.2} -.92`,width:".035",height:".07",depth:".035",color:n===1?"#55e6bd":"#51e5ff",material:"emissive:#1689a9; emissiveIntensity:.4"});
 }
 // Iluminación de estudio para dar volumen y reflejos a los modelos.
 el("a-entity",{light:"type: ambient; color: #dceeff; intensity: 1.15",position:"0 4 0"});
 el("a-entity",{light:"type: directional; color: #ffffff; intensity: 1.55",position:"-3 6 4"});
 el("a-entity",{light:"type: point; color: #51dfff; intensity: .8; distance: 11",position:"3 3 1"});
 el("a-entity",{light:"type: point; color: #ffb76b; intensity: .42; distance: 9",position:"-3 2 -2"});
 // Dos avatares se ubican directamente sobre el suelo, sin círculos ni pedestales decorativos.
 addAvatar(-4.25, "Guía de laboratorio", "guide");
 addAvatar(4.25, "Explorador XR", "explorer");
 current.items.forEach((item,i)=>createObject(item,i));
}
function addAvatar(x,label,variant){
 // Modelos humanos GLB de Innerscene, adaptados de MakeHuman y publicados
 // bajo dedicación CC0. Las fichas y licencias se documentan en README.md.
 const avatar=el("a-entity",{position:`${x} 0 .9`,class:"lab-avatar"});
 const modelUrls={
   guide:"https://files.innerscene.com/library/amara-3d-person-standing-office-2a16c294/bc0b8cf6d7fb55755f82/amara-woman.glb",
   explorer:"https://files.innerscene.com/library/daniel-3d-person-standing-casual-f788af5a/9e300a9cc460f5e7c2d7/daniel-man.glb"
 };
 const accent=variant==="guide"?"#55e6bd":"#51e5ff";
 // El personaje queda integrado al suelo: sin círculo, aro ni pedestal bajo los pies.
 const model=el("a-entity",{position:"0 0 0",rotation:"0 180 0",scale:".92 .92 .92","gltf-model":modelUrls[variant]},avatar);
 const status=el("a-text",{value:"Cargando avatar 3D…",align:"center",color:"#d9f6ff",width:"2.8",position:"0 1.82 0",class:"avatar-loading"},avatar);
 model.addEventListener("model-loaded",()=>{
   status.setAttribute("visible","false");
   // Los GLB están modelados a escala real (aprox. 1.68–1.79 m).
   // Se aplica una reducción uniforme moderada para integrarlos en la escena.
   model.setAttribute("scale",".92 .92 .92");
   toast(`${label} listo para explorar.`);
 });
 model.addEventListener("model-error",event=>{
   console.error("No se pudo cargar el avatar:",label,event.detail||"Error GLB");
   status.setAttribute("value","No se pudo cargar el modelo 3D");
   status.setAttribute("color","#ffb4a2");
 });
 // Informa si el archivo tarda, sin bloquear el resto del laboratorio.
 setTimeout(()=>{
   if(!model.hasLoaded&&status.isConnected&&status.getAttribute("visible")!==false){
     status.setAttribute("value","El avatar está tardando en cargar…");
   }
 },12000);
 el("a-text",{value:label,align:"center",color:"#d9f6ff",width:"2.8",position:"0 2.02 0"},avatar);
}
function createObject(item,i){
 const x=(i-(current.items.length-1)/2)*1.45;
 const g=el("a-entity",{position:`${x} 1.05 -.35`,class:"interactive", "data-name":item[0],"data-description":item[1]});
 const hue=["#1c82b8","#3476c9","#278e8b","#765fc2","#bd7c42","#368cae"][i%6];
 const part=(tag,attrs)=>el(tag,attrs,g);
 // Modelos 3D distintos según el contenido del laboratorio.
 if(current.id==="hardware"||current.id==="datos"){
   if(i===0){part("a-box",{width:"1.05",height:".12",depth:".78",color:"#176b55"});for(let n=0;n<4;n++)part("a-box",{position:`${-.36+n*.24} .12 0`,width:".12",height:".12",depth:".48",color:"#d5b45c"});}
   else if(i===1){part("a-box",{width:".55",height:".16",depth:".55",color:"#252f43"});part("a-box",{position:"0 .1 0",width:".35",height:".035",depth:".35",color:"#51e5ff"});}
   else if(i===2){part("a-box",{width:".9",height:".12",depth:".22",color:"#1c3c70"});for(let n=0;n<8;n++)part("a-box",{position:`${-.36+n*.1} .09 0`,width:".035",height:".035",depth:".25",color:"#d9c16b"});}
   else if(i===3){part("a-box",{width:".75",height:".16",depth:".48",color:"#48566c"});part("a-cylinder",{position:"0 .11 0",radius:".12",height:".025",rotation:"90 0 0",color:"#51e5ff"});}
   else if(i===4){part("a-box",{width:".9",height:".18",depth:".48",color:"#202a3a"});part("a-cylinder",{position:"-.25 .12 0",radius:".18",height:".07",color:"#51e5ff"});part("a-cylinder",{position:".25 .12 0",radius:".18",height:".07",color:"#51e5ff"});}
   else{part("a-box",{width:".72",height:".55",depth:".5",color:"#39485e"});part("a-box",{position:"0 .29 .02",width:".34",height:".035",depth:".03",color:"#55e6bd"});}
 }else if(current.id==="redes"){
   part("a-box",{width:".9",height:".35",depth:".55",color:hue});for(let n=0;n<5;n++)part("a-cylinder",{position:`${-.3+n*.15} -.19 .2`,radius:".035",height:".04",rotation:"90 0 0",color:"#55e6bd"});
   // Sin aros decorativos alrededor del equipo: se conservan solo sus piezas funcionales.
 }else if(current.id==="robotica"){
   part("a-box",{width:".5",height:".42",depth:".35",color:hue});part("a-sphere",{position:"0 .34 .02",radius:".24",color:"#b8cce0"});part("a-box",{position:"0 -.29 0",width:".11",height:".3",depth:".12",color:"#51e5ff"});part("a-box",{position:".32 -.02 0",width:".16",height:".55",depth:".15",color:"#bd7c42"});
 }else if(current.id==="electronica"){
   if(i===0)part("a-box",{width:".65",height:".38",depth:".35",color:"#3273b7"});
   else if(i===1){part("a-box",{width:".42",height:".12",depth:".12",color:"#d6b45c"});for(let n=0;n<4;n++)part("a-box",{position:`${-.15+n*.1} .09 0`,width:".035",height:".08",depth:".12",color:"#d6b45c"});}
   else if(i===2){part("a-box",{width:".4",height:".12",depth:".28",color:"#303d4d"});part("a-cylinder",{position:"0 .13 0",radius:".08",height:".2",color:"#55e6bd"});}
   else{part("a-sphere",{radius:".2",color:"#ffe36a",material:"emissive: #9c7a20; emissiveIntensity: .4"});part("a-box",{position:"0 -.22 0",width:".22",height:".12",depth:".2",color:"#9aa8b8"});}
 }else if(current.id==="sistemas"||current.id==="programacion"||current.id==="ciberseguridad"){
   part("a-box",{width:".8",height:".58",depth:".09",color:"#253c59"});part("a-plane",{position:"0 0 .06",width:".68",height:".44",color:hue});for(let n=0;n<3;n++)part("a-box",{position:`0 ${.12-n*.12} .075`,width:".42",height:".025",depth:".015",color:"#d8f4ff"});
   part("a-box",{position:"0 -.42 0",width:".1",height:".28",depth:".1",color:"#8399b0"});part("a-box",{position:"0 -.56 0",width:".55",height:".07",depth:".25",color:"#52677e"});
 }else if(current.id==="impresion"){
   part("a-box",{width:".85",height:".75",depth:".12",color:"#54667b",material:"wireframe: true"});part("a-box",{position:"0 -.25 0",width:".62",height:".06",depth:".48",color:"#278e8b"});part("a-cone",{position:"0 .05 0",radiusBottom:".15",radiusTop:".04",height:".28",color:"#bd7c42"});
 }else if(current.id==="ia"){
   part("a-sphere",{radius:".26",color:hue});for(let n=0;n<5;n++){const angle=n*Math.PI*2/5;part("a-sphere",{position:`${Math.cos(angle)*.48} ${Math.sin(angle)*.32} 0`,radius:".09",color:"#51e5ff"});part("a-cylinder",{position:`${Math.cos(angle)*.24} ${Math.sin(angle)*.16} 0`,height:".5",radius:".012",rotation:`0 0 ${angle*180/Math.PI}`,color:"#51e5ff"});}
 }else if(current.id==="arvr"){
   part("a-box",{width:".55",height:".3",depth:".2",color:"#263e59"});part("a-sphere",{position:"-.16 0 .13",radius:".12",color:"#51e5ff"});part("a-sphere",{position:".16 0 .13",radius:".12",color:"#51e5ff"});part("a-box",{position:"0 .23 -.08",width:".62",height:".045",depth:".07",color:"#55e6bd"});
 }else{
   part("a-box",{width:".72",height:".55",depth:".45",color:hue});part("a-cylinder",{position:"0 .34 0",radius:".22",height:".08",color:"#51e5ff"});
 }
 part("a-text",{value:item[0],align:"center",color:"#e8f7ff",width:"3.1",position:"0 -.66 0",side:"double"});
 g.addEventListener("click",()=>selectObject(g,item));
 g.addEventListener("mouseenter",()=>{if(g!==selectedEl)g.setAttribute("animation__hover","property: scale; to: 1.06 1.06 1.06; dur: 180")});
 g.addEventListener("mouseleave",()=>{if(g!==selectedEl)g.setAttribute("animation__hover","property: scale; to: 1 1 1; dur: 180")});
}
function selectObject(g,item){if(selectedEl)selectedEl.setAttribute("scale","1 1 1");selectedEl=g;g.setAttribute("scale","1.12 1.12 1.12");$("#selectedName").textContent=item[0];$("#selectedDescription").textContent=item[1];$("#selectedIcon").textContent=item[2];$("#selectedLabel").textContent="Seleccionado: "+item[0];$("#progressBar").style.width="15%"}
function buildActions(){const box=$("#actionButtons");box.innerHTML="";current.actions.forEach((a,i)=>{const b=document.createElement("button");b.textContent=a;b.addEventListener("click",()=>runAction(i));box.appendChild(b)})}
function runAction(i){const id=current.id;if(id==="hardware"&&i===0){world.querySelectorAll("a-torus").forEach((e,j)=>e.setAttribute("color",j<3?"#55e6bd":"#51e5ff"));toast("Conexiones principales resaltadas.");}
else if(id==="hardware"&&i===1){world.querySelectorAll(".interactive").forEach((e,j)=>e.setAttribute("position",`${(j%3-1)*2.3} ${1+(j%2)*.3} ${Math.floor(j/3)*-1.1}`));toast("Componentes separados para su inspección.");}
else if(id==="redes"&&i===0){drawConnections();toast("Conexiones virtuales creadas.");}
else if(id==="redes"&&i===1){animatePackets();toast("Paquetes de datos recorriendo la red (simulación).");}
else if(id==="robotica"&&i===0){const r=world.querySelector(".interactive");r?.setAttribute("animation__move","property: position; to: 1 1.1 -1; dur: 1200; dir: alternate; loop: 2");toast("Secuencia de movimiento ejecutada.");}
else if(id==="programacion"&&i===0){addProgramBlock("Mover adelante");}
else if(id==="programacion"&&i===2){world.querySelectorAll(".program-block").forEach(e=>e.remove());toast("Secuencia limpiada.");}
else if(id==="electronica"&&(i===0||i===2)){const lamp=world.querySelectorAll(".interactive")[3];lamp?.setAttribute("material","emissive","#ffe36a; emissiveIntensity: 1.5");toast("Circuito cerrado: bombilla encendida (simulación).");}
else if(id==="electronica"&&i===1){world.querySelectorAll(".interactive")[3]?.setAttribute("material","emissive","#000000");toast("Circuito abierto: no circula corriente.");}
else if(id==="ciberseguridad"){toast(["Ejemplo ficticio analizado: usa claves largas y únicas.","Alertas: remitente extraño, urgencia y enlace inesperado.","Firewall virtual activado en esta simulación."][i]);}
else if(id==="ia"){toast(["Ejemplo clasificado: dispositivo electrónico (ilustrativo).","Muestra de demostración agregada.","Proceso: datos → modelo → predicción."][i]);}
else if(id==="arvr"&&i===2){checkAR();}
else if(id==="impresion"&&i===0){const obj=world.querySelector(".interactive");obj?.setAttribute("animation__print","property: scale; from: .2 .2 .2; to: 1 1 1; dur: 3000");toast("Impresión demostrativa iniciada.");}
else{toast("Acción ejecutada: "+current.actions[i]+".");}
$("#progressBar").style.width=(i===2?"100%":"60%")}
function drawConnections(){const points=[-1.65,0,1.65];for(let i=0;i<2;i++){const line=el("a-cylinder",{position:`${(points[i]+points[i+1])/2} 1.1 0`,radius:".025",height:"1.65",rotation:"0 0 90",color:"#55e6bd"});line.setAttribute("animation","property: material.emissive; from: #003322; to: #55e6bd; dur: 700; dir: alternate; loop: true")}}
function animatePackets(){for(let i=0;i<5;i++){const p=el("a-sphere",{position:"-1.7 1.15 .1",radius:".07",color:"#55e6bd"});p.setAttribute("animation",`property: position; to: 1.7 1.15 .1; dur: ${1200+i*180}; delay: ${i*180}; loop: true`)}}
function addProgramBlock(label){const b=el("a-box",{position:`${-1.7+Math.random()*3.4} 1.8 -1`,width:".8",height:".25",depth:".12",color:"#397cbe"});b.classList.add("program-block");el("a-text",{value:label,align:"center",color:"#ffffff",width:"2",position:"0 0 .08"},b);toast("Bloque agregado: "+label)}
function resetScene(){if(!current)return;buildScene();$("#progressBar").style.width="0%";$("#selectedName").textContent="Selecciona un objeto";$("#selectedDescription").textContent="Haz clic o toca un objeto del escenario para conocerlo y manipularlo.";$("#selectedLabel").textContent="Ningún objeto seleccionado";selectedEl=null;toast("Escenario reiniciado.")}
function manipulate(type){if(!selectedEl){toast("Primero selecciona un objeto del escenario.");return}const rot=selectedEl.getAttribute("rotation"),sc=selectedEl.getAttribute("scale");if(type==="left")selectedEl.setAttribute("rotation",`${rot.x} ${rot.y-20} ${rot.z}`);if(type==="right")selectedEl.setAttribute("rotation",`${rot.x} ${rot.y+20} ${rot.z}`);if(type==="up")selectedEl.setAttribute("scale",`${Math.min(sc.x*1.18,2.8)} ${Math.min(sc.y*1.18,2.8)} ${Math.min(sc.z*1.18,2.8)}`);if(type==="down")selectedEl.setAttribute("scale",`${Math.max(sc.x/1.18,.35)} ${Math.max(sc.y/1.18,.35)} ${Math.max(sc.z/1.18,.35)}`);if(type==="center")selectedEl.setAttribute("position","0 1.1 0")}
async function startHands(){
 if(handStream){stopHands();return}
 if(!navigator.mediaDevices?.getUserMedia){toast("Tu navegador no permite acceder a la cámara.");return}
 const video=$("#cameraVideo"),overlay=$("#handOverlay"),status=$("#handStatus");
 overlay.classList.remove("hidden");status.textContent="Solicitando acceso a la cámara…";
 try{
  handStream=await navigator.mediaDevices.getUserMedia({audio:false,video:{facingMode:"user",width:{ideal:960},height:{ideal:540},frameRate:{ideal:30,max:30}}});
  video.srcObject=handStream;await video.play();
  status.textContent="Cargando reconocimiento de manos…";
  const vision=await import("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14");
  const files=await vision.FilesetResolver.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm");
  const options={baseOptions:{modelAssetPath:"https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task",delegate:"CPU"},runningMode:"VIDEO",numHands:2,minHandDetectionConfidence:.35,minHandPresenceConfidence:.35,minTrackingConfidence:.35};
  handTask=await vision.HandLandmarker.createFromOptions(files,options);
  const canvas=$("#handCanvas"),ctx=canvas.getContext("2d"),scene=$("#xrScene"),T=window.AFRAME?.THREE||window.THREE;
  await new Promise(resolve=>{if(scene.hasLoaded)resolve();else scene.addEventListener("loaded",resolve,{once:true})});
  let lastVideoTime=-1,lastDetect=0,smooth=[],gesture="",candidate="",candidateFrames=0,anchor=null,previousPoint=null;
  const bones=[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[17,18],[18,19],[19,20],[0,17]];
  function center(lm){return {x:(lm[0].x+lm[5].x+lm[9].x+lm[13].x+lm[17].x)/5,y:(lm[0].y+lm[5].y+lm[9].y+lm[13].y+lm[17].y)/5}}
  function classify(lm){
   const wrist=lm[0];
   const palmWidth=Math.max(.001,Math.hypot(lm[5].x-lm[17].x,lm[5].y-lm[17].y));
   const pinchRatio=Math.hypot(lm[4].x-lm[8].x,lm[4].y-lm[8].y)/palmWidth;
   const otherExtended=[12,16,20].filter(tip=>{
    const pip=tip-2;
    return Math.hypot(lm[tip].x-wrist.x,lm[tip].y-wrist.y)>
      Math.hypot(lm[pip].x-wrist.x,lm[pip].y-wrist.y)*1.10;
   }).length;
   // Umbrales más amplios para que la pinza se reconozca sin exigir juntar
   // completamente los dedos. Los otros tres dedos deben permanecer doblados.
   if(pinchRatio<.55)return "PINCH";
   if(pinchRatio>.78&&otherExtended<=2)return "SPREAD";
   const extended=[8,12,16,20].filter(tip=>{
    const pip=tip-2;
    return Math.hypot(lm[tip].x-wrist.x,lm[tip].y-wrist.y)>
      Math.hypot(lm[pip].x-wrist.x,lm[pip].y-wrist.y)*1.10;
   }).length;
   if(extended>=3)return "OPEN";
   if(extended<=1)return "FIST";
   return "NEUTRAL";
  }
  function draw(hands){
   if(!video.videoWidth||!video.videoHeight)return;
   if(canvas.width!==video.videoWidth||canvas.height!==video.videoHeight){canvas.width=video.videoWidth;canvas.height=video.videoHeight}
   ctx.clearRect(0,0,canvas.width,canvas.height);
   hands.forEach((lm,i)=>{
    ctx.lineWidth=Math.max(2,canvas.width/360);ctx.strokeStyle=i===0?"#55e6bd":"#51e5ff";
    bones.forEach(([a,b])=>{ctx.beginPath();ctx.moveTo(lm[a].x*canvas.width,lm[a].y*canvas.height);ctx.lineTo(lm[b].x*canvas.width,lm[b].y*canvas.height);ctx.stroke()});
    lm.forEach(p=>{ctx.beginPath();ctx.arc(p.x*canvas.width,p.y*canvas.height,Math.max(2,canvas.width/220),0,Math.PI*2);ctx.fillStyle=i===0?"#55e6bd":"#51e5ff";ctx.fill()});
   });
  }
  function setGesture(next){
   if(next===candidate)candidateFrames++;else{candidate=next;candidateFrames=1}
   if(candidateFrames>=3&&gesture!==candidate){gesture=candidate;anchor=null;previousPoint=null}
  }
  function moveSelected(p){
   if(!selectedEl)return;
   if(!anchor)anchor={point:p,position:selectedEl.object3D.position.clone()};
   const dx=(anchor.point.x-p.x)*5.2,dy=(anchor.point.y-p.y)*3.8;
   selectedEl.object3D.position.x=T.MathUtils.clamp(anchor.position.x+dx,-4,4);
   selectedEl.object3D.position.y=T.MathUtils.clamp(anchor.position.y+dy,.35,3.2);
   selectedEl.object3D.updateMatrixWorld(true);
  }
  function rotateSelected(p){
   if(!selectedEl){previousPoint=p;return}
   if(previousPoint){
    const dx=p.x-previousPoint.x,dy=p.y-previousPoint.y;
    selectedEl.object3D.rotation.y-=dx*4.8;
    selectedEl.object3D.rotation.x+=dy*3.2;
   }
   previousPoint=p;
  }
  function zoomSelected(direction){
   if(!selectedEl)return;
   const obj=selectedEl.object3D;
   const factor=direction>0?1.07:1/1.07;
   const next=T.MathUtils.clamp(obj.scale.x*factor,.35,4);
   obj.scale.set(next,next,next);
   obj.updateMatrixWorld(true);
  }
  function frame(){
   handLoop=requestAnimationFrame(frame);
   if(video.readyState<2||!handTask||video.currentTime===lastVideoTime)return;
   const now=performance.now();if(now-lastDetect<30)return;lastDetect=now;lastVideoTime=video.currentTime;
   let result;try{result=handTask.detectForVideo(video,now)}catch(error){console.error("Error de lectura de manos:",error);status.textContent="ERROR AL LEER LAS MANOS · "+(error.message||"Reinicia el seguimiento.");return}
   const raw=result.landmarks||result.handLandmarks||[];
   const hands=raw.slice(0,2).map((lm,i)=>{
    const old=smooth[i],filtered=old?lm.map((p,j)=>({x:old[j].x*.65+p.x*.35,y:old[j].y*.65+p.y*.35,z:p.z||0})):lm.map(p=>({...p}));
    smooth[i]=filtered;return filtered;
   });
   draw(hands);
   if(!hands.length){
    status.textContent="No detecto manos. Coloca una mano completa frente a la cámara y mejora la iluminación.";
    setGesture("NONE");smooth=[];return;
   }
   const p=center(hands[0]),detected=classify(hands[0]);
   setGesture(detected);
   if(detected==="FIST"){
    if(selectedEl){moveSelected(p);status.textContent="PUÑO CERRADO · mueve el objeto. Abre la mano para soltar."}
    else status.textContent="PUÑO DETECTADO · selecciona primero un objeto con clic o toque.";
   }else if(detected==="OPEN"){
    anchor=null;
    if(selectedEl)rotateSelected(p);else previousPoint=p;
    status.textContent="MANO ABIERTA · desplázala a izquierda o derecha para girar el objeto.";
   }else if(detected==="PINCH"){
    anchor=null;previousPoint=null;
    if(selectedEl){zoomSelected(1);status.textContent="PELLIZCO CERRADO · acercando · escala "+Math.round(selectedEl.object3D.scale.x*100)+"%. Mantén pulgar e índice juntos."}
    else status.textContent="PELLIZCO DETECTADO · selecciona primero un objeto.";
   }else if(detected==="SPREAD"){
    anchor=null;previousPoint=null;
    if(selectedEl){zoomSelected(-1);status.textContent="PELLIZCO ABIERTO · alejando · escala "+Math.round(selectedEl.object3D.scale.x*100)+"%. Separa pulgar e índice y mantén los demás dedos doblados."}
    else status.textContent="SEPARA PULGAR E ÍNDICE · selecciona primero un objeto.";
   }else{
    anchor=null;previousPoint=null;
    status.textContent="MANO DETECTADA · puño: mover · mano abierta: girar · pellizco: acercar · separar dedos: alejar.";
   }
  }
  status.textContent="CÁMARA Y MODELO LISTOS · muestra una o ambas manos completas.";
  frame();
  $("#handBtn").classList.add("active");$("#handBtn").textContent="✋ Desactivar seguimiento";
  toast("Seguimiento activo. Muestra las manos completas frente a la cámara.");
 }catch(err){
  console.error(err);stopHands();
  toast("No se pudo iniciar el seguimiento. Revisa el permiso de cámara e inténtalo de nuevo.");
 }
}
function stopHands(){
 if(handLoop)cancelAnimationFrame(handLoop);handLoop=null;
 if(handTask){handTask.close();handTask=null}
 if(handStream){handStream.getTracks().forEach(t=>t.stop());handStream=null}
 const video=$("#cameraVideo");if(video)video.srcObject=null;
 $("#handOverlay").classList.add("hidden");document.querySelectorAll("#handCursor, #handCursor2").forEach(e=>e.remove());document.querySelectorAll("#xrScene > a-sphere").forEach(e=>{if(e.getAttribute("radius")===".075")e.remove()});$("#handBtn").classList.remove("active");$("#handBtn").textContent="✋ Activar cámara y manos";
}
function prepareARRenderer(){
 const scene=$("#xrScene");
 if(!scene?.renderer)throw new Error("El escenario 3D todavía no está listo. Sal del laboratorio y vuelve a entrar.");
 if(arOriginalBackground===null)arOriginalBackground=scene.getAttribute("background")||{color:"#08172c"};
 scene.removeAttribute("background");
 scene.renderer.setClearColor(0x000000,0);
 scene.renderer.setClearAlpha(0);
 scene.renderer.domElement.style.background="transparent";
}
function activateCameraFallback(){
 const btn=$("#arBtn"),video=$("#arCameraVideo"),wrap=$("#sceneWrap");
 return navigator.mediaDevices.getUserMedia({audio:false,video:{facingMode:{ideal:"environment"},width:{ideal:1280},height:{ideal:720}}})
  .catch(error=>{
   if(error.name==="OverconstrainedError"||error.name==="NotFoundError")return navigator.mediaDevices.getUserMedia({audio:false,video:true});
   throw error;
  }).then(async stream=>{
   arCameraStream=stream;video.srcObject=stream;video.classList.remove("hidden");
   await video.play();wrap.classList.add("camera-ar-active");arModeActive=true;
   btn.disabled=false;btn.classList.add("active");btn.textContent="Salir de AR";
   $("#sceneHint").textContent="MODO CÁMARA · modelos 3D superpuestos sobre la imagen real (sin anclaje espacial)";
   toast("Cámara activada. Los modelos 3D se muestran sobre la imagen real.");
  });
}
function checkAR(){
 const btn=$("#arBtn"),scene=$("#xrScene");
 if(arModeActive){stopARMode();return}
 if(!window.isSecureContext){toast("La cámara y AR necesitan HTTPS. Abre la versión publicada en GitHub Pages.");return}
 btn.disabled=true;btn.textContent="Iniciando…";
 try{prepareARRenderer()}catch(error){btn.disabled=false;btn.textContent="◉ Modo AR";toast(error.message);return}
 // IMPORTANTE: enterAR se invoca directamente durante el clic del usuario.
 // Esperar primero a isSessionSupported/loaded puede consumir la activación y
 // hacer que Android rechace requestSession con NotAllowedError.
 let arPromise;
 try{
  if(typeof scene.enterAR!=="function")throw new Error("La versión de A-Frame no ofrece entrada WebXR AR.");
  arPromise=scene.enterAR();
 }catch(error){arPromise=Promise.reject(error)}
 Promise.resolve(arPromise).then(()=>{
  arModeActive=true;arSession=scene.xrSession||null;
  $("#sceneHint").textContent="REALIDAD AUMENTADA INMERSIVA ACTIVA · mueve el dispositivo para explorar";
  btn.disabled=false;btn.classList.add("active");btn.textContent="Salir de AR";
  toast("Realidad aumentada inmersiva activada.");
 }).catch(async error=>{
  console.warn("WebXR AR no pudo iniciarse; se intentará modo cámara:",error);
  try{
   if(!navigator.mediaDevices?.getUserMedia)throw new Error("Este navegador no permite acceder a la cámara. Prueba Chrome actualizado en Android.");
   await activateCameraFallback();
  }catch(cameraError){
   console.error("No se pudo iniciar AR ni cámara:",cameraError);
   restoreARScene();btn.disabled=false;btn.classList.remove("active");btn.textContent="◉ Modo AR";
   const message=cameraError.name==="NotAllowedError"?"Permite el acceso a la cámara para este sitio desde los ajustes del navegador.":cameraError.name==="NotFoundError"?"No se encontró una cámara disponible.":cameraError.name==="NotReadableError"?"La cámara está siendo utilizada por otra aplicación.":cameraError.message||"No fue posible activar la realidad aumentada.";
   toast(message);
  }
 });
}
function restoreARScene(){
 const scene=$("#xrScene"),video=$("#arCameraVideo"),wrap=$("#sceneWrap"),btn=$("#arBtn");
 if(arCameraStream){arCameraStream.getTracks().forEach(track=>track.stop());arCameraStream=null}
 if(video){video.pause();video.srcObject=null;video.classList.add("hidden")}
 wrap?.classList.remove("camera-ar-active");
 if(scene?.renderer){try{scene.renderer.setClearColor(0x08172c,1);scene.renderer.setClearAlpha(1);scene.renderer.domElement.style.background=""}catch(error){console.warn("No se pudo restaurar el escenario",error)}}
 if(scene)scene.setAttribute("background",arOriginalBackground||"color: #08172c");
 arModeActive=false;arSession=null;
 if(btn){btn.disabled=false;btn.classList.remove("active");btn.textContent="◉ Modo AR"}
 if($("#sceneHint"))$("#sceneHint").textContent="Tus manos físicas interactúan directamente con los modelos virtuales: selecciona un objeto, cierra el puño para moverlo y abre la mano para girarlo";
}
function stopARMode(){
 const scene=$("#xrScene");
 if(scene?.is("ar-mode")||scene?.is("vr-mode")){
  scene.exitVR().catch(error=>console.warn("No se pudo cerrar la sesión AR:",error));
 }
 restoreARScene();toast("Modo AR desactivado.");
}
sceneARExitListener();
function sceneARExitListener(){
 const scene=$("#xrScene");
 scene.addEventListener("exit-vr",()=>{if(arModeActive)restoreARScene()});
}
$("#exploreBtn").addEventListener("click",()=>$("#moduleGrid").scrollIntoView({behavior:"smooth"}));$("#howBtn").addEventListener("click",()=>showModal("Cómo interactuar",`<ul><li><b>Mouse o táctil:</b> selecciona objetos en el escenario.</li><li><b>Girar y ampliar:</b> utiliza los controles del panel.</li><li><b>Manos físicas:</b> apunta a un modelo virtual; selecciona primero un objeto con clic o toque; cierra el puño para moverlo y abre la mano para girarlo.</li><li><b>Exploración:</b> usa las herramientas del laboratorio para activar simulaciones.</li></ul><p>El reconocimiento requiere permiso de cámara, conexión a internet y HTTPS o localhost.</p>`));$("#helpBtn").addEventListener("click",()=>$("#howBtn").click());$("#backBtn").addEventListener("click",goHome);$("#brandHome").addEventListener("click",e=>{e.preventDefault();goHome()});$("#resetBtn").addEventListener("click",resetScene);$("#rotateLeft").addEventListener("click",()=>manipulate("left"));$("#rotateRight").addEventListener("click",()=>manipulate("right"));$("#scaleUp").addEventListener("click",()=>manipulate("up"));$("#scaleDown").addEventListener("click",()=>manipulate("down"));$("#moveCenter").addEventListener("click",()=>manipulate("center"));$("#challengeBtn").addEventListener("click",()=>showModal("Desafío del laboratorio",`<p>${current?.challenge||""}</p><p>Explora el escenario, prueba las herramientas y utiliza la retroalimentación para completar la experiencia.</p>`,"MISIÓN PRÁCTICA"));$("#modalClose").addEventListener("click",closeModal);$("#modalOk").addEventListener("click",closeModal);$("#handBtn").addEventListener("click",startHands);$("#arBtn").addEventListener("click",checkAR);$("#fullscreenBtn").addEventListener("click",()=>$("#sceneWrap").requestFullscreen?.());buildCards();if("serviceWorker"in navigator&&location.protocol.startsWith("http"))navigator.serviceWorker.register("./sw.js").catch(()=>{});