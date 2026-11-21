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
const $=s=>document.querySelector(s);
const challengePlans={
 hardware:[{target:"Procesador",text:"Localiza y selecciona el procesador."},{target:"Memoria RAM",text:"Ahora identifica la memoria RAM."},{target:"Unidad SSD",text:"Encuentra la unidad SSD."},{action:2,text:"¡Componentes identificados! Prueba el encendido del equipo."}],
 redes:[{target:"Switch",text:"Selecciona el switch para preparar la red."},{target:"Router",text:"Identifica el router que comunicará la red."},{action:0,text:"Conecta los dispositivos con «Conectar red»."},{action:1,text:"Envía paquetes y observa cómo viajan los datos."}],
 robotica:[{target:"Sensor",text:"Localiza el sensor del robot."},{action:1,text:"Activa el sensor para detectar el entorno."},{action:0,text:"Ejecuta la secuencia para poner el robot en movimiento."}],
 programacion:[{action:0,text:"Agrega una instrucción al programa."},{action:0,text:"Construye la secuencia agregando otra instrucción."},{action:1,text:"Ejecuta el programa y comprueba la secuencia."}],
 ciberseguridad:[{action:1,text:"Analiza el mensaje y detecta las señales de phishing."},{action:2,text:"Activa el firewall para proteger el sistema."}],
 ia:[{action:0,text:"Clasifica el ejemplo para que el sistema lo analice."},{action:1,text:"Agrega una muestra de entrenamiento."},{action:2,text:"Observa el proceso de datos, modelo y predicción."}],
 electronica:[{target:"Batería",text:"Identifica la batería que aporta energía."},{target:"Interruptor",text:"Selecciona el interruptor del circuito."},{action:0,text:"Cierra el circuito y enciende la bombilla."}],
 arvr:[{target:"Objeto virtual",text:"Selecciona el objeto virtual del laboratorio."},{action:0,text:"Cambia la perspectiva para explorar el espacio."},{action:1,text:"Muestra el objeto y completa la experiencia."}],
 sistemas:[{target:"Carpeta",text:"Selecciona una carpeta del escritorio."},{target:"Archivo",text:"Localiza un archivo que puedas organizar."},{action:0,text:"Crea una carpeta de demostración."},{action:1,text:"Organiza el escritorio digital."}],
 impresion:[{target:"Modelo 3D",text:"Identifica el modelo que se va a fabricar."},{action:0,text:"Inicia la impresión 3D."},{action:1,text:"Controla el proceso pausando la impresión."}],
 datos:[{target:"Procesador",text:"Selecciona el componente que procesa la información."},{target:"Almacenamiento",text:"Ahora identifica dónde se conservan los archivos."},{action:0,text:"Simula una transferencia de datos."}],
 evolucion:[{target:"Telégrafo",text:"Encuentra el telégrafo, una tecnología de comunicación antigua."},{target:"Dispositivo móvil",text:"Ahora localiza el dispositivo móvil."},{action:0,text:"Abre la línea de tiempo para comparar la evolución."}]
};
let activeMission=null,pendingChallengeStart=false;
let hardwareGame=null,hardwareGameTimer=null;
const hardwareParts=["Procesador","Memoria RAM","Unidad SSD"];
function startHardwareGame(){
 clearInterval(hardwareGameTimer);
 hardwareGame={phase:"scan",targetIndex:0,installed:new Set(),xp:0,lives:3,time:150,complete:false};
 $("#missionHud").classList.add("hidden");
 $("#hardwareGamePanel").classList.remove("hidden");
 renderHardwareGame();
 hardwareGameTimer=setInterval(()=>{
  if(!hardwareGame||hardwareGame.complete)return;
  hardwareGame.time--;
  $("#hgTimer").textContent=formatGameTime(hardwareGame.time);
  if(hardwareGame.time<=0)endHardwareGame(false);
 },1000);
 toast("🚨 ¡Alerta! El computador del laboratorio necesita reparación.");
}
function formatGameTime(seconds){return String(Math.floor(seconds/60)).padStart(2,"0")+":"+String(seconds%60).padStart(2,"0")}
function renderHardwareGame(){
 if(!hardwareGame)return;
 const g=hardwareGame;
 $("#hgXp").textContent=g.xp+" XP";$("#hgLives").textContent="♥".repeat(g.lives)+"♡".repeat(3-g.lives);
 $("#hgTimer").textContent=formatGameTime(g.time);
 $("#hgStage").textContent=g.complete?"MISIÓN COMPLETADA":g.phase==="scan"?"FASE 01 · ESCANEO":g.phase==="install"?"FASE 02 · ENSAMBLAJE":"FASE 03 · ARRANQUE";
 $("#hgProgress").style.width=(g.complete?100:g.phase==="scan"?g.targetIndex/3*34:g.phase==="install"?34+g.installed.size/3*33:67)+"%";
 $("#hgInstallArea").classList.toggle("hidden",g.phase!=="install");
 $("#hgPowerArea").classList.toggle("hidden",g.phase!=="power");
 $("#hgRetry").classList.toggle("hidden",!g.complete);
 if(g.complete){
  $("#hgTarget").textContent="¡SISTEMA RESTAURADO!";$("#hgInstruction").textContent="Reparación completada. El computador vuelve a funcionar.";
  $("#hgStatus").textContent="MISIÓN SUPERADA";$("#hgStatus").className="hg-status success";return;
 }
 if(g.phase==="scan"){
  $("#hgTarget").textContent=hardwareParts[g.targetIndex];$("#hgInstruction").textContent="Localiza el componente y selecciónalo en el escenario 3D.";
  $("#hgStatus").textContent="BUSCANDO COMPONENTE";$("#hgStatus").className="hg-status";
 }else if(g.phase==="install"){
  $("#hgTarget").textContent="Instala los tres componentes";$("#hgInstruction").textContent="Selecciona una pieza en el escenario y pulsa INSTALAR en su tarjeta.";
  $("#hgStatus").textContent="ENSAMBLAJE";$("#hgStatus").className="hg-status";
  $("#hgInstallSlots").innerHTML=hardwareParts.map(name=>{const done=g.installed.has(name);return '<button class="hg-slot '+(done?"done":"")+'" data-install="'+name+'" '+(done?"disabled":"")+'><span>'+(done?"✓":"＋")+'</span><b>'+name+'</b><small>'+(done?"INSTALADO":"INSTALAR")+'</small></button>'}).join("");
  $("#hgInstallSlots").querySelectorAll("[data-install]").forEach(btn=>btn.addEventListener("click",()=>installHardwarePart(btn.dataset.install)));
 }else{
  $("#hgTarget").textContent="Prueba de encendido";$("#hgInstruction").textContent="Todos los componentes están instalados. Inicia el computador para completar la misión.";
  $("#hgStatus").textContent="LISTO PARA ARRANCAR";$("#hgStatus").className="hg-status success";
 }
}
function loseHardwareLife(message){
 if(!hardwareGame||hardwareGame.complete)return;
 hardwareGame.lives=Math.max(0,hardwareGame.lives-1);renderHardwareGame();toast(message||"¡Cuidado! Has perdido una oportunidad.");
 if(hardwareGame.lives===0)endHardwareGame(false);
}
function handleHardwareSelection(name){
 if(!hardwareGame||hardwareGame.complete)return;
 if(hardwareGame.phase==="scan"){
  const expected=hardwareParts[hardwareGame.targetIndex];
  if(name!==expected){loseHardwareLife("Ese no es el componente solicitado. ¡Inténtalo de nuevo!");return}
  hardwareGame.xp+=100;hardwareGame.targetIndex++;
  if(hardwareGame.targetIndex>=hardwareParts.length){hardwareGame.phase="install";toast("¡Escaneo completo! Ahora ensambla las piezas.")}
  else toast("¡Correcto! +100 XP · Siguiente componente.");
  renderHardwareGame();
 }else if(hardwareGame.phase==="install"&&!hardwareGame.installed.has(name)){
  $("#hgInstruction").textContent=name+" seleccionado. Pulsa INSTALAR en su tarjeta.";toast("Pieza seleccionada: "+name+".");
 }
}
function installHardwarePart(name){
 if(!hardwareGame||hardwareGame.phase!=="install"||hardwareGame.installed.has(name))return;
 if(selectedEl?.dataset.name!==name){loseHardwareLife("Selecciona primero "+name+" en el escenario.");return}
 hardwareGame.installed.add(name);hardwareGame.xp+=150;
 selectedEl.setAttribute("animation__install","property: scale; from: 1.12 1.12 1.12; to: 1.28 1.28 1.28; dur: 260; dir: alternate");
 toast("¡"+name+" instalado! +150 XP");
 if(hardwareGame.installed.size===hardwareParts.length)hardwareGame.phase="power";
 renderHardwareGame();
}
function powerOnHardwareGame(){
 if(!hardwareGame||hardwareGame.phase!=="power")return;
 hardwareGame.xp+=250;simulateHardwareBoot();
 setTimeout(()=>{if(hardwareGame&&!hardwareGame.complete)endHardwareGame(true)},2400);
}
function endHardwareGame(won){
 if(!hardwareGame)return;clearInterval(hardwareGameTimer);hardwareGameTimer=null;
 if(won){hardwareGame.complete=true;hardwareGame.xp+=100;renderHardwareGame();$("#hgBadge").classList.remove("hidden");toast("🏆 ¡OPERACIÓN COMPLETADA! Has salvado el computador.");return}
 $("#hgStatus").textContent="MISIÓN FALLIDA";$("#hgStatus").className="hg-status danger";
 $("#hgTarget").textContent="¡Vuelve a intentarlo!";$("#hgInstruction").textContent="Se agotaron el tiempo o las oportunidades. Reinicia la misión para reparar el equipo.";
 $("#hgRetry").classList.remove("hidden");$("#hgInstallArea").classList.add("hidden");$("#hgPowerArea").classList.add("hidden");toast("Misión terminada. Puedes intentarlo otra vez.");
}
function retryHardwareGame(){$("#hgBadge").classList.add("hidden");$("#hgRetry").classList.add("hidden");startHardwareGame()}
function stopHardwareGame(){clearInterval(hardwareGameTimer);hardwareGameTimer=null;hardwareGame=null;$("#hardwareGamePanel")?.classList.add("hidden");$("#hgBadge")?.classList.add("hidden")}

