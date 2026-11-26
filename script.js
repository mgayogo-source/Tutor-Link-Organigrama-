// ====== Datos del organigrama ======
// Para cada persona puedes cambiar textos y añadir su foto con:  foto:"fotos/marcos.jpg"
// (sube la imagen a una carpeta "fotos" del repositorio y escribe aquí su ruta).
// Campos: id, name, nivel (1 directivo, 2 responsable, 3 operativo), parent (id del jefe).
const people = [
  {
    id:"marcos", name:"Marcos García", ini:"MG", foto:"", hue:210, nivel:1, parent:null,
    card:"Dirección General (CEO)", puesto:"Dirección General (CEO)",
    depto:"Dirección General", lugar:"Híbrido: oficina coworking en Salamanca o remoto",
    depende:"Junta de socios", personal:"4 responsables de departamento: CTO, COO, CMO y CFO", plantilla:"1 persona",
    funciones:[
      "Representar institucionalmente a TutorLink.",
      "Negociar convenios y acuerdos con facultades y residencias de la USAL y la UPSA.",
      "Fijar las metas SMART del proyecto y vigilar su cumplimiento.",
      "Supervisar la viabilidad global y coordinar los cuatro departamentos."
    ],
    resp:[
      "Resultados del piloto de seis meses en Salamanca.",
      "Coherencia entre estrategia, presupuesto y organización.",
      "A futuro, nombrar directivos por zona cuando TutorLink se expanda por la península."
    ],
    formacion:"Grado en ADE, Economía o similar. Experiencia en gestión de proyectos o de equipos.",
    habilidades:["Liderazgo","Negociación","Comunicación institucional","Visión estratégica"],
    pestel:"Responde a la conclusión del PESTEL de afianzar la empresa a nivel local con alianzas educativas sólidas.",
    retrib:"32.000 € brutos al año a jornada completa (propuesta presupuestaria).",
    resumen:"Representa a TutorLink, negocia convenios con la USAL y la UPSA, fija metas y coordina los departamentos."
  },
  {
    id:"hector", name:"Héctor Crespo", ini:"HC", foto:"", hue:175, nivel:2, parent:"marcos",
    card:"Tecnología e IA (CTO)", puesto:"Dirección de Tecnología, Producto e IA (CTO)",
    depto:"Tecnología, Producto e IA", lugar:"Híbrido: Salamanca o teletrabajo",
    depende:"Dirección General", personal:"2 especialistas: Alejandro Gil (desarrollo) y Daniel (infraestructura)", plantilla:"1 persona",
    funciones:[
      "Supervisar la arquitectura técnica de la web y la app móvil.",
      "Integrar el aula virtual con videollamadas y pizarra interactiva.",
      "Desplegar el módulo de IA que aclara dudas a los alumnos con suscripción.",
      "Coordinar al equipo cuando algo falla o da error."
    ],
    resp:[
      "Disponibilidad y calidad de la plataforma.",
      "Evitar futuros problemas de software y hardware de la empresa.",
      "Cumplir el plan de producto del piloto."
    ],
    formacion:"Ingeniería informática o similar. Experiencia en desarrollo web y móvil y en servicios en la nube.",
    habilidades:["Visión técnica","Coordinación de equipos","Resolución de incidencias","Comunicación con perfiles no técnicos"],
    pestel:"Cubre el factor tecnológico: herramientas colaborativas y de IA.",
    retrib:"32.000 € brutos al año a jornada completa (propuesta presupuestaria).",
    resumen:"Dirige la arquitectura web y móvil, el aula virtual y la IA, y coordina al equipo técnico."
  },
  {
    id:"manuelale", name:"Manuel Alejandro", ini:"MA", foto:"", hue:28, nivel:2, parent:"marcos",
    card:"Operaciones y Legal (COO)", puesto:"Dirección de Operaciones, Calidad y Cumplimiento Legal (COO)",
    depto:"Operaciones, Calidad y Cumplimiento Legal", lugar:"Híbrido: Cádiz o remoto",
    depende:"Dirección General", personal:"1 especialista: Manuel Gayo (confianza y atención a usuarios)", plantilla:"1 persona",
    funciones:[
      "Supervisar el cumplimiento de la normativa de la AEPD y el RGPD.",
      "Aplicar el Reglamento europeo de Servicios Digitales (DSA).",
      "Redactar las condiciones de contratación, cancelaciones y reembolsos.",
      "Definir los protocolos de autorización parental para alumnos menores de edad."
    ],
    resp:[
      "Evitar sanciones y pérdida de confianza por incumplimientos legales.",
      "Que quede bien definida la relación profesional con los profesores.",
      "Calidad del servicio prestado."
    ],
    formacion:"Grado en Derecho, ADE o similar. Conocimientos de protección de datos y comercio electrónico.",
    habilidades:["Rigor","Análisis normativo","Organización","Comunicación clara"],
    pestel:"Aborda la dimensión legal, el mayor riesgo operacional del PESTEL: protección de menores y DSA.",
    retrib:"28.000 € brutos al año a jornada completa (propuesta presupuestaria).",
    resumen:"Vela por el RGPD y el DSA, redacta condiciones y reembolsos y define la autorización parental."
  },
  {
    id:"alvaro", name:"Álvaro Díaz", ini:"AD", foto:"", hue:340, nivel:2, parent:"marcos",
    card:"Marketing y Captación (CMO)", puesto:"Dirección de Marketing, Captación y Comunidad (CMO)",
    depto:"Marketing y Captación", lugar:"Campus de Salamanca y canales digitales",
    depende:"Dirección General", personal:"Ninguno: ejecuta él mismo las acciones comerciales", plantilla:"1 persona",
    note:"Ejecución comercial y de comunidad en el mismo puesto",
    funciones:[
      "Captar profesores y alumnos a la vez.",
      "Organizar campañas presenciales en los campus de la USAL y la UPSA.",
      "Gestionar campañas en Instagram, TikTok y Google Ads.",
      "Diseñar ofertas y packs de clases."
    ],
    resp:[
      "Alcanzar la masa crítica de profesores y estudiantes del piloto.",
      "Gestionar el presupuesto de marketing del piloto (1.050 €)."
    ],
    formacion:"Marketing, ADE o Comunicación. Experiencia con redes sociales y publicidad digital.",
    habilidades:["Creatividad","Comunicación","Análisis de métricas","Trato con asociaciones universitarias"],
    pestel:"Aprovecha el uso de internet de más del 98 % entre los jóvenes e impulsa la captación en el entorno estudiantil salmantino.",
    retrib:"26.000 € brutos al año a jornada completa (propuesta presupuestaria).",
    resumen:"Capta profesores y alumnos, organiza campañas en campus y redes y diseña ofertas y packs."
  },
  {
    id:"carlos", name:"Carlos Fraile", ini:"CF", foto:"", hue:265, nivel:2, parent:"marcos",
    card:"Finanzas (CFO)", puesto:"Dirección Financiera y Control de Pagos (CFO)",
    depto:"Administración y Finanzas", lugar:"Híbrido: Salamanca o remoto",
    depende:"Dirección General", personal:"Ninguno: gestiona él mismo cobros, pasarelas y liquidaciones", plantilla:"1 persona",
    note:"Cobros, pasarelas y liquidaciones en el mismo puesto",
    funciones:[
      "Supervisar los pagos digitales.",
      "Retener la comisión por clase (entre el 10 % y el 15 %).",
      "Automatizar las transferencias a los profesores al terminar la clase.",
      "Elaborar presupuestos de tesorería y controlar los márgenes frente a los rivales."
    ],
    resp:[
      "Que el dinero retenido llegue al profesor tras la clase.",
      "Viabilidad económica dentro del capital inicial previsto de 3.000 €."
    ],
    formacion:"ADE, Finanzas o Economía. Experiencia en contabilidad y tesorería.",
    habilidades:["Rigor numérico","Control del gasto","Hojas de cálculo y pasarelas de pago","Integridad"],
    pestel:"Da soporte al factor económico: aceptación del pago online (83 % de los internautas) y vigilancia de comisiones competitivas.",
    retrib:"26.000 € brutos al año a jornada completa (propuesta presupuestaria).",
    resumen:"Controla pagos, comisión y liquidaciones a profesores, y la tesorería y los márgenes."
  },
  {
    id:"alejandro", name:"Alejandro Gil", ini:"AG", foto:"", hue:150, nivel:3, parent:"hector",
    card:"Desarrollo y Antifuga", puesto:"Desarrollador Full-Stack y Sistemas Anti-Fuga",
    depto:"Tecnología, Producto e IA", lugar:"Híbrido o remoto",
    depende:"Héctor Crespo (CTO)", personal:"Ninguno", plantilla:"1 persona",
    funciones:[
      "Programar el motor de búsqueda de profesores, con filtros por nivel, asignatura y precio.",
      "Desarrollar el calendario interactivo de reservas.",
      "Integrar las pasarelas de pago.",
      "Crear el modelo que bloquea teléfonos, correos y datos de contacto en el chat interno."
    ],
    resp:[
      "Que el filtro anti-fuga evite cerrar clases o pagos fuera de TutorLink.",
      "Entregar en plazo las funciones del núcleo de la plataforma."
    ],
    formacion:"Ingeniería informática o ciclo superior de desarrollo. Experiencia en programación full-stack.",
    habilidades:["Programación web y móvil","Bases de datos","Integración de APIs de pago","Trabajo en equipo"],
    pestel:"Crucial ante la sensibilidad al precio y la desintermediación, el riesgo económico de que las clases se cierren fuera de la plataforma.",
    retrib:"28.000 € brutos al año a jornada completa (propuesta presupuestaria).",
    resumen:"Programa búsqueda, reservas y pagos y el bloqueo de datos de contacto en el chat."
  },
  {
    id:"daniel", name:"Daniel", ini:"D", foto:"", hue:45, nivel:3, parent:"hector",
    card:"Cloud, Redes y Eco", puesto:"Ingeniero de Infraestructura Cloud, Ciberseguridad y Ecoeficiencia",
    depto:"Tecnología, Producto e IA", lugar:"Híbrido o remoto",
    depende:"Héctor Crespo (CTO)", personal:"Ninguno", plantilla:"1 persona",
    funciones:[
      "Mantener los servidores propios y las APIs seguras.",
      "Encriptar los datos personales de los usuarios.",
      "Monitorizar el tiempo de actividad del servicio.",
      "Ajustar la calidad del streaming de las videoclases para reducir el consumo energético."
    ],
    resp:[
      "Continuidad del servicio y seguridad de los datos.",
      "Reducir la huella de los centros de datos: vídeo a 720p y limpieza de archivos inactivos."
    ],
    formacion:"Ingeniería informática, redes o telecomunicaciones. Experiencia en cloud y ciberseguridad.",
    habilidades:["Administración de sistemas","Seguridad informática","Monitorización","Sensibilidad ambiental"],
    pestel:"Responde a las dimensiones tecnológica (ciberseguridad y continuidad) y ecológica (consumo energético digital).",
    retrib:"28.000 € brutos al año a jornada completa (propuesta presupuestaria).",
    resumen:"Mantiene servidores y APIs seguras, cifra datos, monitoriza el servicio y reduce el consumo del streaming."
  },
  {
    id:"gayo", name:"Manuel Gayo", ini:"MG", foto:"", hue:195, nivel:3, parent:"manuelale",
    card:"Confianza y Usuarios", puesto:"Responsable de Confianza, Moderación y Atención a Usuarios",
    depto:"Operaciones, Calidad y Cumplimiento Legal", lugar:"Híbrido o remoto",
    depende:"Manuel Alejandro (COO)", personal:"Ninguno", plantilla:"1 persona",
    funciones:[
      "Verificar la identidad y la titulación de los profesores antes de publicar su perfil.",
      "Moderar reseñas y valoraciones para evitar perfiles falsos.",
      "Atender a familias y alumnos y resolver las incidencias en menos de 24 horas."
    ],
    resp:[
      "Que la confianza y la reputación sostengan la adopción del servicio.",
      "Proteger a los alumnos menores cuando se abra el servicio a ese público."
    ],
    formacion:"Educación, Psicología, Derecho o similar. Experiencia en atención al cliente o moderación de comunidades.",
    habilidades:["Empatía","Comunicación escrita","Criterio","Gestión de conflictos"],
    pestel:"Resuelve el factor social de confianza y reputación, clave para que las familias contraten a tutores desconocidos.",
    retrib:"23.000 € brutos al año a jornada completa (propuesta presupuestaria).",
    resumen:"Verifica profesores, modera reseñas y resuelve incidencias de usuarios en menos de 24 horas."
  }
];
const byId = Object.fromEntries(people.map(p => [p.id, p]));
const levelName = {1:"Nivel directivo", 2:"Responsable de departamento", 3:"Nivel operativo"};

