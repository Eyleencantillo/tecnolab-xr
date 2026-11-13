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
const $=s=>document.querySelector(s);let current=null,selectedEl=null,handStream=null,handTask=null,handLoop=null,scaleStart=null,arSession=null,arOriginalBackground=null;
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
 el("a-plane",{position:"0 0 0",rotation:"-90 0 0",width:"10",height:"8",color:"#0b2540",material:"roughness: 1"});
 el("a-grid",{position:"0 .018 0",rotation:"-90 0 0",width:"10",height:"8",color:"#245274",opacity:".45"});
 // Dos avatares guía acompañan la exploración en el laboratorio.
 addAvatar(-3.8, "Guía de laboratorio", "#3476c9");
 addAvatar(3.8, "Explorador XR", "#278e8b");
 current.items.forEach((item,i)=>createObject(item,i));
}
function addAvatar(x,label,shirt){
 const avatar=el("a-entity",{position:`${x} 0 .9`,class:"lab-avatar"});
 el("a-cylinder",{position:"0 .82 0",radius:".22",height:".55",color:shirt},avatar);
 el("a-sphere",{position:"0 1.28 0",radius:".19",color:"#d9a47c"},avatar);
 el("a-sphere",{position:"-.07 1.31 .16",radius:".025",color:"#10243d"},avatar);
 el("a-sphere",{position:".07 1.31 .16",radius:".025",color:"#10243d"},avatar);
 el("a-cylinder",{position:"-.28 .85 0",radius:".07",height:".48",rotation:"0 0 18",color:"#d9a47c"},avatar);
 el("a-cylinder",{position:".28 .85 0",radius:".07",height:".48",rotation:"0 0 -18",color:"#d9a47c"},avatar);
 el("a-cylinder",{position:"-.11 .28 0",radius:".075",height:".48",color:"#263d59"},avatar);
 el("a-cylinder",{position:".11 .28 0",radius:".075",height:".48",color:"#263d59"},avatar);
 el("a-text",{value:label,align:"center",color:"#bfeeff",width:"2.8",position:"0 1.58 0"},avatar);
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
   part("a-torus",{position:"0 .28 0",radius:".2",radiusTubular:".018",color:"#51e5ff"});
 }else if(current.id==="robotica"){
   part("a-box",{width:".5",height:".42",depth:".35",color:hue});part("a-sphere",{position:"0 .34 .02",radius:".24",color:"#b8cce0"});part("a-cylinder",{position:"0 -.35 0",radius:".09",height:".35",color:"#51e5ff"});part("a-box",{position:".32 -.02 0",width:".16",height:".55",depth:".15",color:"#bd7c42"});
 }else if(current.id==="electronica"){
   if(i===0)part("a-box",{width:".65",height:".38",depth:".35",color:"#3273b7"});
   else if(i===1)part("a-torus",{radius:".26",radiusTubular:".045",color:"#d6b45c"});
   else if(i===2){part("a-box",{width:".4",height:".12",depth:".28",color:"#303d4d"});part("a-cylinder",{position:"0 .13 0",radius:".08",height:".2",color:"#55e6bd"});}
   else{part("a-sphere",{radius:".2",color:"#ffe36a",material:"emissive: #9c7a20; emissiveIntensity: .4"});part("a-cylinder",{position:"0 -.22 0",radius:".13",height:".12",color:"#9aa8b8"});}
 }else if(current.id==="sistemas"||current.id==="programacion"||current.id==="ciberseguridad"){
   part("a-box",{width:".8",height:".58",depth:".09",color:"#253c59"});part("a-plane",{position:"0 0 .06",width:".68",height:".44",color:hue});for(let n=0;n<3;n++)part("a-box",{position:`0 ${.12-n*.12} .075`,width:".42",height:".025",depth:".015",color:"#d8f4ff"});
   part("a-cylinder",{position:"0 -.42 0",radius:".06",height:".28",color:"#8399b0"});part("a-box",{position:"0 -.56 0",width:".55",height:".07",depth:".25",color:"#52677e"});
 }else if(current.id==="impresion"){
   part("a-box",{width:".85",height:".75",depth:".12",color:"#54667b",material:"wireframe: true"});part("a-box",{position:"0 -.25 0",width:".62",height:".06",depth:".48",color:"#278e8b"});part("a-cone",{position:"0 .05 0",radiusBottom:".15",radiusTop:".04",height:".28",color:"#bd7c42"});
 }else if(current.id==="ia"){
   part("a-sphere",{radius:".26",color:hue});for(let n=0;n<5;n++){const angle=n*Math.PI*2/5;part("a-sphere",{position:`${Math.cos(angle)*.48} ${Math.sin(angle)*.32} 0`,radius:".09",color:"#51e5ff"});part("a-cylinder",{position:`${Math.cos(angle)*.24} ${Math.sin(angle)*.16} 0`,height:".5",radius:".012",rotation:`0 0 ${angle*180/Math.PI}`,color:"#51e5ff"});}
 }else if(current.id==="arvr"){
   part("a-box",{width:".55",height:".3",depth:".2",color:"#263e59"});part("a-sphere",{position:"-.16 0 .13",radius:".12",color:"#51e5ff"});part("a-sphere",{position:".16 0 .13",radius:".12",color:"#51e5ff"});part("a-torus",{position:"0 .23 0",radius:".35",radiusTubular:".025",color:"#55e6bd"});
 }else{
   part("a-box",{width:".72",height:".55",depth:".45",color:hue});part("a-cylinder",{position:"0 .34 0",radius:".22",height:".08",color:"#51e5ff"});
 }
 part("a-text",{value:item[0],align:"center",color:"#e8f7ff",width:"3.1",position:"0 -.66 0",side:"double"});
 part("a-torus",{radius:".58",radiusTubular:".012",color:"#51e5ff",rotation:"90 0 0",position:"0 -.43 0",opacity:".7"});
 g.addEventListener("click",()=>selectObject(g,item));
 g.addEventListener("mouseenter",()=>{if(g!==selectedEl)g.setAttribute("animation__hover","property: scale; to: 1.06 1.06 1.06; dur: 180")});
 g.addEventListener("mouseleave",()=>{if(g!==selectedEl)g.setAttribute("animation__hover","property: scale; to: 1 1 1; dur: 180")});
}
function selectObject(g,item){if(selectedEl){selectedEl.setAttribute("scale","1 1 1");selectedEl.querySelector("a-torus")?.setAttribute("color","#51e5ff")}selectedEl=g;g.setAttribute("scale","1.12 1.12 1.12");g.querySelector("a-torus")?.setAttribute("color","#ffffff");$("#selectedName").textContent=item[0];$("#selectedDescription").textContent=item[1];$("#selectedIcon").textContent=item[2];$("#selectedLabel").textContent="Seleccionado: "+item[0];$("#progressBar").style.width="15%"}
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
  handStream=await navigator.mediaDevices.getUserMedia({audio:false,video:{facingMode:"user",width:{ideal:1280},height:{ideal:720}}});
  video.srcObject=handStream;await video.play();
  status.textContent="Cargando seguimiento de ambas manos…";
  const vision=await import("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14");
  const files=await vision.FilesetResolver.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm");
  handTask=await vision.HandLandmarker.createFromOptions(files,{
   baseOptions:{modelAssetPath:"https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task",delegate:"GPU"},
   runningMode:"VIDEO",numHands:2,minHandDetectionConfidence:.55,minHandPresenceConfidence:.55,minTrackingConfidence:.55
  });
  const scene=$("#xrScene"),canvas=$("#handCanvas"),ctx=canvas.getContext("2d");
  await new Promise(resolve=>{if(scene.hasLoaded)resolve();else scene.addEventListener("loaded",resolve,{once:true})});
  const T=window.AFRAME?.THREE||window.THREE;
  if(!T)throw new Error("No se pudo inicializar el motor 3D");
  const raycaster=new T.Raycaster(),ndc=new T.Vector2(),plane=new T.Plane(),hit=new T.Vector3(),normal=new T.Vector3(),offset=new T.Vector3();
  let last=0,dragging=false,dragPlane=null,activeHand=-1,twoBase=null,prevSingle=null,handCursor=[];
  for(let n=0;n<2;n++){
   const cursor=el("a-sphere",{id:n===0?"handCursor":"handCursor2",radius:".075",color:n===0?"#55e6bd":"#51e5ff",visible:"false"});
   cursor.setAttribute("material","shader: flat; transparent: true; opacity: .9");
   handCursor.push(cursor);
  }
  const bones=[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[17,18],[18,19],[19,20],[0,17]];
  function palmOf(lm){return {x:(lm[0].x+lm[5].x+lm[9].x+lm[13].x+lm[17].x)/5,y:(lm[0].y+lm[5].y+lm[9].y+lm[13].y+lm[17].y)/5}}
  function isPinch(lm){const d=Math.hypot(lm[4].x-lm[8].x,lm[4].y-lm[8].y);return d<Math.max(.045,Math.hypot(lm[0].x-lm[9].x,lm[0].y-lm[9].y)*.32)}
  function screenRay(p){
   // Coordenadas espejadas para que el movimiento coincida con la imagen que ve el usuario.
   ndc.set((1-p.x)*2-1,1-p.y*2);
   raycaster.setFromCamera(ndc,scene.camera);
  }
  function collectMeshes(){
   const roots=[...world.querySelectorAll(".interactive")],meshes=[];
   roots.forEach(root=>root.object3D.traverse(node=>{if(node.isMesh){node.userData.handRoot=root;meshes.push(node)}}));
   return meshes;
  }
  function hitObject(p,meshes){
   screenRay(p);const hitTest=raycaster.intersectObjects(meshes,false)[0];
   return hitTest?.object?.userData?.handRoot||null;
  }
  function selectForHands(obj){
   if(!obj)return;
   const item=current.items.find(v=>v[0]===obj.dataset.name);
   selectObject(obj,item||[obj.dataset.name,obj.dataset.description,"✋"]);
  }
  function startDrag(obj,p){
   if(!obj||!scene.camera)return;
   selectForHands(obj);screenRay(p);
   const worldPos=obj.object3D.getWorldPosition(new T.Vector3());
   scene.camera.getWorldDirection(normal);
   plane.setFromNormalAndCoplanarPoint(normal,worldPos);
   dragPlane=plane.clone();
   raycaster.ray.intersectPlane(dragPlane,hit);
   offset.copy(worldPos).sub(hit);
   dragging=true;
  }
  function moveOnPlane(p){
   if(!dragging||!selectedEl||!dragPlane)return;
   screenRay(p);
   if(raycaster.ray.intersectPlane(dragPlane,hit)){
    const destination=hit.clone().add(offset);
    selectedEl.object3D.position.copy(destination);
    selectedEl.object3D.updateMatrixWorld(true);
   }
  }
  function drawHands(hands){
   canvas.width=video.videoWidth;canvas.height=video.videoHeight;
   ctx.clearRect(0,0,canvas.width,canvas.height);
   hands.forEach((lm,idx)=>{
    ctx.lineWidth=Math.max(2,canvas.width/320);ctx.strokeStyle=idx===0?"#55e6bd":"#51e5ff";
    bones.forEach(([a,b])=>{ctx.beginPath();ctx.moveTo(lm[a].x*canvas.width,lm[a].y*canvas.height);ctx.lineTo(lm[b].x*canvas.width,lm[b].y*canvas.height);ctx.stroke()});
    lm.forEach(p=>{ctx.beginPath();ctx.arc(p.x*canvas.width,p.y*canvas.height,Math.max(2,canvas.width/180),0,Math.PI*2);ctx.fillStyle=idx===0?"#55e6bd":"#51e5ff";ctx.fill()});
   });
  }
  handLoop=setInterval(()=>{
   if(video.readyState<2||!handTask||!scene.camera)return;
   const now=performance.now();if(now-last<32)return;last=now;
   const result=handTask.detectForVideo(video,now),hands=result.landmarks||[];
   drawHands(hands);
   if(!hands.length){
    status.textContent="No detecto manos. Coloca ambas dentro del encuadre.";
    handCursor.forEach(c=>c.setAttribute("visible",false));dragging=false;activeHand=-1;twoBase=null;prevSingle=null;return;
   }
   const data=hands.slice(0,2).map((lm,i)=>({lm,p:palmOf(lm),pinch:isPinch(lm),index:i}));
   const meshes=collectMeshes();
   data.forEach((h,i)=>{
    screenRay(h.p);
    const intersection=raycaster.intersectObjects(meshes,false)[0];
    const cameraPos=scene.camera.getWorldPosition(new T.Vector3());
    const point=intersection?intersection.point:cameraPos.clone().add(raycaster.ray.direction.clone().multiplyScalar(7));
    handCursor[i].object3D.position.copy(point);handCursor[i].object3D.quaternion.copy(scene.camera.quaternion);
    handCursor[i].setAttribute("visible",true);
   });
   const pinching=data.filter(h=>h.pinch);
   if(pinching.length===2){
    const mid={x:(pinching[0].p.x+pinching[1].p.x)/2,y:(pinching[0].p.y+pinching[1].p.y)/2};
    const dx=pinching[1].p.x-pinching[0].p.x,dy=pinching[1].p.y-pinching[0].p.y;
    const distance=Math.max(.04,Math.hypot(dx,dy)),angle=Math.atan2(dy,dx);
    if(!dragging){const target=hitObject(mid,meshes);if(target)startDrag(target,mid)}
    if(selectedEl){
     if(!twoBase){twoBase={distance,angle,scale:selectedEl.object3D.scale.clone(),rotation:selectedEl.object3D.rotation.clone()};}
     moveOnPlane(mid);
     const ratio=Math.max(.35,Math.min(3.2,distance/twoBase.distance));
     selectedEl.object3D.scale.copy(twoBase.scale).multiplyScalar(ratio);
     selectedEl.object3D.rotation.z=twoBase.rotation.z+(angle-twoBase.angle);
     selectedEl.object3D.updateMatrixWorld(true);
     status.textContent="DOS MANOS ACTIVAS · separa/acerca para escalar · gira las muñecas para rotar · mueve ambas para trasladar";
    }else status.textContent="Acerca ambas manos a un modelo y haz pinza con las dos para manipularlo";
    activeHand=-1;prevSingle=null;
   }else if(pinching.length===1){
    const h=pinching[0];
    if(!dragging||activeHand!==h.index){
     const target=hitObject(h.p,meshes);
     if(target){startDrag(target,h.p);activeHand=h.index}
    }
    if(dragging){moveOnPlane(h.p);status.textContent=`MANO ${h.index+1} · AGARRANDO: desplaza el objeto por el escenario`}
    twoBase=null;prevSingle=null;
   }else{
    if(dragging){dragging=false;dragPlane=null;activeHand=-1;twoBase=null}
    if(selectedEl&&data.length===1){
     const h=data[0],extended=[8,12,16,20].filter(n=>h.lm[n].y<h.lm[n-2].y).length;
     if(extended>=3&&prevSingle){
      const dx=h.p.x-prevSingle.x,dy=h.p.y-prevSingle.y;
      const rot=selectedEl.object3D.rotation;
      rot.y+=dx*2.8;rot.x+=dy*2.4;
      status.textContent="MANO ABIERTA · gira el modelo seleccionado";
     }else status.textContent="Mano detectada · haz pinza sobre un modelo para agarrarlo";
     prevSingle=h.p;
    }else{
     status.textContent=`${data.length} MANO(S) DETECTADA(S) · haz pinza para agarrar · usa ambas para escalar y girar`;
     prevSingle=null;
    }
    twoBase=null;
   }
  },30);
  $("#handBtn").classList.add("active");$("#handBtn").textContent="✋ Desactivar seguimiento";
  toast("Seguimiento activo: el simulador está leyendo hasta dos manos.");
 }catch(err){
  console.error(err);stopHands();
  toast("No se pudo iniciar el seguimiento. Revisa el permiso de cámara e inténtalo de nuevo.");
 }
}
function stopHands(){
 if(handLoop)clearInterval(handLoop);handLoop=null;
 if(handTask){handTask.close();handTask=null}
 if(handStream){handStream.getTracks().forEach(t=>t.stop());handStream=null}
 const video=$("#cameraVideo");if(video)video.srcObject=null;
 $("#handOverlay").classList.add("hidden");document.querySelectorAll("#handCursor, #handCursor2").forEach(e=>e.remove());document.querySelectorAll("#xrScene > a-sphere").forEach(e=>{if(e.getAttribute("radius")===".075")e.remove()});$("#handBtn").classList.remove("active");$("#handBtn").textContent="✋ Activar cámara y manos";
}
async function checkAR(){
 const btn=$("#arBtn"),scene=$("#xrScene");
 if(arSession){try{await arSession.end()}catch(e){console.warn("No se pudo cerrar AR",e)}return}
 if(!window.isSecureContext){toast("AR necesita una conexión segura HTTPS. Abre la versión publicada en GitHub Pages.");return}
 if(!navigator.xr){toast("Este navegador no tiene WebXR. Prueba Chrome en un móvil Android compatible con ARCore.");return}
 try{
  btn.disabled=true;btn.textContent="Preparando AR…";
  const session=await navigator.xr.requestSession("immersive-ar",{optionalFeatures:["local-floor","hit-test","dom-overlay"],domOverlay:{root:document.body}});
  const renderer=scene.renderer;
  if(!renderer)throw new Error("El motor 3D aún no está listo. Entra al laboratorio e inténtalo otra vez.");
  arOriginalBackground=scene.getAttribute("background")||{color:"#08172c"};
  scene.removeAttribute("background");
  renderer.setClearColor(0x000000,0);
  renderer.setClearAlpha(0);
  renderer.xr.enabled=true;
  renderer.xr.setReferenceSpaceType("local");
  await renderer.xr.setSession(session);
  arSession=session;
  btn.disabled=false;btn.classList.add("active");btn.textContent="Salir de AR";
  $("#sceneHint").textContent="REALIDAD AUMENTADA ACTIVA · mueve el dispositivo para explorar el espacio";
  toast("Realidad aumentada activada. Apunta la cámara hacia tu entorno.");
  session.addEventListener("end",()=>{
   arSession=null;
   try{renderer.xr.enabled=false;renderer.setClearColor(0x08172c,1);scene.setAttribute("background",arOriginalBackground||"color: #08172c")}catch(e){console.warn(e)}
   btn.classList.remove("active");btn.disabled=false;btn.textContent="◉ Modo AR";
   $("#sceneHint").textContent="Tus manos físicas interactúan directamente con los modelos virtuales: apunta, sujeta, mueve, gira y amplía";
  },{once:true});
 }catch(e){
  console.error("WebXR AR:",e);
  btn.disabled=false;btn.classList.remove("active");btn.textContent="◉ Modo AR";
  let msg=e.name==="NotAllowedError"?"No se concedió el permiso o se canceló la sesión AR.":e.name==="NotSupportedError"?"Este dispositivo o navegador no admite AR inmersiva. Usa Chrome en Android compatible con ARCore.":e.message||"No fue posible iniciar la realidad aumentada.";
  toast(msg);
 }
}
$("#exploreBtn").addEventListener("click",()=>$("#moduleGrid").scrollIntoView({behavior:"smooth"}));$("#howBtn").addEventListener("click",()=>showModal("Cómo interactuar",`<ul><li><b>Mouse o táctil:</b> selecciona objetos en el escenario.</li><li><b>Girar y ampliar:</b> utiliza los controles del panel.</li><li><b>Manos físicas:</b> apunta a un modelo virtual; haz pinza para sujetarlo y arrastrarlo, abre la mano para girarlo y usa ambas manos para ampliar o reducir.</li><li><b>Exploración:</b> usa las herramientas del laboratorio para activar simulaciones.</li></ul><p>El reconocimiento requiere permiso de cámara, conexión a internet y HTTPS o localhost.</p>`));$("#helpBtn").addEventListener("click",()=>$("#howBtn").click());$("#backBtn").addEventListener("click",goHome);$("#brandHome").addEventListener("click",e=>{e.preventDefault();goHome()});$("#resetBtn").addEventListener("click",resetScene);$("#rotateLeft").addEventListener("click",()=>manipulate("left"));$("#rotateRight").addEventListener("click",()=>manipulate("right"));$("#scaleUp").addEventListener("click",()=>manipulate("up"));$("#scaleDown").addEventListener("click",()=>manipulate("down"));$("#moveCenter").addEventListener("click",()=>manipulate("center"));$("#challengeBtn").addEventListener("click",()=>showModal("Desafío del laboratorio",`<p>${current?.challenge||""}</p><p>Explora el escenario, prueba las herramientas y utiliza la retroalimentación para completar la experiencia.</p>`,"MISIÓN PRÁCTICA"));$("#modalClose").addEventListener("click",closeModal);$("#modalOk").addEventListener("click",closeModal);$("#handBtn").addEventListener("click",startHands);$("#arBtn").addEventListener("click",checkAR);$("#fullscreenBtn").addEventListener("click",()=>$("#sceneWrap").requestFullscreen?.());buildCards();if("serviceWorker"in navigator&&location.protocol.startsWith("http"))navigator.serviceWorker.register("./sw.js").catch(()=>{});