function updateMissionUI(message){
 const panel=$("#missionHud");if(!panel)return;
 const steps=activeMission?.steps||[],done=activeMission?.step||0,total=steps.length;
 $("#missionCount").textContent=activeMission?.complete?"MISIÓN COMPLETADA":`OBJETIVO ${Math.min(done+1,total)} DE ${total}`;
 $("#missionProgress").style.width=(total?done/total*100:0)+"%";
 const step=steps[done];
 $("#missionTask").textContent=message||(activeMission?.complete?"¡Excelente trabajo! Has completado el desafío.":step?.text||"Completa las acciones del laboratorio.");
 const how=$("#missionHow");
 if(how)how.textContent=activeMission?.complete?"¡Lo lograste! Puedes explorar otro laboratorio.":challengeHowTo(step);
 $("#missionNext").textContent=activeMission?.complete?"✓ COMPLETADO":"EN CURSO";
}
function challengeHowTo(step){
 if(!step)return "Sigue la indicación y observa el escenario.";
 if(step.target)return "CÓMO HACERLO: busca el objeto «"+step.target+"» en el escenario 3D y haz clic o tócalo. Si usas las manos, apunta al objeto y junta el pulgar con el índice para seleccionarlo.";
 const action=current?.actions?.[step.action]||"la herramienta indicada";
 const details={
  hardware:["Pulsa «Mostrar conexiones» en HERRAMIENTAS para resaltar las conexiones principales.","Pulsa «Separar componentes» para distribuir las piezas y poder inspeccionarlas.","Cuando la misión te lo indique, pulsa «Probar encendido»."],
  redes:["Pulsa «Conectar red» para dibujar las conexiones entre los dispositivos.","Pulsa «Enviar paquetes» para ver señales viajar por la red.","Pulsa «Simular falla» para observar una situación de error."],
  robotica:["Pulsa «Ejecutar secuencia» para iniciar el movimiento simulado del robot.","Pulsa «Activar sensor» para representar la detección del entorno.","Pulsa «Probar motores» para probar el movimiento."],
  programacion:["Pulsa «Agregar instrucción» para añadir un bloque al programa.","Pulsa «Ejecutar programa» para ejecutar la secuencia construida.","Pulsa «Limpiar programa» para retirar los bloques y comenzar de nuevo."],
  ciberseguridad:["Pulsa «Analizar contraseña de ejemplo»; se mostrará una recomendación usando una clave ficticia.","Pulsa «Detectar phishing» para ver señales de alerta de un mensaje sospechoso.","Pulsa «Activar firewall» para representar la protección del sistema."],
  ia:["Pulsa «Clasificar ejemplo» para ver cómo se asigna una categoría a un dato de demostración.","Pulsa «Agregar muestra» para incorporar un ejemplo al conjunto de datos simulado.","Pulsa «Ver proceso» para observar datos → modelo → predicción."],
  electronica:["Pulsa «Cerrar interruptor» para completar el circuito y encender la bombilla.","Pulsa «Abrir interruptor» para interrumpir el paso de corriente.","Pulsa «Probar circuito» para observar la bombilla encendida en la simulación."],
  arvr:["Pulsa «Cambiar perspectiva» para modificar el punto de vista del escenario.","Pulsa «Mostrar objeto» para presentar el objeto virtual.","Pulsa «Comprobar compatibilidad AR» para revisar si el dispositivo permite esa función."],
  sistemas:["Pulsa «Crear carpeta demo» para añadir una carpeta de ejemplo al escritorio virtual.","Pulsa «Organizar escritorio» para ordenar los elementos de la demostración.","Pulsa «Restablecer escritorio» para volver a la disposición inicial."],
  impresion:["Pulsa «Iniciar impresión» para observar cómo se construye el modelo en la simulación.","Pulsa «Pausar impresión» para detener temporalmente el proceso.","Pulsa «Reiniciar capas» para volver a comenzar la demostración."],
  datos:["Pulsa «Simular transferencia» para representar el traslado de información.","Pulsa «Guardar archivo demo» para crear un ejemplo de archivo guardado.","Pulsa «Limpiar transferencia» para retirar la animación."],
  evolucion:["Pulsa «Ver línea de tiempo» para abrir el recorrido cronológico.","Pulsa «Comparar dispositivos» para observar diferencias entre tecnologías.","Pulsa «Explorar galería» para recorrer los elementos del laboratorio."]
 };
 return "CÓMO HACERLO: "+(details[current?.id]?.[step.action]||"En el panel HERRAMIENTAS, busca y pulsa el botón «"+action+"». La plataforma realizará una demostración visual.");
}
function startChallenge(){
 if(!current)return;
 const steps=challengePlans[current.id]||[{target:current.items[0]?.[0],text:"Selecciona un elemento del laboratorio."},{action:0,text:"Prueba una herramienta del laboratorio."}];
 pendingChallengeStart=true;
 const list=steps.map((step,i)=>{
  const requirement=step.target?"Seleccionar: "+step.target:current.actions[step.action]||"Realizar acción";
  return `<li><span class="briefing-step-number">${i+1}</span><div><b>${step.text}</b><small>${requirement}</small><small class="briefing-how">${challengeHowTo(step)}</small></div></li>`;
 }).join("");
 showModal(current.id==="hardware"?"🚨 OPERACIÓN: SALVAR EL COMPUTADOR":"Antes de comenzar",`<div class="challenge-briefing"><p class="briefing-intro">${current.id==="hardware"?"¡ALERTA! El computador central dejó de funcionar. Explora el laboratorio, localiza las piezas esenciales, instálalas y consigue que el sistema vuelva a encender.":current.challenge}</p><div class="briefing-meta"><span>🎯 OBJETIVO</span><p>${current.objective}</p></div><h3>RECORRIDO COMPLETO DEL DESAFÍO</h3><ol class="briefing-steps">${list}</ol><p class="briefing-note">Primero puedes leer toda la misión. Al pulsar «Iniciar desafío», el laboratorio te mostrará únicamente el paso actual y te guiará hasta completarlo.</p></div>`,"🎮 BRIEFING DE MISIÓN");
 $("#modalOk").textContent="▶ Iniciar desafío";
}
function launchChallenge(){
 if(!current)return;
 if(current.id==="hardware"){startHardwareGame();return}
 const steps=challengePlans[current.id]||[{target:current.items[0]?.[0],text:"Selecciona un elemento del laboratorio."},{action:0,text:"Prueba una herramienta del laboratorio."}];
 pendingChallengeStart=false;
 activeMission={steps,step:0,complete:false};
 $("#missionHud").classList.remove("hidden");
 updateMissionUI("¡Misión iniciada! "+steps[0].text);
 $("#modalOk").textContent="Entendido";
 toast("Desafío iniciado. ¡Completa el primer objetivo!");
}
function missionAdvance(){
 if(!activeMission||activeMission.complete)return;
 activeMission.step++;
 if(activeMission.step>=activeMission.steps.length){
   activeMission.complete=true;$("#progressBar").style.width="100%";
   updateMissionUI("¡Misión completada! Has superado todos los objetivos.");toast("🏆 ¡Desafío completado!");
 }else{
   $("#progressBar").style.width=(activeMission.step/activeMission.steps.length*100)+"%";
   updateMissionUI("¡Bien hecho! "+activeMission.steps[activeMission.step].text);toast("Objetivo cumplido. ¡Siguiente misión!");
 }
}
function missionTarget(name){
 if(current?.id==="hardware"&&hardwareGame){handleHardwareSelection(name);return}
 if(!activeMission||activeMission.complete)return;
 if(activeMission.steps[activeMission.step]?.target===name)missionAdvance();
}
function missionAction(index){
 if(!activeMission||activeMission.complete)return;
 if(activeMission.steps[activeMission.step]?.action===index)missionAdvance();
}
let current=null,selectedEl=null,handStream=null,handTask=null,handLoop=null,scaleStart=null,arSession=null,arOriginalBackground=null,arCameraStream=null,arModeActive=false;
let environmentNavigation=false;
let ambientAudio=null,ambientMaster=null,ambientOscillators=[],ambientChordTimer=null,ambientMusicOn=false;
const ambientChords=[[130.81,196,261.63,329.63],[110,164.81,220,261.63],[87.31,130.81,174.61,220],[98,146.83,196,246.94]];
let ambientChordIndex=0;
function setAmbientVolume(){
 const slider=$("#ambientVolume");
 if(slider){const label=slider.parentElement.querySelector("span");if(label)label.textContent=slider.value+"%";}
 if(ambientMaster&&slider&&ambientAudio)ambientMaster.gain.setTargetAtTime(Number(slider.value)/100*.9,ambientAudio.currentTime,.2);
}
function playAmbientChord(){
 if(!ambientAudio||!ambientOscillators.length)return;
 const chord=ambientChords[ambientChordIndex%ambientChords.length];
 ambientOscillators.forEach((osc,i)=>osc.frequency.setTargetAtTime(chord[i],ambientAudio.currentTime,2.2));
 ambientChordIndex++;
}
async function startAmbientMusic(){
 try{
  const AudioCtx=window.AudioContext||window.webkitAudioContext;
  if(!AudioCtx){toast("Este navegador no permite reproducir música ambiental.");return}
  if(!ambientAudio){
   ambientAudio=new AudioCtx();
   ambientMaster=ambientAudio.createGain();
   const filter=ambientAudio.createBiquadFilter();filter.type="lowpass";filter.frequency.value=720;filter.Q.value=.35;
   ambientMaster.gain.value=0;
   filter.connect(ambientMaster);ambientMaster.connect(ambientAudio.destination);
   [0,1,2,3].forEach((_,i)=>{
    const osc=ambientAudio.createOscillator(),gain=ambientAudio.createGain();
    osc.type="sine";osc.frequency.value=ambientChords[0][i];gain.gain.value=[.42,.30,.20,.14][i];
    osc.connect(gain);gain.connect(filter);osc.start();ambientOscillators.push(osc);
   });
  }
  await ambientAudio.resume();
  setAmbientVolume();
  ambientMaster.gain.setTargetAtTime(Number($("#ambientVolume").value)/100*.9,ambientAudio.currentTime,1.1);
  if(!ambientChordTimer){playAmbientChord();ambientChordTimer=setInterval(playAmbientChord,8500)}
  ambientMusicOn=true;updateAmbientButton();
 }catch(error){console.warn("No se pudo iniciar la música ambiental:",error);toast("No se pudo iniciar el audio. Comprueba los permisos del navegador.")}
}
function stopAmbientMusic(){
 if(ambientAudio&&ambientMaster)ambientMaster.gain.setTargetAtTime(0,ambientAudio.currentTime,.45);
 ambientMusicOn=false;updateAmbientButton();
}
function updateAmbientButton(){
 const btn=$("#ambientMusicBtn");if(!btn)return;
 btn.classList.toggle("active",ambientMusicOn);
 btn.textContent=ambientMusicOn?"♫ Música ON":"♫ Música OFF";
 btn.setAttribute("aria-pressed",String(ambientMusicOn));
}
function toggleAmbientMusic(){if(ambientMusicOn)stopAmbientMusic();else startAmbientMusic()}

