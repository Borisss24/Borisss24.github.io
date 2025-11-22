/* ===============================
   MODALES DE SERVICIOS
=============================== */
function openModal(id) {
    // Definición de títulos y textos según los 8 servicios originales
    const titulos = [
      "",
      "Instalación de cámaras de vigilancia",
      "Proveedor de internet",
      "Automatización de hogares y negocios",
      "Paneles Solares y Soluciones de Energía",
      "Soluciones de agua y sanitización para el hogar",
      "Servicios Urgentes 24/7",
      "Sistemas de Respaldo Eléctrico",
      "Instalación de Chapas Eléctricas y Cerraduras Inteligentes" // ID 8
    ];
  
    const textos = [
      "",
      "Monitorea tu hogar o negocio desde tu celular en tiempo real, con sistemas de alta definición y acceso remoto.",
      "Internet de alta velocidad y conexión estable, ideal para teletrabajo, streaming y múltiples usuarios.",
      // TEXTO DEL SERVICIO 3 (Automatización)
      "Modernizamos tu espacio para que funcione de manera inteligente, segura y eficiente.<br>Instalamos, configuramos y dejamos todo listo para que controles tu hogar o negocio desde tu celular o por voz.<br><br>Servicios que ofrecemos:<br>💡 Encendido y apagado automático de luces.<br>❄️ Control remoto de clima, ventiladores y aires acondicionados.<br>🔐 Cerraduras y accesos inteligentes.<br>📹 Integración con cámaras de seguridad y sensores.<br>🚿 Automatización de bombas de agua y tinacos.<br>🔌 Contactos y apagadores inteligentes.<br>📱 Control total desde aplicaciones (Sonoff, Tuya, Shelly, Alexa, Google Home).<br>⚡ Sistemas para ahorro de energía y programación automática.",
      // TEXTO DEL SERVICIO 4 (Paneles Solares)
      "Instalamos sistemas solares a medida para hogares y negocios en Tulum.<br>Diseñamos equipos confiables, seguros y de alta eficiencia para que ahorres en tu recibo de luz y tengas energía incluso cuando falla la red.<br><br>Servicios que ofrecemos:<br>☀️ Instalación de paneles solares interconectados (CFE)<br>🔋 Sistemas solares con baterías para respaldo.<br>⚡ Inversores híbridos y controladores MPPT.<br>🛠️ Corrección de instalaciones antiguas o mal hechas.<br>🔌 Sistemas de energía para pozos, bombas y equipos especiales.<br>📊 Análisis de consumo y dimensionamiento del sistema.<br>🔧 Mantenimiento preventivo y correctivo.",
      // TEXTO DEL SERVICIO 5 (Soluciones de Agua)
      "**Soluciones de agua y sanitización para el hogar:**<br>💧 Automatización de tinacos.<br>📱 Control de bombas con Sonoff (encendido/apagado remoto e inteligente).<br>🛠️ Instalación de purificadores de agua (osmosis inversa, carbón activado).<br>🧪 Cloradores y mantenimiento para cisternas.<br>💦 Instalación de sistemas de presión para mejorar el flujo de agua en toda la casa.",
      // TEXTO DEL SERVICIO 6 (Urgencias 24/7)
      "**Servicios Urgentes 24/7**<br>Atendemos emergencias en hogares y negocios cuando más lo necesitas.<br>Llegamos rápido, resolvemos en el momento y dejamos todo funcionando de forma segura.<br><br>Atendemos urgencias de:<br>⚡ Fallas eléctricas.<br>🛰️ Internet caído o sin señal.<br>📹 Cámaras y sistemas de seguridad fuera de línea.<br>🚿 Bombas de agua dañadas o sin presión.<br>🔌 Cortos, apagadores y contactos quemados.<br>💡 Luces que no encienden.<br>🛜 Problemas con routers, repetidores o antenas.<br>🔥 Boilers eléctricos que no calientan.<br>🚨 Alarmas que no responden",
      // TEXTO DEL SERVICIO 7 (Respaldo Eléctrico)
      "**Sistemas de Respaldo Eléctrico**<br>Te protegemos contra fallas y apagones. Esto es muy necesario cuando se va la luz para mantener equipos críticos funcionando.<br><br>Servicios que ofrecemos:<br>🔋 UPS (Sistemas de Alimentación Ininterrumpida) para computadoras y servidores.<br>⚡ Inversores de respaldo (para sistemas de casa completa).<br>📶 Baterías dedicadas para modem e internet (adiós a quedarte sin conexión).<br>☀️ Mini sistemas solares portátiles para emergencia (luces y carga de celular).",
      // NUEVO TEXTO PARA EL SERVICIO 8 (Cerraduras Inteligentes)
      "**Instalación de Chapas Eléctricas y Cerraduras Inteligentes**<br>Hacemos que tu puerta sea más segura y moderna con cerraduras inteligentes de última generación.<br>Instalamos chapas eléctricas para casas, negocios, Airbnbs y oficinas, completamente configuradas y listas para usar desde tu celular.<br><br>Incluye:<br>🔐 Cerraduras inteligentes con huella, código, tarjeta o app.<br>📱 Control desde el celular (abrir/cerrar desde cualquier lugar).<br>💬 Notificaciones al instante cuando alguien entra.<br>🔊 Integración con Alexa y Google Home.<br>🛠️ Instalación en puertas de madera, metal o aluminio.<br>🧰 Ajuste de bisagras y alineación de puerta.<br>🧑‍🔧 Configuración completa con usuarios, códigos y accesos temporales (ideal para Airbnb)."
    ];

    const imagenes = [
        "",
        "1.png",
        "2.jpg",
        "3.jpg",
        "4.jpeg",
        "5.jpg",
        "6.gif",
        "7.jpg",
        "8.jpg"
    ];
  
    document.getElementById("modalTitulo").textContent = titulos[id];
    document.getElementById("modalTexto").innerHTML = textos[id];
    document.getElementById("modalImagen").src = imagenes[id];
  
    document.getElementById("modal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }
  
  /* ===============================
     FORMULARIO A WHATSAPP
  =============================== */
  function sendWhatsApp(event) {
    event.preventDefault();
  
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const asunto = document.getElementById("asunto").value;
    const mensaje = document.getElementById("mensaje").value;
  
    const numeroDestino = "9841574368"; 
  
    const texto = 
  `Nuevo mensaje de contacto:
  Nombre: ${nombre}
  Correo: ${correo}
  Asunto: ${asunto}
  Mensaje: ${mensaje}`;
  
    const url = `https://wa.me/${numeroDestino}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
  }
  
  /* Cerrar modal al hacer clic afuera */
  window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) closeModal();
  }
  // SMOOTH SCROLL – desplazamiento suave al hacer clic en el menú
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const destino = document.querySelector(this.getAttribute("href"));
        
        destino.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});