/* Fotos: se guardan solo en este navegador */
let photos = {};
try { photos = JSON.parse(localStorage.getItem("tl-fotos") || "{}"); } catch (e) { photos = {}; }
function savePhotos(){ try { localStorage.setItem("tl-fotos", JSON.stringify(photos)); } catch (e) {} }
function paintAvatars(){
  document.querySelectorAll("[data-avatar]").forEach(el => {
    const p = byId[el.dataset.avatar];
    el.style.setProperty("--h", p.hue);
    const src = photos[p.id] || p.foto;
    if (src) { el.style.backgroundImage = 'url("' + src + '")'; el.textContent = ""; }
    else { el.style.backgroundImage = ""; el.textContent = p.ini; }
  });
}
function squarePhoto(file, done){
  const reader = new FileReader();
  reader.onload = () => {
    const img = new Image();
    img.onload = () => {
      const s = 256, c = document.createElement("canvas"); c.width = c.height = s;
      const m = Math.min(img.width, img.height);
      c.getContext("2d").drawImage(img, (img.width - m) / 2, (img.height - m) * 0.15, m, m, 0, 0, s, s);
      done(c.toDataURL("image/jpeg", 0.85));
    };
    img.src = reader.result;
  };
  reader.readAsDataURL(file);
}

/* Árbol */
function nodeHTML(p){
  const kids = people.filter(x => x.parent === p.id);
  return '<li><button type="button" class="node lv' + p.nivel + '" data-open="' + p.id + '" aria-label="Ver ficha de ' + p.name + ', ' + p.card + '">' +
    '<span class="avatar" data-avatar="' + p.id + '"></span>' +
    '<span class="label"><span class="role">' + p.card + '</span><span class="who">' + p.name + '</span></span></button>' +
    (p.note ? '<p class="note">' + p.note + '</p>' : '') +
    (kids.length ? '<ul>' + kids.map(nodeHTML).join("") + '</ul>' : '') + '</li>';
}
document.getElementById("tree").innerHTML = "<ul>" + nodeHTML(people[0]) + "</ul>";