const world=$("#world");
function toast(msg){const t=$("#toast");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2600)}
function showModal(title,body,eyebrow="TECNOLAB XR"){$("#modalTitle").textContent=title;$("#modalBody").innerHTML=body;$("#modalEyebrow").textContent=eyebrow;$("#modal").classList.remove("hidden")}
function closeModal(){$("#modal").classList.add("hidden")}
function buildCards(){$("#moduleGrid").innerHTML=modules.map((m,i)=>`<button class="module-card" data-module="${m.id}"><span class="module-arrow">↗</span><div class="module-icon">${m.icon}</div><h3>${m.name}</h3><p>${m.short}</p><span class="module-tag">${String(i+1).padStart(2,"0")} / ${m.tag}</span></button>`).join("");document.querySelectorAll("[data-module]").forEach(b=>b.addEventListener("click",()=>openLab(b.dataset.module)))}
function goHome(){stopAmbientMusic();stopHardwareGame();$("#labView").classList.remove("active");$("#homeView").classList.add("active");stopHands();current=null;window.scrollTo({top:0,behavior:"smooth"})}
function openLab(id){stopHardwareGame();current=modules.find(m=>m.id===id);if(!current)return;activeMission=null;pendingChallengeStart=false;$("#missionHud").classList.add("hidden");$("#modalOk").textContent="Entendido";$("#homeView").classList.remove("active");$("#labView").classList.add("active");$("#labTitle").textContent=current.name;$("#labDescription").textContent=current.description;$("#labEyebrow").textContent="LABORATORIO "+String(modules.indexOf(current)+1).padStart(2,"0");$("#objectiveText").textContent=current.objective;$("#tipText").textContent=current.tip;$("#progressBar").style.width="0%";$("#selectedName").textContent="Selecciona un objeto";$("#selectedDescription").textContent="Haz clic o toca un objeto del escenario para conocerlo y manipularlo.";$("#selectedIcon").textContent=current.icon;$("#selectedLabel").textContent="Ningún objeto seleccionado";$("#objectInfoTab").classList.add("hidden");selectedEl=null;buildScene();buildActions();window.scrollTo({top:0,behavior:"smooth"})}
function el(tag,attrs={},parent=world){const e=document.createElement(tag);Object.entries(attrs).forEach(([k,v])=>e.setAttribute(k,v));parent.appendChild(e);return e}
function buildScene(){
 world.innerHTML="";
 // Escenario despejado: se conservan únicamente los modelos 3D y la iluminación.
 // No se crea suelo, plano, cuadrícula, discos ni pedestales.
 el("a-entity",{light:"type: ambient; color: #dceeff; intensity: 1.05",position:"0 3 2"});
 el("a-entity",{light:"type: directional; color: #ffffff; intensity: 2.1; castShadow: true; shadowMapWidth: 2048; shadowMapHeight: 2048",position:"-3 7 4"});
 el("a-entity",{light:"type: point; color: #45d9ff; intensity: 1.05; distance: 15",position:"3 3 1"});
 el("a-entity",{light:"type: point; color: #ffad63; intensity: .72; distance: 12",position:"-4 2 -3"});
 current.items.forEach((item,i)=>createObject(item,i));
}
if(window.AFRAME&&!AFRAME.components["spin-gltf-parts"]){
 AFRAME.registerComponent("spin-gltf-parts",{
  schema:{prefix:{type:"string",default:"GPU_Fan"},speed:{type:"number",default:7}},
  init(){
   this.parts=[];
   this.onLoaded=()=>{
    const root=this.el.getObject3D("mesh");
    if(!root)return;
    root.traverse(node=>{if(node.name&&node.name.startsWith(this.data.prefix))this.parts.push(node)});
   };
   this.el.addEventListener("model-loaded",this.onLoaded);
   if(this.el.getObject3D("mesh"))this.onLoaded();
  },
  tick(time,delta){
   if(!this.parts.length)return;
   const step=(delta||16)/1000*this.data.speed;
   this.parts.forEach((part,index)=>{part.rotation.y+=step*(index%2?-1:1)});
  },
  remove(){this.el.removeEventListener("model-loaded",this.onLoaded);this.parts=[]}
 });
}
// Modelos de objetos reales publicados bajo licencia CC0. Los archivos conservan sus materiales PBR.
const realModelAssets={
 hardware:["circuit_board","classic_laptop","retro_multimeter","gamepad","circuit_board","portable_generator"],
 redes:["vintage_radio_transceiver","security_camera_01","classic_laptop","modular_electric_cables"],
 robotica:["industrial_microscope","portable_generator","retro_multimeter","circuit_board"],
 programacion:["classic_laptop","gamepad","television_02","vintage_video_camera"],
 ciberseguridad:["classic_laptop","security_camera_01","vintage_radio_transceiver","gamepad"],
 ia:["circuit_board","classic_laptop","retro_multimeter","television_02"],
 electronica:["retro_multimeter","circuit_board","modular_electric_cables","portable_generator"],
 arvr:["gamepad","classic_laptop","television_02","vintage_video_camera"],
 sistemas:["classic_laptop","television_02","portable_generator","circuit_board"],
 impresion:["portable_generator","industrial_microscope","modular_electric_cables","circuit_board"],
 datos:["circuit_board","retro_multimeter","classic_laptop","television_02"],
 evolucion:["vintage_radio_transceiver","classic_laptop","television_02","gamepad"]
};
const polyhavenManifestPromise=fetch(new URL("./models/polyhaven/manifest.json",document.baseURI))
 .then(response=>response.ok?response.json():{})
 .catch(()=>({}));
function createRealModel(item,i,parent,onFailure){
 const asset=realModelAssets[current.id]?.[i];
 if(!asset)return false;
 const model=el("a-entity",{},parent);
 let settled=false;
 const fallback=()=>{
  if(settled)return;
  settled=true;
  clearTimeout(loadTimeout);
  console.warn("Se activa el modelo de respaldo para:",item[0],asset);
  model.remove();
  if(parent.isConnected&&typeof onFailure==="function")onFailure();
 };
 const loadTimeout=setTimeout(fallback,20000);
 model.addEventListener("model-loaded",()=>{
  if(settled)return;
  settled=true;
  clearTimeout(loadTimeout);
  const root=model.getObject3D("mesh");
  if(!root)return;
  root.updateMatrixWorld(true);
  const THREE=AFRAME.THREE;
  const inverseRoot=new THREE.Matrix4().copy(root.matrixWorld).invert();
  const bounds=new THREE.Box3();
  root.traverse(node=>{
   if(!node.isMesh||!node.geometry)return;
   if(!node.geometry.boundingBox)node.geometry.computeBoundingBox();
   if(node.geometry.boundingBox){
    const localBox=node.geometry.boundingBox.clone().applyMatrix4(node.matrixWorld).applyMatrix4(inverseRoot);
    bounds.union(localBox);
   }
  });
  if(bounds.isEmpty())return;
  const size=bounds.getSize(new THREE.Vector3());
  const center=bounds.getCenter(new THREE.Vector3());
  const maxDimension=Math.max(size.x,size.y,size.z)||1;
  root.position.sub(center);
  model.object3D.scale.setScalar(1.16/maxDimension);
  model.object3D.updateMatrixWorld(true);
  root.traverse(node=>{
   if(node.isMesh){
    node.castShadow=true;node.receiveShadow=true;
    const mats=Array.isArray(node.material)?node.material:[node.material];
    mats.forEach(mat=>{if(mat){mat.needsUpdate=true;if("roughness" in mat&&mat.roughness===undefined)mat.roughness=.72}});
   }
  });
  model.object3D.updateMatrixWorld(true);
 },{once:true});
 model.addEventListener("model-error",event=>{
  console.error("No se pudo cargar el modelo CC0 local:",asset,event);
  fallback();
 },{once:true});
 polyhavenManifestPromise.then(manifest=>{
  if(settled)return;
  const entry=manifest?.[asset];
  if(!entry?.file){fallback();return;}
  const url=new URL("./models/polyhaven/"+asset+"/"+entry.file,document.baseURI).href;
  model.setAttribute("gltf-model",url);
 }).catch(fallback);
 return true;
}
function createObject(item,i,parent=world,skipReal=false){
 // Hardware se distribuye en una cuadrícula 3 × 2 para que los modelos no se superpongan.
 const hardwareLayout=current.id==="hardware";
 const col=i%3,row=Math.floor(i/3);
 const x=hardwareLayout?(col-1)*2.8:(i-(current.items.length-1)/2)*1.45;
 const z=hardwareLayout?1.35-row*2.8:-.35;
 const g=el("a-entity",{position:x+" 1.12 "+z,class:"interactive","data-name":item[0],"data-description":item[1],"data-purpose":objectPurposes[item[0]]||"Se utiliza para cumplir una función dentro de este laboratorio."},parent);
 // La selección y el cursor funcionan tanto con GLB externos como con el respaldo local.
 g.addEventListener("click",()=>selectObject(g,item));
 g.addEventListener("mouseenter",()=>{if(g!==selectedEl)g.setAttribute("animation__hover","property: scale; to: 1.045 1.045 1.045; dur: 180")});
 g.addEventListener("mouseleave",()=>{if(g!==selectedEl)g.setAttribute("animation__hover","property: scale; to: 1 1 1; dur: 180")});
 // Si el catálogo externo falla o tarda demasiado, se recuperan los objetos del laboratorio.
 if(!skipReal&&createRealModel(item,i,g,()=>createObject(item,i,parent,true)))return g;
 if(current.id==="hardware"){
  const hardwareModels={"Placa base":"placa-base","Procesador":"procesador","Memoria RAM":"memoria-ram","Unidad SSD":"ssd","Tarjeta gráfica":"tarjeta-grafica","Fuente de poder":"fuente-poder"};
  const slug=hardwareModels[item[0]];
  if(slug){
   // Se utilizan assets locales para que GitHub Pages y Vercel carguen los mismos modelos.
   const modelUrl=new URL("./models/hardware/"+slug+".gltf",document.baseURI).href;
   const model=el("a-entity",{"gltf-model":modelUrl,"spin-gltf-parts":"prefix: GPU_Fan; speed: 1.25",scale:"1 1 1"},g);
   model.addEventListener("model-loaded",()=>{
    const root=model.getObject3D("mesh");
    if(!root)return;
    // Calcular los límites en el espacio LOCAL del modelo. setFromObject() devuelve
    // coordenadas globales; restarlas directamente a root.position desplazaba todos
    // los modelos hacia el origen y hacía que terminaran apilados.
    root.updateMatrixWorld(true);
    const THREE=AFRAME.THREE;
    const inverseRoot=new THREE.Matrix4().copy(root.matrixWorld).invert();
    const bounds=new THREE.Box3();
    root.traverse(node=>{
     if(!node.isMesh||!node.geometry)return;
     if(!node.geometry.boundingBox)node.geometry.computeBoundingBox();
     if(node.geometry.boundingBox){
      const localBox=node.geometry.boundingBox.clone()
       .applyMatrix4(node.matrixWorld)
       .applyMatrix4(inverseRoot);
      bounds.union(localBox);
     }
    });
    if(bounds.isEmpty())return;
    const size=bounds.getSize(new THREE.Vector3());
    const center=bounds.getCenter(new THREE.Vector3());
    const maxDimension=Math.max(size.x,size.y,size.z)||1;
    // Centrar únicamente dentro del propio GLTF, sin alterar la posición de su objeto padre.
    root.position.sub(center);
    model.object3D.scale.setScalar(1.22/maxDimension);
    model.object3D.updateMatrixWorld(true);
    root.traverse(node=>{if(node.isMesh){node.castShadow=true;node.receiveShadow=true;if(node.material)node.material.needsUpdate=true}});
    model.object3D.updateMatrixWorld(true);
   });
   model.addEventListener("model-error",event=>{
    console.error("No se pudo cargar el modelo local "+slug,event);
    toast("No se pudo cargar "+item[0]+". Comprueba que los archivos 3D estén publicados.");
   },{once:true});
   return g;
  }
 }
 const colors=["#12c8e8","#5378ff","#20d5a0","#b06bff","#ff9b42","#f04f91"];
 const c=colors[i%colors.length];
 const p=(tag,attrs={})=>{
   if(tag!=="a-text"&&!attrs.material)attrs.material="shader: standard; roughness: .3; metalness: .38";
   return el(tag,attrs,g);
 };
 const box=(pos,w,h,d,color,extra={})=>p("a-box",Object.assign({position:pos,width:w,height:h,depth:d,color:color},extra));
 const cyl=(pos,r,h,color,extra={})=>p("a-cylinder",Object.assign({position:pos,radius:r,height:h,color:color},extra));
 const sph=(pos,r,color,extra={})=>p("a-sphere",Object.assign({position:pos,radius:r,color:color},extra));
 const txt=(value,pos,width,color="#ffffff")=>p("a-text",{value:value,position:pos,align:"center",color:color,width:width,side:"double"});
 const gold="#f6c453",dark="#17263d",metal="#a9bacb",bright="#eaf7ff";
 if(current.id==="hardware"){
   if(i===0){
     box("0 0 0",1.08,.09,.78,"#087d63");
     box("0 .052 0",.98,.018,.68,"#13a77c");
     box("0 .075 0",.32,.035,.3,dark);
     box("0 .097 0",.23,.018,.21,"#d6e2ed");
     for(let n=0;n<4;n++){box((-.39+n*.26)+" .09 -.12",.055,.025,.36,"#263d67");box((-.39+n*.26)+" .105 -.12",.025,.018,.29,"#d6b85b")}
     for(let n=0;n<6;n++)cyl((-.43+n*.17)+" .09 .27",.035,.09,gold,{rotation:"90 0 0"});
     for(let n=0;n<5;n++)box("-.48 .09 "+(-.25+n*.1),.07,.035,.045,"#d9e4ee");
     box("-.48 .12 -.34",.16,.1,.12,"#c7d5e2");
   }else if(i===1){
     box("0 0 0",.58,.15,.58,dark);
     box("0 .084 0",.49,.035,.49,"#dce5ed");
     box("0 .106 0",.35,.012,.35,"#f7fbff");
     txt("CORE","0 .12 0",1.1,"#2855a3");
     for(let a=0;a<6;a++)for(let b=0;b<6;b++)box((-.22+a*.088)+" -.09 "+(-.22+b*.088),.035,.035,.035,gold);
   }else if(i===2){
     box("0 0 0",.98,.07,.24,"#167d58");
     for(let n=0;n<8;n++){box((-.39+n*.112)+" .045 0",.075,.07,.17,n%2?"#1d293d":"#253b5b");box((-.39+n*.112)+" .083 0",.04,.012,.12,"#4e6b8c")}
     for(let n=0;n<20;n++)box((-.46+n*.048)+" -.045 .13",.022,.018,.08,gold);
   }else if(i===3){
     box("0 0 0",.78,.13,.48,"#26374b");
     box("0 .072 0",.65,.012,.36,"#d4e0eb");
     box("0 .085 0",.3,.012,.16,"#1b70a8");
     txt("SSD","0 .1 0",.8,"#ffffff");
     for(const pos of ["-.33 .075 -.18",".33 .075 -.18","-.33 .075 .18",".33 .075 .18"])cyl(pos,.025,.012,gold);
   }else if(i===4){
     box("0 0 0",1,.2,.48,"#263b54");
     box("0 .11 0",.91,.025,.42,"#3f5e7c");
     for(const x0 of [-.25,.25]){
       cyl(x0+" .13 .02",.17,.045,"#15263c",{rotation:"90 0 0"});
       cyl(x0+" .16 .045",.115,.025,"#31bce4",{rotation:"90 0 0"});
       cyl(x0+" .18 .06",.045,.02,"#dce8f2",{rotation:"90 0 0"});
       for(let n=0;n<5;n++)box((x0+Math.cos(n*1.256)*.09)+" .18 "+(.06+Math.sin(n*1.256)*.09),.025,.018,.08,"#91a9bd");
     }
     box("0 -.13 0",.82,.045,.36,"#111e31");
   }else{
     box("0 0 0",.74,.58,.52,"#35465b");
     box("0 .31 0",.76,.045,.54,"#93a6b8");
     cyl("0 .02 .27",.19,.035,"#17263a",{rotation:"90 0 0"});
     cyl("0 .02 .3",.12,.04,"#5e7892",{rotation:"90 0 0"});
     for(let n=0;n<7;n++)box((-.27+n*.09)+" -.23 .269",.035,.025,.012,"#8fa5b9");
     box("0 -.28 -.05",.5,.035,.35,"#18283d");
   }
 }else if(current.id==="datos"){
   if(i===0){box("0 0 0",.58,.14,.58,dark);box("0 .08 0",.48,.025,.48,"#dce5ed");txt("CPU","0 .1 0",.9,"#2855a3");for(let a=0;a<6;a++)for(let b=0;b<6;b++)box((-.22+a*.088)+" -.09 "+(-.22+b*.088),.03,.035,.03,gold)}
   else if(i===1){box("0 0 0",.95,.07,.23,"#137e5b");for(let n=0;n<8;n++)box((-.38+n*.11)+" .05 0",.075,.065,.16,"#253b5b");for(let n=0;n<18;n++)box((-.43+n*.05)+" -.045 .13",.02,.02,.07,gold)}
   else if(i===2){box("0 0 0",.8,.14,.5,"#35475d");box("0 .08 0",.65,.015,.35,"#dce6ee");txt("DATA","0 .1 0",.9,"#236da7")}
   else{box("0 0 0",.72,.86,.48,"#263a54");box("0 .18 .25",.58,.22,.025,"#14243a");box("0 -.12 .25",.58,.22,.025,"#14243a");for(let n=0;n<4;n++)sph((-.2+n*.13)+" .2 .28",.025,n%2?"#38e6b2":"#38c8ff");for(let n=0;n<4;n++)sph((-.2+n*.13)+" -.1 .28",.025,"#38e6b2");}
 }else if(current.id==="redes"){
   if(i===0){
     box("0 0 0",.9,.27,.58,"#2478d0");box("0 .15 0",.82,.035,.5,"#3e9df0");
     for(const xx of [-.28,.28])cyl(xx+" .42 -.12",.025,.55,"#dce8f2");
     for(let n=0;n<5;n++)sph((-.27+n*.135)+" .16 .27",.025,n%2?"#48f0b4":"#ffdb65");
     for(let n=0;n<4;n++)box((-.27+n*.18)+" -.09 .3",.11,.07,.025,"#15283e");
   }else if(i===1){
     box("0 0 0",1,.24,.55,"#263c58");box("0 .13 0",.94,.035,.5,"#3b5b7c");
     for(let n=0;n<8;n++){box((-.39+n*.112)+" -.015 .29",.075,.105,.035,"#111d2e");box((-.39+n*.112)+" .05 .31",.035,.012,.012,gold)}
     for(let n=0;n<8;n++)sph((-.39+n*.112)+" .11 -.15",.018,n%3?"#49edb3":"#ffe16a");
   }else if(i===2){
     box("0 0 0",.78,.9,.55,"#34475f");box("0 .22 .29",.65,.23,.035,"#101e32");box("0 -.12 .29",.65,.23,.035,"#101e32");
     for(let n=0;n<5;n++)sph((-.22+n*.11)+" .22 .32",.025,n%2?"#40e5ad":"#4acbff");
     for(let n=0;n<5;n++)sph((-.22+n*.11)+" -.12 .32",.025,"#4acbff");
   }else{
     box("0 0 0",.65,.65,.12,"#2c4059");box("0 .02 .08",.55,.42,.025,"#36a8ee");box("0 -.39 0",.12,.28,.12,metal);box("0 -.54 0",.55,.06,.3,"#7f91a8");
     box("0 .02 .1",.36,.025,.012,"#ffffff");
   }
 }else if(current.id==="robotica"){
   if(i===0){
     box("0 0 0",.62,.09,.48,"#087d63");box("0 .06 0",.2,.08,.18,"#263b59");
     for(let n=0;n<5;n++)cyl((-.23+n*.115)+" .07 .15",.025,.06,gold);
     for(let n=0;n<4;n++)box((-.2+n*.13)+" .07 -.15",.08,.07,.1,"#243a59");
   }else if(i===1){
     box("0 0 0",.48,.3,.18,"#3b526c");cyl("-.14 0 .12",.11,.08,"#b6c9d9",{rotation:"90 0 0"});cyl(".14 0 .12",.11,.08,"#b6c9d9",{rotation:"90 0 0"});cyl("-.14 0 .17",.065,.025,"#263d57",{rotation:"90 0 0"});cyl(".14 0 .17",.065,.025,"#263d57",{rotation:"90 0 0"});
   }else if(i===2){
     cyl("0 0 0",.24,.5,"#1f6fb4",{rotation:"0 0 90"});cyl("0 0 .27",.09,.12,gold,{rotation:"0 0 90"});cyl("0 0 -.27",.08,.1,metal,{rotation:"0 0 90"});
   }else{
     box("0 -.3 0",.38,.16,.34,"#283d57");cyl("0 -.17 0",.14,.2,"#e1a13d");box("0 .04 0",.13,.48,.14,"#2b9bc9");cyl("0 .3 0",.12,.16,"#e1a13d");box(".22 .5 0",.48,.12,.14,"#2b9bc9");cyl(".47 .5 0",.09,.16,"#e1a13d");box(".58 .42 0",.22,.09,.12,"#d8e4ed");
   }
 }else if(current.id==="programacion"){
   if(i===0){box("0 0 0",.55,.28,.42,"#19bd79");txt("INICIO","0 .02 .22",1.2,"#ffffff");}
   else if(i===1){box("0 0 0",.65,.28,.42,"#278fe6");txt("AVANZAR","0 .02 .22",1.4);p("a-cone",{position:".38 .03 .02",radiusBottom:.12,radiusTop:.02,height:.24,rotation:"0 0 -90",color:"#f7fbff"});}
   else if(i===2){box("0 0 0",.65,.28,.42,"#ed8b32");txt("GIRAR","0 .02 .22",1.2);p("a-cone",{position:".32 .03 .02",radiusBottom:.13,radiusTop:.02,height:.24,rotation:"0 0 -90",color:"#fff2d8"});}
   else{box("0 0 0",.58,.32,.42,"#9b61e8");box("0 .19 0",.58,.08,.42,"#c08cff");txt("REPETIR","0 .02 .22",1.3);}
 }else if(current.id==="ciberseguridad"){
   if(i===0){
     box("0 -.08 0",.52,.48,.18,"#258fe2");box("0 .24 0",.32,.28,.14,"#f6bd4c");box("0 .24 .09",.19,.19,.025,"#263b58");sph("0 -.08 .13",.055,"#ffffff");box("0 -.2 .13",.035,.12,.035,"#ffffff");
   }else if(i===1){
     box("0 0 0",.68,.48,.1,"#e8f2fb");box("0 .11 .06",.55,.08,.025,"#f05d78");box("-.16 -.02 .07",.2,.025,.02,"#5d7896");box(".12 -.02 .07",.25,.025,.02,"#5d7896");box("0 -.15 .07",.46,.025,.02,"#5d7896");
   }else if(i===2){
     p("a-octahedron",{radius:.42,color:"#e64c5e",position:"0 0 0"});box("0 0 .31",.2,.48,.07,"#f9d15b");box("0 0 .36",.08,.3,.025,"#24364f");
   }else{
     box("0 0 0",.58,.52,.15,"#347cc5");box("0 .05 .1",.34,.18,.025,"#c7e6ff");for(let n=0;n<3;n++)sph((-.15+n*.15)+" -.16 .1",.035,gold);
   }
 }else if(current.id==="ia"){
   if(i===0){
     for(let n=0;n<5;n++){cyl((-.28+n*.14)+" 0 0",.06,.38,n%2?"#3a9de8":"#28c99a");sph((-.28+n*.14)+" .23 0",.055,"#f7c653");}
   }else if(i===1){
     sph("0 0 0",.19,"#9d63ef");for(let n=0;n<6;n++){const a=n*Math.PI/3;const xx=Math.cos(a)*.39,yy=Math.sin(a)*.32;cyl((xx/2)+" "+(yy/2)+" 0",.014,.46,"#4bd8ff",{rotation:"0 0 "+(-a*180/Math.PI)});sph(xx+" "+yy+" 0",.085,n%2?"#21c9a0":"#3b9df2");}
   }else if(i===2){
     box("0 0 0",.58,.58,.48,"#2b4667");box("0 .05 .25",.38,.25,.025,"#9d63ef");for(let n=0;n<4;n++)sph((-.2+n*.13)+" -.2 .27",.035,"#4bd8ff");
   }else{
     box("0 -.2 0",.65,.12,.4,"#334c69");for(let n=0;n<4;n++)box((-.22+n*.15)+" "+(-.05+n*.13)+" 0",.09,.14,.1,n%2?"#27c99b":"#4b9fff");
     p("a-cone",{position:".35 .25 0",radiusBottom:.16,radiusTop:.02,height:.32,color:"#f5c34f"});
   }
 }else if(current.id==="electronica"){
   if(i===0){cyl("0 0 0",.22,.62,"#2386d6");cyl("0 .32 0",.19,.035,gold);cyl("0 -.32 0",.19,.035,gold);txt("AA","0 .02 .23",.8);}
   else if(i===1){cyl("0 0 0",.055,.82,"#e9b84d",{rotation:"0 0 90"});sph("-.42 0 0",.075,"#e34f65");sph(".42 0 0",.075,"#3e9de9");}
   else if(i===2){box("0 0 0",.42,.22,.28,"#263d59");cyl("0 .18 0",.045,.25,"#f4c24f",{rotation:"0 0 -25"});sph("0 .29 0",.06,"#f4c24f");}
   else{sph("0 .13 0",.19,"#fff0a0",{material:"shader: standard; roughness: .18; metalness: .05; emissive: #ffd84a; emissiveIntensity: .35"});cyl("0 -.1 0",.09,.18,"#c5d0dc");cyl("0 -.22 0",.095,.06,gold);}
 }else if(current.id==="arvr"){
   if(i===0){
     box("0 0 0",.72,.35,.28,"#263b59");box("0 .02 .16",.62,.24,.06,"#17253a");for(const xx of [-.18,.18]){sph(xx+" .02 .2",.11,"#4bd9ff",{material:"shader: standard; roughness: .12; metalness: .12; opacity: .75; transparent: true"});}
     box("0 .23 -.04",.64,.05,.1,"#20cba0");
   }else if(i===1){
     box("0 0 0",.38,.62,.12,"#253d5c");box("0 .03 .08",.32,.48,.025,"#39a9ee");box("0 .03 .1",.22,.025,.015,"#e9f7ff");sph(".22 .18 .1",.08,"#f5c34f");
   }else if(i===2){
     box("0 0 0",.72,.34,.28,"#253a56");for(const xx of [-.19,.19])sph(xx+" 0 .16",.115,"#6e7df2");box("0 .22 -.02",.68,.06,.12,"#24cda5");
   }else{box("0 0 0",.5,.5,.12,"#2c4563");box("0 0 .08",.36,.36,.035,"#42bce8");for(let n=0;n<4;n++)sph((-.12+(n%2)*.24)+" "+(-.12+Math.floor(n/2)*.24)+" .12",.035,"#f4cf62");}
 }else if(current.id==="sistemas"){
   if(i===0){box("0 -.08 0",.66,.42,.12,"#e9b94f");box("-.12 .17 .02",.38,.14,.12,"#f7cf68");box("0 -.04 .08",.56,.28,.025,"#f3cf79");}
   else if(i===1){box("0 0 0",.52,.68,.08,"#e8f3fc");box("-.13 .2 .05",.12,.08,.015,"#55a9e8");for(let n=0;n<4;n++)box("0 "+(.05-n*.11)+" .05",.3,.025,.015,"#8ba5bd");}
   else if(i===2){box("0 0 0",.72,.54,.1,"#405a79");box("0 .19 .06",.68,.1,.025,"#28a8e6");for(let n=0;n<3;n++)box("-.22 "+(.19-n*.17)+" .07",.12,.035,.015,"#dceaf5");}
   else{cyl("0 -.02 0",.22,.48,"#d65c74");cyl("0 .23 0",.25,.06,"#ec8194");box("0 .27 0",.48,.06,.34,"#ec8194");}
 }else if(current.id==="impresion"){
   if(i===0){
     for(const xx of [-.4,.4])box(xx+" 0 0",.07,.86,.07,"#a8b9c9");
     box("0 .4 0",.86,.07,.07,"#a8b9c9");box("0 -.4 0",.86,.07,.07,"#a8b9c9");
     box("0 -.22 .02",.65,.045,.5,"#2697cf");box("0 .23 0",.22,.18,.22,"#ef8f43");cyl("0 .1 .02",.07,.18,"#d8e4ee");
   }else if(i===1){cyl("0 0 0",.28,.12,"#7a8da4",{rotation:"90 0 0"});cyl("0 0 .08",.1,.16,"#f09b43",{rotation:"90 0 0"});cyl("0 0 -.08",.1,.16,"#f09b43",{rotation:"90 0 0"});}
   else if(i===2){box("0 0 0",.72,.08,.58,"#258fc1");box("0 .06 0",.62,.025,.48,"#52c5e8");}
   else{p("a-dodecahedron",{radius:.35,color:"#a66df0"});box("0 -.38 0",.48,.06,.4,"#263d5b");}
 }else if(current.id==="evolucion"){
   if(i===0){box("0 0 0",.65,.36,.4,"#8b6948");box("0 .22 0",.55,.08,.34,"#c49a61");cyl("-.2 .28 .18",.045,.1,gold);box(".18 .23 .18",.2,.05,.04,"#e5d2a7");}
   else if(i===1){box("0 -.08 0",.52,.28,.32,"#33465c");cyl("0 .1 .12",.24,.12,"#d8e2eb",{rotation:"90 0 0"});cyl("-.2 .1 .12",.08,.14,"#d8e2eb",{rotation:"90 0 0"});cyl(".2 .1 .12",.08,.14,"#d8e2eb",{rotation:"90 0 0"});}
   else if(i===2){box("0 .08 0",.72,.52,.09,"#263b55");box("0 .08 .06",.62,.42,.025,"#42a9e9");box("0 -.3 0",.12,.25,.12,"#a8b8c8");box("0 -.43 0",.52,.06,.28,"#71859c");}
   else{box("0 0 0",.36,.7,.08,"#293e5a");box("0 0 .05",.3,.58,.025,"#35a8e8");box("0 -.25 .07",.1,.025,.012,"#eaf8ff");sph("0 .25 .08",.025,"#48e0b1");}
 }else{
   box("0 0 0",.72,.5,.42,c);box("0 .29 0",.4,.08,.3,"#eaf4fb");box("0 -.3 0",.3,.08,.2,"#263b55");
 }
 // Acabados y microdetalles para dar mayor lectura material a los modelos de todos los laboratorios.
 const screw=(x,y,z)=>p("a-cylinder",{position:`${x} ${y} ${z}`,radius:.018,height:.012,color:"#dce6ef",rotation:"90 0 0",material:"shader:standard; roughness:.24; metalness:.82"});
 const led=(x,y,z,color="#45e7bd")=>p("a-sphere",{position:`${x} ${y} ${z}`,radius:.018,color,material:`shader:standard; emissive:${color}; emissiveIntensity:.38; roughness:.2`});
 const seam=(x,y,z,w,h,d,color="#91a7ba")=>p("a-box",{position:`${x} ${y} ${z}`,width:w,height:h,depth:d,color,material:"shader:standard; roughness:.3; metalness:.58"});
 if(["hardware","datos","redes"].includes(current.id)){
   if(current.id==="hardware"&&i===0){
     [[-.46,.105,-.29],[.46,.105,-.29],[-.46,.105,.29],[.46,.105,.29]].forEach(v=>screw(...v));
     for(let n=0;n<6;n++)led(-.35+n*.14,.13,.31,n%2?"#49d9ff":"#ffd36b");
     seam(0,.12,-.34,.34,.025,.025,"#b9c9d8");
   }else if(current.id==="hardware"&&i===1){
     [[-.24,.12,-.24],[.24,.12,-.24],[-.24,.12,.24],[.24,.12,.24]].forEach(v=>screw(...v));
     seam(0,.125,.255,.28,.012,.012,"#f6c453");
   }else if(current.id==="hardware"&&i===2){
     for(let n=0;n<20;n++)seam(-.46+n*.048,-.055,.13,.018,.014,.045,"#d5b45d");
     for(const x0 of [-.44,.44])screw(x0,.045,-.1);
   }else if(current.id==="hardware"&&i===3){
     [[-.33,.08,-.18],[.33,.08,-.18],[-.33,.08,.18],[.33,.08,.18]].forEach(v=>screw(...v));
     seam(0,.094,-.22,.28,.018,.025,"#6fd5ed");
   }else if(current.id==="hardware"&&i===4){
     for(let n=0;n<7;n++)seam(-.29+n*.095,-.13,.245,.045,.025,.018,"#c6d2df");
     for(const x0 of [-.42,.42])screw(x0,-.08,.24);
   }else if(current.id==="hardware"&&i===5){
     for(let n=0;n<5;n++)seam(-.2+n*.1,.04,.267,.035,.018,.012,"#9eb1c2");
     for(const x0 of [-.29,.29])screw(x0,.25,.27);
     led(-.22,-.19,.27,"#45e7bd");led(-.12,-.19,.27,"#f6c453");
   }else if(current.id==="redes"&&i===0){
     for(let n=0;n<4;n++)led(-.27+n*.18,.18,.31,n%2?"#4de9bc":"#ffcf5c");
     for(const x0 of [-.34,.34])screw(x0,-.1,.29);
   }else if(current.id==="redes"&&i===1){
     for(let n=0;n<8;n++)seam(-.39+n*.112,-.015,.323,.065,.075,.012,"#111c2c");
     for(let n=0;n<8;n++)led(-.39+n*.112,.11,-.15,"#4ce5b4");
   }else if((current.id==="redes"||current.id==="datos")&&i===2){
     for(let n=0;n<6;n++)seam(-.27+n*.108,-.3,.285,.075,.018,.018,"#91a6ba");
     for(let n=0;n<4;n++)led(-.19+n*.13,.34,.29,n%2?"#47d8ff":"#55e6bd");
   }else if(current.id==="datos"&&i===0){
     for(let n=0;n<4;n++)screw(-.2+n*.13,.11,.25);
   }else if(current.id==="datos"&&i===1){
     for(let n=0;n<18;n++)seam(-.43+n*.05,-.055,.13,.018,.012,.035,"#d8b75e");
   }
 }
 if(current.id==="robotica"){
   if(i===0){for(let n=0;n<4;n++)led(-.2+n*.13,.12,.19,n%2?"#42d9ff":"#ffd36b");screw(-.25,.02,.19);screw(.25,.02,.19);}
   if(i===1){for(const x0 of [-.14,.14]){screw(x0,0,.215);led(x0,.02,.23,"#55e6bd");}}
   if(i===2){screw(0,.13,.24);seam(0,.08,.28,.12,.025,.018,"#e4edf5");}
   if(i===3){screw(0,-.25,.19);screw(.22,.5,.1);led(.57,.5,.09,"#f6c453");}
 }
 if(current.id==="electronica"){
   if(i===0){seam(0,.34,0,.22,.035,.22,"#dce7ef");}
   if(i===1){led(-.42,0,.04,"#ef5b6c");led(.42,0,.04,"#45a9f2");}
   if(i===2){screw(-.14,-.02,.15);screw(.14,-.02,.15);}
   if(i===3){seam(0,-.2,.02,.16,.035,.16,"#aebdca");led(0,.15,.17,"#ffe27a");}
 }
 if(current.id==="arvr"){
   if(i===0||i===2){for(const x0 of [-.19,.19]){p("a-torus",{position:x0+" 0 .16",radius:.115,radiusTubular:.012,color:"#a9dff5",material:"shader:standard; metalness:.55; roughness:.2"});}}
   if(i===1){seam(0,-.25,.09,.22,.025,.018,"#dce8f2");led(.13,.25,.1,"#55e6bd");}
   if(i===3){for(let n=0;n<4;n++)led(-.12+(n%2)*.24,-.12+Math.floor(n/2)*.24,.15,"#ffd36b");}
 }
 if(current.id==="impresion"){
   if(i===0){for(const x0 of [-.4,.4])seam(x0,.02,.05,.025,.58,.025,"#d5e0e9");screw(-.32,-.2,.27);screw(.32,-.2,.27);}
   if(i===1){for(let n=0;n<12;n++)seam(-.22+n*.04,.08,.09,.012,.025,.012,"#f5b65e");}
   if(i===2){for(const x0 of [-.27,.27])screw(x0,.07,.25);}
 }
 if(current.id==="ciberseguridad"){led(-.2,-.25,.13,"#55e6bd");led(.2,-.25,.13,"#ff637c");}
 if(current.id==="ia"){for(let n=0;n<5;n++)led(-.28+n*.14,.29,.02,n%2?"#4bd8ff":"#f6c453");}
 if(current.id==="programacion"){seam(0,.16,.22,.38,.018,.012,"#ffffff");}
 if(current.id==="sistemas"){if(i===0){seam(0,-.1,.1,.48,.018,.012,"#e6bd61");}if(i===1){for(let n=0;n<3;n++)seam(0,.12-n*.12,.06,.28,.012,.012,"#8da4ba");}}
 if(current.id==="evolucion"){if(i===0){screw(-.2,.12,.21);screw(.2,.12,.21);}if(i===1){for(const x0 of [-.2,0,.2])led(x0,-.05,.18,"#e8d6b3");}if(i===3){led(0,.24,.1,"#55e6bd");}}
 // El nombre se muestra únicamente al seleccionar el objeto, en su panel de información.
}
const objectPurposes={"Placa base":"Conectar el procesador, la memoria y las demás piezas para que puedan comunicarse.","Procesador":"Ejecutar instrucciones y coordinar las operaciones del computador.","Memoria RAM":"Mantener disponibles los datos y programas que se están usando en ese momento.","Unidad SSD":"Guardar el sistema, los programas y los archivos incluso cuando el computador está apagado.","Tarjeta gráfica":"Procesar imágenes, videos y gráficos para mostrarlos en la pantalla.","Fuente de poder":"Convertir y distribuir la energía eléctrica que necesitan los componentes.","Router":"Comunicar redes diferentes y dirigir los datos hacia su destino.","Switch":"Unir varios equipos dentro de una misma red local para que compartan información.","Servidor":"Ofrecer archivos, aplicaciones u otros servicios a los dispositivos conectados.","Computador":"Permitir al usuario crear, procesar, almacenar y compartir información.","Controlador":"Interpretar el programa y coordinar las acciones de las partes del robot.","Sensor":"Detectar cambios del entorno y enviar esa información al controlador.","Motor":"Producir el movimiento de las ruedas, articulaciones o mecanismos del robot.","Brazo robótico":"Sujetar, levantar y trasladar objetos con movimientos controlados.","Inicio":"Marcar el punto desde el que comienza una secuencia de instrucciones.","Mover adelante":"Indicar al personaje o robot que avance en la dirección establecida.","Girar":"Cambiar la orientación para continuar el recorrido en otra dirección.","Repetir":"Ejecutar varias veces una o más instrucciones sin escribirlas de nuevo.","Contraseña segura":"Ayudar a proteger cuentas y datos personales frente a accesos no autorizados.","Phishing":"Reconocer intentos de engaño que buscan robar contraseñas o información personal.","Firewall":"Filtrar conexiones y bloquear tráfico que no cumple las reglas de seguridad.","Cifrado":"Proteger datos para que solo puedan leerlos quienes tienen la clave adecuada.","Datos":"Proporcionar ejemplos e información con los que un sistema puede aprender o trabajar.","Modelo":"Analizar entradas y generar una clasificación, respuesta o predicción.","Entrenamiento":"Ajustar el modelo para que aprenda patrones a partir de ejemplos.","Predicción":"Estimar un resultado cuando el modelo recibe información nueva.","Batería":"Entregar la energía que impulsa la corriente eléctrica en el circuito.","Cable":"Unir los componentes y ofrecer un camino para el paso de la corriente.","Interruptor":"Permitir o interrumpir el paso de corriente al abrir o cerrar el circuito.","Bombilla":"Convertir la energía eléctrica en luz.","Objeto virtual":"Servir como elemento digital que se puede observar y manipular en el espacio 3D.","Realidad aumentada":"Mostrar información u objetos digitales integrados con la vista del entorno real.","Realidad virtual":"Sumergir al usuario en un entorno digital que puede explorar.","Seguimiento":"Detectar la posición o el movimiento para actualizar la experiencia digital.","Carpeta":"Organizar archivos y otras carpetas para encontrarlos con facilidad.","Archivo":"Guardar información que puede abrirse, consultarse o modificarse con una aplicación.","Ventana":"Mostrar y permitir trabajar con una aplicación o documento.","Papelera":"Conservar temporalmente elementos eliminados para poder recuperarlos o borrarlos definitivamente.","Extrusor":"Calentar y depositar el filamento siguiendo la forma definida para cada capa.","Filamento":"Aportar el material con el que se construye el objeto impreso.","Plataforma":"Sostener la pieza mientras se va construyendo capa por capa.","Modelo 3D":"Servir como diseño digital que guía la fabricación del objeto.","Memoria":"Mantener temporalmente información que el procesador necesita consultar rápidamente.","Almacenamiento":"Conservar programas y archivos para consultarlos más adelante.","Telégrafo":"Transmitir mensajes a distancia mediante señales codificadas.","Teléfono":"Permitir la comunicación de voz entre personas que están en lugares distintos.","Dispositivo móvil":"Facilitar la comunicación y el acceso a herramientas digitales desde distintos lugares."};
function selectObject(g,item){
 if(selectedEl)selectedEl.setAttribute("scale","1 1 1");
 selectedEl=g;g.setAttribute("scale","1.12 1.12 1.12");
 const purpose=g.dataset.purpose||objectPurposes[item[0]]||"Se utiliza para cumplir una función dentro de este laboratorio.";
 $("#selectedName").textContent=item[0];$("#selectedDescription").textContent=item[1];$("#selectedIcon").textContent=item[2];$("#selectedLabel").textContent="Seleccionado: "+item[0];$("#progressBar").style.width="15%";
 missionTarget(item[0]);
 $("#infoObjectName").textContent=item[0];$("#infoObjectIcon").textContent=item[2];$("#infoWhat").textContent=item[1];$("#infoPurpose").textContent=purpose;$("#objectInfoTab").classList.remove("hidden");
}
function buildActions(){const box=$("#actionButtons");box.innerHTML="";current.actions.forEach((a,i)=>{const b=document.createElement("button");b.textContent=a;b.addEventListener("click",()=>runAction(i));box.appendChild(b)})}
function runAction(i){const id=current.id;if(id==="hardware"&&hardwareGame){if(i===2&&hardwareGame.phase==="power")powerOnHardwareGame();else toast("Completa primero los objetivos de la misión.");return}if(id==="hardware"&&i===0){world.querySelectorAll("a-torus").forEach((e,j)=>e.setAttribute("color",j<3?"#55e6bd":"#51e5ff"));toast("Conexiones principales resaltadas.");}
else if(id==="hardware"&&i===1){world.querySelectorAll(".interactive").forEach((e,j)=>e.setAttribute("position",`${(j%3-1)*2.3} ${1+(j%2)*.3} ${Math.floor(j/3)*-1.1}`));toast("Componentes separados para su inspección.");}
else if(id==="hardware"&&i===2){simulateHardwareBoot();}
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
$("#progressBar").style.width=(i===2?"100%":"60%");missionAction(i)}
function simulateHardwareBoot(){
 const parts=[...world.querySelectorAll(".interactive")];
 if(!parts.length){toast("No se encontraron componentes para iniciar la simulación.");return}
 toast("Encendido iniciado: comprobando componentes…");
 parts.forEach((part,index)=>{
  part.removeAttribute("animation__power");
  part.setAttribute("animation__power",`property: scale; from: 1 1 1; to: 1.16 1.16 1.16; dur: 420; delay: ${index*260}; dir: alternate; loop: 2; easing: easeInOutSine`);
 });
 const indicator=el("a-sphere",{position:"0 2.05 -0.15",radius:".09",color:"#55e6bd",material:"emissive: #55e6bd; emissiveIntensity: 1.2"});
 indicator.setAttribute("animation","property: material.emissiveIntensity; from: .15; to: 1.8; dur: 420; dir: alternate; loop: 5");
 setTimeout(()=>{
  indicator.setAttribute("color","#55e6bd");
  toast("✓ Equipo encendido: componentes activos y sistema listo (simulación educativa).");
 },2100);
}
function drawConnections(){const points=[-1.65,0,1.65];for(let i=0;i<2;i++){const line=el("a-cylinder",{position:`${(points[i]+points[i+1])/2} 1.1 0`,radius:".025",height:"1.65",rotation:"0 0 90",color:"#55e6bd"});line.setAttribute("animation","property: material.emissive; from: #003322; to: #55e6bd; dur: 700; dir: alternate; loop: true")}}
function animatePackets(){for(let i=0;i<5;i++){const p=el("a-sphere",{position:"-1.7 1.15 .1",radius:".07",color:"#55e6bd"});p.setAttribute("animation",`property: position; to: 1.7 1.15 .1; dur: ${1200+i*180}; delay: ${i*180}; loop: true`)}}
function addProgramBlock(label){const b=el("a-box",{position:`${-1.7+Math.random()*3.4} 1.8 -1`,width:".8",height:".25",depth:".12",color:"#397cbe"});b.classList.add("program-block");el("a-text",{value:label,align:"center",color:"#ffffff",width:"2",position:"0 0 .08"},b);toast("Bloque agregado: "+label)}
function resetScene(){if(!current)return;$("#objectInfoTab").classList.add("hidden");buildScene();$("#progressBar").style.width="0%";$("#selectedName").textContent="Selecciona un objeto";$("#selectedDescription").textContent="Haz clic o toca un objeto del escenario para conocerlo y manipularlo.";$("#selectedLabel").textContent="Ningún objeto seleccionado";selectedEl=null;toast("Escenario reiniciado.")}
function manipulate(type){if(!selectedEl){toast("Primero selecciona un objeto del escenario.");return}const rot=selectedEl.getAttribute("rotation"),sc=selectedEl.getAttribute("scale");if(type==="left")selectedEl.setAttribute("rotation",`${rot.x} ${rot.y-20} ${rot.z}`);if(type==="right")selectedEl.setAttribute("rotation",`${rot.x} ${rot.y+20} ${rot.z}`);if(type==="up")selectedEl.setAttribute("scale",`${Math.min(sc.x*1.18,2.8)} ${Math.min(sc.y*1.18,2.8)} ${Math.min(sc.z*1.18,2.8)}`);if(type==="down")selectedEl.setAttribute("scale",`${Math.max(sc.x/1.18,.35)} ${Math.max(sc.y/1.18,.35)} ${Math.max(sc.z/1.18,.35)}`);if(type==="center")selectedEl.setAttribute("position","0 1.1 0")}
function zoomScene(direction){const camera=$("#xrScene")?.querySelector("[camera]");if(!camera)return;const position=camera.getAttribute("position");position.z=Math.min(15.5,Math.max(6.5,position.z+(direction>0?-1:1)));camera.setAttribute("position",position)}
async function startHands(){
 if(handStream){stopHands();return}
 if(!navigator.mediaDevices?.getUserMedia){toast("Tu navegador no permite acceder a la cámara.");return}
 const video=$("#cameraVideo"),overlay=$("#handOverlay"),status=$("#handStatus");
 overlay.classList.remove("hidden");status.textContent="Solicitando acceso a la cámara…";
 try{
  handStream=await navigator.mediaDevices.getUserMedia({audio:false,video:{facingMode:"user",width:{ideal:640},height:{ideal:480},frameRate:{ideal:30,max:30}}});
  video.srcObject=handStream;await video.play();
  status.textContent="Cargando reconocimiento de manos…";
  const vision=await import("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14");
  const files=await vision.FilesetResolver.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm");
  const modelAssetPath="https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task";
  const options={baseOptions:{modelAssetPath,delegate:"GPU"},runningMode:"VIDEO",numHands:2,minHandDetectionConfidence:.58,minHandPresenceConfidence:.55,minTrackingConfidence:.58};
  try{handTask=await vision.HandLandmarker.createFromOptions(files,options);}
  catch(gpuError){console.warn("GPU no disponible; se utilizará CPU:",gpuError);handTask=await vision.HandLandmarker.createFromOptions(files,{...options,baseOptions:{modelAssetPath,delegate:"CPU"}});status.textContent="Modo de compatibilidad activado · optimizando seguimiento…";}
  const canvas=$("#handCanvas"),ctx=canvas.getContext("2d"),scene=$("#xrScene"),T=window.AFRAME?.THREE||window.THREE;
  await new Promise(resolve=>{if(scene.hasLoaded)resolve();else scene.addEventListener("loaded",resolve,{once:true})});
  let lastVideoTime=-1,lastDetect=0,smooth=[],gesture="",candidate="",candidateFrames=0,grabAnchor=null,pinchActive=false,previousPoint=null,twoHandZoomDistance=null,worldNavAnchor=null;
  const bones=[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[17,18],[18,19],[19,20],[0,17]];
  function center(lm){return {x:(lm[0].x+lm[5].x+lm[9].x+lm[13].x+lm[17].x)/5,y:(lm[0].y+lm[5].y+lm[9].y+lm[13].y+lm[17].y)/5,z:(lm[0].z+lm[5].z+lm[9].z+lm[13].z+lm[17].z)/5}}
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
   if(pinchRatio<.43)return "PINCH";
   if(pinchRatio>.82&&otherExtended<=2)return "SPREAD";
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
   if(candidateFrames>=4&&gesture!==candidate){gesture=candidate;grabAnchor=null;previousPoint=null} return gesture;
  }
  const handRaycaster=new T.Raycaster(),handPointer=new T.Vector2();
  function objectUnderHand(p){
   if(!scene.camera)return null;
   // La vista previa de la cámara está espejada para que el movimiento resulte natural.
   handPointer.set((1-p.x)*2-1,1-p.y*2);
   handRaycaster.setFromCamera(handPointer,scene.camera);
   const roots=[...world.querySelectorAll(".interactive")].map(el=>el.object3D).filter(Boolean);
   const hits=handRaycaster.intersectObjects(roots,true);
   for(const hit of hits){
    let node=hit.object;
    while(node&&node!==world.object3D){
     const entity=node.el;
     if(entity?.classList?.contains("interactive"))return entity;
     node=node.parent;
    }
   }
   return null;
  }
  function beginGrab(p){
   const target=objectUnderHand(p);
   if(!target)return false;
   const item=current.items.find(entry=>entry[0]===target.dataset.name);
   if(item)selectObject(target,item);
   grabAnchor={point:{x:p.x,y:p.y,z:p.z||0},position:target.object3D.position.clone()};
   return true;
  }
  function dragGrabbed(p){
   if(!selectedEl||!grabAnchor)return;
   const dx=(grabAnchor.point.x-p.x)*3.8;
   const dy=(grabAnchor.point.y-p.y)*2.9;
   // La profundidad estimada por MediaPipe permite acercar o alejar el modelo.
   // Acercar la mano a la cámara (z más negativo) desplaza el objeto hacia delante.
   const dz=((grabAnchor.point.z||0)-(p.z||0))*5.5;
   selectedEl.object3D.position.x=T.MathUtils.clamp(grabAnchor.position.x+dx,-4,4);
   selectedEl.object3D.position.y=T.MathUtils.clamp(grabAnchor.position.y+dy,.72,3.2);
   selectedEl.object3D.position.z=T.MathUtils.clamp(grabAnchor.position.z+dz,-4,2.5);
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
   const now=performance.now();if(now-lastDetect<20)return;lastDetect=now;lastVideoTime=video.currentTime;
   let result;try{result=handTask.detectForVideo(video,now)}catch(error){console.error("Error de lectura de manos:",error);status.textContent="ERROR AL LEER LAS MANOS · "+(error.message||"Reinicia el seguimiento.");return}
   const raw=result.landmarks||result.handLandmarks||[];
   const hands=raw.slice(0,2).map((lm,i)=>{
    const old=smooth[i],filtered=old?lm.map((p,j)=>({x:old[j].x*.62+p.x*.38,y:old[j].y*.62+p.y*.38,z:(old[j].z||0)*.62+(p.z||0)*.38})):lm.map(p=>({...p}));
    smooth[i]=filtered;return filtered;
   });
   draw(hands);
   if(!hands.length){
    status.textContent="No detecto manos. Coloca una mano completa frente a la cámara y mejora la iluminación.";const pointer=$("#handPointer");if(pointer)pointer.classList.add("hidden");
    pinchActive=false;grabAnchor=null;worldNavAnchor=null;twoHandZoomDistance=null;setGesture("NONE");smooth=[];return;
   }
   const p=center(hands[0]),detected=classify(hands[0]);
    const thumb=hands[0][4],indexTip=hands[0][8];
    const pinchPoint={x:(thumb.x+indexTip.x)/2,y:(thumb.y+indexTip.y)/2,z:((thumb.z||0)+(indexTip.z||0))/2};
    const pointerPoint=detected==="PINCH"?pinchPoint:p;
   const pointer=$("#handPointer");if(pointer){pointer.style.left=((1-pointerPoint.x)*100)+"%";pointer.style.top=(pointerPoint.y*100)+"%";pointer.classList.remove("hidden");}
   // Control automático del entorno con dos manos: no hay que activar ningún modo.
   // Dos palmas abiertas desplazan y escalan el laboratorio; dos puños lo giran.
   if(hands.length>=2){
    const g1=classify(hands[0]),g2=classify(hands[1]);
    const p1=center(hands[0]),p2=center(hands[1]);
    const mid={x:(p1.x+p2.x)/2,y:(p1.y+p2.y)/2};
    const distance=Math.hypot(p1.x-p2.x,p1.y-p2.y);
    if(g1==="OPEN"&&g2==="OPEN"){
     if(!worldNavAnchor||worldNavAnchor.mode!=="MOVE"){
      worldNavAnchor={mode:"MOVE",point:mid,position:world.object3D.position.clone(),scale:world.object3D.scale.x,distance};
     }else{
      const dx=(worldNavAnchor.point.x-mid.x)*4.2;
      const dy=(mid.y-worldNavAnchor.point.y)*3.2;
      world.object3D.position.x=T.MathUtils.clamp(worldNavAnchor.position.x+dx,-5,5);
      world.object3D.position.y=T.MathUtils.clamp(worldNavAnchor.position.y+dy,-3,3);
      const factor=T.MathUtils.clamp(distance/Math.max(.01,worldNavAnchor.distance),.92,1.08);
      const next=T.MathUtils.clamp(worldNavAnchor.scale*factor,.65,1.8);
      world.object3D.scale.setScalar(next);
      world.object3D.updateMatrixWorld(true);
     }
     pinchActive=false;grabAnchor=null;previousPoint=null;twoHandZoomDistance=distance;
     status.textContent="🌐 ENTORNO EN MOVIMIENTO · desplaza las dos palmas para mover el laboratorio y sepáralas o acércalas para cambiar su tamaño.";
     return;
    }
    if(g1==="FIST"&&g2==="FIST"){
     if(!worldNavAnchor||worldNavAnchor.mode!=="ROTATE"){
      worldNavAnchor={mode:"ROTATE",point:mid,rotation:world.object3D.rotation.clone()};
     }else{
      const dx=mid.x-worldNavAnchor.point.x,dy=mid.y-worldNavAnchor.point.y;
      world.object3D.rotation.y=worldNavAnchor.rotation.y-dx*3.2;
      world.object3D.rotation.x=T.MathUtils.clamp(worldNavAnchor.rotation.x+dy*2.2,-.75,.75);
      world.object3D.updateMatrixWorld(true);
     }
     pinchActive=false;grabAnchor=null;previousPoint=null;twoHandZoomDistance=null;
     status.textContent="🌐 GIRO DEL ENTORNO · mueve ambos puños juntos para rotar el laboratorio.";
     return;
    }
   }
   worldNavAnchor=null;twoHandZoomDistance=null;
   const stableGesture=setGesture(detected);
   if(stableGesture==="PINCH"){
    if(!pinchActive){
     pinchActive=true;previousPoint=null;
     if(environmentNavigation){
      worldNavAnchor={point:{x:pointerPoint.x,y:pointerPoint.y},position:world.object3D.position.clone()};
      status.textContent="ENTORNO AGARRADO · mueve la mano para desplazar todo el laboratorio.";
     }else if(beginGrab(pointerPoint))status.textContent="OBJETO AGARRADO · desplaza la mano sin separar pulgar e índice.";
     else status.textContent="PINZA DETECTADA · apunta directamente a un objeto y junta pulgar e índice para agarrarlo.";
    }else if(environmentNavigation&&worldNavAnchor){
     const dx=(worldNavAnchor.point.x-pointerPoint.x)*3.8,dy=(pointerPoint.y-worldNavAnchor.point.y)*2.8;
     world.object3D.position.x=T.MathUtils.clamp(worldNavAnchor.position.x+dx,-5,5);
     world.object3D.position.y=T.MathUtils.clamp(worldNavAnchor.position.y+dy,-3,3);
     world.object3D.updateMatrixWorld(true);
    }else if(selectedEl&&grabAnchor){
     dragGrabbed(pointerPoint);status.textContent="AGARRANDO "+selectedEl.dataset.name+" · mueve la mano. Separa los dedos para soltar.";
    }
   }else{
    if(pinchActive){pinchActive=false;grabAnchor=null;worldNavAnchor=null;if(selectedEl)status.textContent="OBJETO SOLTADO · "+selectedEl.dataset.name;}
    if(stableGesture==="OPEN"){
     if(environmentNavigation){
      if(previousPoint){
       const dx=p.x-previousPoint.x,dy=p.y-previousPoint.y;
       world.object3D.rotation.y-=dx*3.1;
       world.object3D.rotation.x=T.MathUtils.clamp(world.object3D.rotation.x+dy*2.1,-.65,.65);
       world.object3D.updateMatrixWorld(true);
      }
      previousPoint=p;status.textContent="ENTORNO · mueve la mano abierta para girar el laboratorio.";
     }else{
      if(selectedEl)rotateSelected(p);else previousPoint=p;
      status.textContent="MANO ABIERTA · desplázala para girar el objeto seleccionado.";
     }
    }else if(stableGesture==="FIST"){
     previousPoint=null;
     status.textContent=selectedEl?"PUÑO CERRADO · usa la pinza para agarrar y desplazar el objeto.":"PUÑO DETECTADO · apunta con pinza a un objeto para seleccionarlo y agarrarlo.";
    }else if(stableGesture==="SPREAD"){
     previousPoint=null;
     status.textContent="SEPARA PULGAR E ÍNDICE · el objeto queda libre.";
    }else{
     previousPoint=null;
     status.textContent="APUNTA A UN MODELO · junta pulgar e índice para agarrar; suelta para dejarlo.";
    }
   }
  }
  status.textContent="CÁMARA Y MODELO LISTOS · muestra una o ambas manos completas.";
  frame();
  $("#handBtn").classList.add("active");$("#handBtn").textContent="⏹ Detener simulación";
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
 $("#handOverlay").classList.add("hidden");$("#handPointer")?.classList.add("hidden");document.querySelectorAll("#handCursor, #handCursor2").forEach(e=>e.remove());document.querySelectorAll("#xrScene > a-sphere").forEach(e=>{if(e.getAttribute("radius")===".075")e.remove()});$("#handBtn").classList.remove("active");$("#handBtn").textContent="▶ Iniciar simulación";
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
 if($("#sceneHint"))$("#sceneHint").textContent="Apunta a un modelo y junta pulgar e índice para agarrarlo. Desplaza la mano y separa los dedos para soltarlo.";
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
$("#exploreBtn").addEventListener("click",()=>$("#moduleGrid").scrollIntoView({behavior:"smooth"}));$("#howBtn").addEventListener("click",()=>showModal("Cómo interactuar",`<ul><li><b>Mouse o táctil:</b> selecciona objetos en el escenario.</li><li><b>Agarrar con las manos:</b> apunta directamente a un modelo y junta pulgar e índice.</li><li><b>Mover:</b> mantén la pinza cerrada y desplaza la mano a izquierda/derecha y arriba/abajo.</li><li><b>Profundidad:</b> acerca la mano a la cámara para traer el objeto hacia delante y aléjala para llevarlo hacia atrás.</li><li><b>Soltar:</b> separa pulgar e índice.</li><li><b>Girar:</b> con el objeto seleccionado, mueve la mano abierta.</li><li><b>Controles:</b> también puedes girar, ampliar y reducir desde el panel.</li></ul><p>El reconocimiento requiere permiso de cámara, conexión a internet y HTTPS o localhost.</p>`));$("#helpBtn").addEventListener("click",()=>$("#howBtn").click());$("#backBtn").addEventListener("click",goHome);$("#brandHome").addEventListener("click",e=>{e.preventDefault();goHome()});$("#resetBtn").addEventListener("click",resetScene);$("#rotateLeft").addEventListener("click",()=>manipulate("left"));$("#rotateRight").addEventListener("click",()=>manipulate("right"));$("#scaleUp").addEventListener("click",()=>manipulate("up"));$("#scaleDown").addEventListener("click",()=>manipulate("down"));$("#moveCenter").addEventListener("click",()=>manipulate("center"));$("#sceneZoomIn").addEventListener("click",()=>zoomScene(1));$("#sceneZoomOut").addEventListener("click",()=>zoomScene(-1));$("#sceneWrap").addEventListener("wheel",e=>{e.preventDefault();zoomScene(e.deltaY<0?1:-1)},{passive:false});$("#challengeBtn").addEventListener("click",startChallenge);$("#closeMission").addEventListener("click",()=>$("#missionHud").classList.add("hidden"));$("#hgClose").addEventListener("click",()=>stopHardwareGame());$("#hgRetry").addEventListener("click",retryHardwareGame);$("#hgPowerBtn").addEventListener("click",powerOnHardwareGame);$("#modalClose").addEventListener("click",closeModal);$("#closeObjectInfo").addEventListener("click",()=>$("#objectInfoTab").classList.add("hidden"));$("#modalOk").addEventListener("click",()=>{if(pendingChallengeStart){closeModal();launchChallenge()}else closeModal()});$("#ambientMusicBtn").addEventListener("click",toggleAmbientMusic);$("#ambientVolume").addEventListener("input",setAmbientVolume);$("#handBtn").addEventListener("click",startHands);$("#arBtn").addEventListener("click",checkAR);$("#fullscreenBtn").addEventListener("click",()=>$("#sceneWrap").requestFullscreen?.());buildCards();// TECNOLAB XR ya no registra service worker: evita versiones antiguas persistentes.