/* Tabla resumen */
document.getElementById("rows").innerHTML = people.map(p =>
  '<tr><td><button type="button" class="who-link" data-open="' + p.id + '">' + p.name + '</button><span class="sub">' + p.card + '</span></td>' +
  '<td>' + p.depto + '</td><td>' + p.resumen + '</td><td>' + p.depende + '</td></tr>'
).join("");

/* Ficha */
const sheet = document.getElementById("sheet"), scrim = document.getElementById("scrim"), body = document.getElementById("sheet-body");
let lastFocus = null, currentId = null;
const li = arr => "<ul>" + arr.map(t => "<li>" + t + "</li>").join("") + "</ul>";

function fill(p){
  body.innerHTML =
    '<div class="sheet-head"><span class="avatar" data-avatar="' + p.id + '"></span><div>' +
      '<h2 id="sheet-title">' + p.name + '</h2><p class="puesto">' + p.puesto + '</p></div></div>' +
    '<div class="chip"><span class="sw lv' + p.nivel + '"></span>' + levelName[p.nivel] + '</div>' +
    '<dl class="facts">' +
      '<div><dt>Departamento</dt><dd>' + p.depto + '</dd></div>' +
      '<div><dt>Lugar de trabajo</dt><dd>' + p.lugar + '</dd></div>' +
      '<div><dt>Depende de</dt><dd>' + p.depende + '</dd></div>' +
      '<div><dt>Empleados en el puesto</dt><dd>' + p.plantilla + '</dd></div>' +
      '<div class="wide"><dt>Personal a su cargo</dt><dd>' + p.personal + '</dd></div>' +
    '</dl>' +
    '<section class="block"><h3>Funciones y tareas principales</h3>' + li(p.funciones) + '</section>' +
    '<section class="block"><h3>Responsabilidades</h3>' + li(p.resp) + '</section>' +
    '<section class="block"><h3>Formación y experiencia necesarias</h3><p>' + p.formacion + '</p></section>' +
    '<section class="block"><h3>Habilidades y competencias</h3><ul class="tags">' + p.habilidades.map(h => "<li>" + h + "</li>").join("") + '</ul></section>' +
    '<section class="block"><h3>Conexión con el PESTEL</h3><p>' + p.pestel + '</p></section>' +
    '<section class="block"><h3>Retribución de referencia</h3><p>' + p.retrib + ' Incentivo máximo del 5 % ligado a objetivos.</p></section>' +
    '<section class="block"><h3>Dedicación en la fase piloto</h3><p>Socio promotor a tiempo parcial, compatible con sus estudios. Se recoge en el pacto de socios.</p></section>' +
    '<div class="photo"><p class="k">Foto</p>' +
      '<label class="btn"><input type="file" accept="image/*" id="photo-input">Añadir o cambiar foto</label>' +
      '<button type="button" class="btn" id="photo-clear"' + (photos[p.id] ? '' : ' hidden') + '>Quitar foto</button>' +
      '<small>La foto se guarda solo en este navegador.</small></div>';
  paintAvatars();
  document.getElementById("photo-input").addEventListener("change", e => {
    const f = e.target.files && e.target.files[0]; if (!f) return;
    squarePhoto(f, url => { photos[p.id] = url; savePhotos(); paintAvatars(); fill(p); document.getElementById("photo-input").focus(); });
  });
  document.getElementById("photo-clear").addEventListener("click", () => {
    delete photos[p.id]; savePhotos(); paintAvatars(); fill(p); document.getElementById("photo-input").focus();
  });
}
function openSheet(id){
  currentId = id; lastFocus = document.activeElement;
  fill(byId[id]);
  sheet.scrollTop = 0;
  scrim.hidden = false; sheet.hidden = false;
  sheet.focus();
}
function closeSheet(){
  if (sheet.hidden) return;
  sheet.hidden = true; scrim.hidden = true;
  if (lastFocus && lastFocus.focus) lastFocus.focus();
}
document.addEventListener("click", e => {
  const b = e.target.closest("[data-open]");
  if (b) openSheet(b.dataset.open);
});
scrim.addEventListener("click", closeSheet);
document.getElementById("close").addEventListener("click", closeSheet);
document.addEventListener("keydown", e => {
  if (sheet.hidden) return;
  if (e.key === "Escape") { closeSheet(); return; }
  if (e.key === "Tab") {
    const f = Array.from(sheet.querySelectorAll("button, input, [tabindex]:not([tabindex='-1'])")).filter(x => !x.hidden && x.offsetParent !== null || x.type === "file");
    if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && (document.activeElement === first || document.activeElement === sheet)) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});
paintAvatars();
