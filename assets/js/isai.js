/* Isaí Figueroa | Portafolio: interacciones (sin dependencias). */
(() => {
  'use strict';
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const IMG = 'assets/img/portfolio/';

  /* ================= Datos de proyectos ================= */
  const PROJECTS = [
    { id: 'willys', name: "Willy's Food Truck", type: 'web', typeLabel: 'Sitio web', place: 'Restaurante y food truck, Chimaltenango', date: '2026',
      url: 'https://willysfoodtruck.net/visitanos', domain: 'willysfoodtruck.net', featured: true,
      images: ['https://willysfoodtruck.net/tenants/willys/img/amigos-brindis-terraza.webp'],
      short: 'De una kombi estacionada a restaurante propio. Su sitio muestra el menú, la ubicación y la agenda de la kombi, y recibe cotizaciones para eventos privados.',
      desc: 'De una kombi estacionada a restaurante propio. Sitio con menú y precios, ubicación y cómo llegar, la agenda de la kombi y un formulario de cotización para eventos privados que llega directo al correo y a WhatsApp del negocio.',
      tags: ['Angular con SSR', 'Menú con precios', 'Cotización de eventos', 'SEO', 'Cloudflare Pages'],
      keys: ['angular', 'typescript', 'seo', 'cloudflare', 'mobilefirst'] },
    { id: 'spaceship', name: 'The Spaceship Restaurant', type: 'web', typeLabel: 'Sitio web', place: 'Restaurante y bar, El Paredón Buena Vista', date: '2025',
      url: 'https://thespaceshiprestaurant.com/', domain: 'thespaceshiprestaurant.com', featured: true,
      images: ['https://thespaceshiprestaurant.com/wp-content/uploads/2025/09/SpaceShip_Septiembre-2.jpg',
        'https://thespaceshiprestaurant.com/wp-content/uploads/2025/09/DJI_20250823183412_0451_D.jpg',
        'https://thespaceshiprestaurant.com/wp-content/uploads/2025/09/SpaceShip_Septiembre-76.jpg'],
      short: 'Un restaurante y bar con forma de nave espacial frente al mar. Su sitio transmite la experiencia, muestra horarios y happy hour, y lleva directo a reservar.',
      desc: 'Restaurante y bar con temática espacial en El Paredón. El sitio presenta la experiencia inmersiva, la coctelería y la cocina, horarios del restaurante y del bar con happy hour, testimonios y un flujo de reservación en línea.',
      tags: ['WordPress', 'Elementor', 'Reservaciones en línea', 'Horarios y happy hour'],
      keys: ['wordpress', 'seo', 'mobilefirst'] },
    { id: 'hsf', name: 'The San Rafael Hotel', type: 'web', typeLabel: 'Sitio web', place: 'Hotel boutique, Antigua Guatemala', date: 'Mayo 2023',
      url: 'https://www.thesanrafaelhotel.com/', domain: 'thesanrafaelhotel.com',
      images: [IMG + 'portfolio-1.jpg', IMG + 'portfolio-1-2.jpg', IMG + 'portfolio-1-3.jpg'],
      desc: 'Casa colonial del siglo XVIII con siete habitaciones. El sitio presenta cada habitación y los servicios del hotel, la ubicación a media cuadra del Arco y lleva al huésped directo a reservar.',
      tags: ['WordPress', 'Habitaciones', 'Reservaciones', 'En inglés'], keys: ['wordpress', 'seo', 'mobilefirst'] },
    { id: 'vice', name: 'Vibras | Vice', type: 'web', typeLabel: 'Sitio web', place: 'Nightclub, Antigua Guatemala', date: 'Julio 2023',
      url: 'https://www.lasvibrasantigua.com/', domain: 'lasvibrasantigua.com',
      images: [IMG + 'portfolio-3.jpg', IMG + 'portfolio-3-1.jpg', IMG + 'portfolio-3-2.jpg'],
      desc: 'Sitio para mostrar los servicios, el menú y hacer reservaciones en un nightclub de Antigua Guatemala. Partió de un prototipo en Figma.',
      tags: ['Diseño en Figma', 'Menú', 'Reservaciones'], keys: ['figma', 'mobilefirst'] },
    { id: 'forcesos', name: 'ForceSOS', type: 'web', typeLabel: 'Sitio web', place: 'Red global de multiasistencia', date: 'Septiembre 2023',
      url: 'https://newpage.forcesos.com/home', domain: 'forcesos.com',
      images: [IMG + 'portfolio-6.jpeg', IMG + 'portfolio-6-1.jpeg', IMG + 'portfolio-6-2.jpeg'],
      desc: 'Sitio para una red global de multiasistencia con profesionales en multiservicios y tecnología, pensado para dar una respuesta integral y oportuna a los inconvenientes de la vida cotidiana.',
      tags: ['Diseño en Figma', 'Servicios', 'Responsivo'], keys: ['figma', 'mobilefirst'] },
    { id: 'casa', name: 'La Casa del Mundo', type: 'mant', typeLabel: 'Mantenimiento', place: 'Hotel, lago de Atitlán', date: 'Noviembre 2022',
      url: 'https://lacasadelmundo.com/es/inicio/', domain: 'lacasadelmundo.com',
      images: [IMG + 'portfolio-14-1.jpg', IMG + 'portfolio-14.jpg', IMG + 'portfolio-14-2.jpg'],
      desc: 'Actualización del servidor y del sitio de un lugar donde diversas culturas se unen para relajarse, compartir experiencias y disfrutar del lago de Atitlán.',
      tags: ['Servidor', 'Hosting', 'Actualización'], keys: ['cpanel', 'dns'] },
    { id: 'ladder', name: 'LadderMarketing', type: 'mant', typeLabel: 'Mantenimiento', place: 'Agencia de marketing', date: 'Diciembre 2022',
      url: 'https://www.laddermarketing.com/', domain: 'laddermarketing.com',
      images: [IMG + 'portfolio-13.png', IMG + 'portfolio-13-1.png'],
      desc: 'Actualización del servidor y del sitio para una agencia de marketing "one stop".',
      tags: ['WordPress', 'Servidor', 'SSL'], keys: ['wordpress', 'cpanel', 'dns'] },
    { id: 'mia', name: 'MIA Real Estate', type: 'mant', typeLabel: 'Mantenimiento', place: 'Bienes raíces, Antigua Guatemala', date: 'Septiembre 2022',
      url: 'https://miaantigua.com/', domain: 'miaantigua.com',
      images: [IMG + 'portfolio-16.png', IMG + 'portfolio-15-1.jpg', IMG + 'portfolio-15-2.jpg'],
      desc: 'Actualización de datos y recursos del sitio, y creación y edición de propiedades en venta y renta.',
      tags: ['Contenido', 'Propiedades', 'Actualización'], keys: [] },
    { id: 'p-forcesos', name: 'ForceSOS', type: 'proto', typeLabel: 'Prototipo', place: 'Prototipo en Figma', date: '2023',
      url: 'https://www.figma.com/file/Pf8QIswqPe4RC12okPjDXY/ForceSOS?type=design&mode=design', domain: 'figma.com',
      images: [IMG + 'portfolio-4.jpg'], desc: 'Prototipo interactivo del sitio de ForceSOS: estructura, componentes y flujos antes del desarrollo.',
      tags: ['Figma', 'Wireframing', 'Prototipado'], keys: ['figma', 'wireframing', 'prototipado'] },
    { id: 'p-vice', name: 'Vibras | Vice', type: 'proto', typeLabel: 'Prototipo', place: 'Prototipo en Figma', date: '2023',
      url: 'https://www.figma.com/file/PDshTqVlGjLaToQQtA1ePA/Vibras-%2F-Vice?type=design&node-id=0%3A1&mode=design', domain: 'figma.com',
      images: [IMG + 'portfolio-4.jpg'], desc: 'Diseño de pantallas y prototipo del sitio de Vibras | Vice, con el sistema visual del nightclub.',
      tags: ['Figma', 'Prototipado', 'Mobile first'], keys: ['figma', 'prototipado', 'mobilefirst'] },
    { id: 'p-surgery', name: 'Partner for Surgery', type: 'proto', typeLabel: 'Prototipo', place: 'Prototipo en Figma', date: '2023',
      url: 'https://www.figma.com/file/ILtuWm5wNPdiR0R8x67yg7/PartnerForSurgery?type=design&node-id=0%3A1&mode=design', domain: 'figma.com',
      images: [IMG + 'portfolio-4.jpg'], desc: 'Prototipo de un sitio para servicios quirúrgicos: arquitectura de información y diseño de interfaz.',
      tags: ['Figma', 'Wireframing', 'UX/UI'], keys: ['figma', 'wireframing', 'prototipado'] },
  ];
  const byId = Object.fromEntries(PROJECTS.map(p => [p.id, p]));

  /* ================= Barra lateral: sección activa ================= */
  const navLinks = $$('[data-nav]');
  const sections = ['inicio', 'sobre-mi', 'experiencia', 'habilidades', 'sitios', 'mantenimiento', 'prototipos', 'contacto'].map(id => document.getElementById(id));
  const setNav = () => {
    const y = innerHeight * .4;
    let cur = sections[0];
    sections.forEach(sec => { if (sec.getBoundingClientRect().top <= y) cur = sec; });
    navLinks.forEach(a => { const on = a.dataset.nav === cur.id || (a.hasAttribute('data-desk') && a.dataset.nav === 'sitios' && ['mantenimiento', 'prototipos'].includes(cur.id)); a.classList.toggle('on', on); on ? a.setAttribute('aria-current', 'true') : a.removeAttribute('aria-current'); });
  };
  addEventListener('scroll', () => requestAnimationFrame(setNav), { passive: true });
  setNav();

  /* Menú móvil: hoja inferior con todas las secciones */
  const more = $('.tab-more'), sheet = $('#sheet'), sheetBg = $('.sheet-bg');
  const setSheet = open => {
    more.setAttribute('aria-expanded', String(open));
    sheet.hidden = !open; sheetBg.hidden = !open;
    if (open) $('a', sheet).focus(); 
  };
  more.addEventListener('click', () => setSheet(sheet.hidden));
  sheetBg.addEventListener('click', () => setSheet(false));
  $$('a', sheet).forEach(a => a.addEventListener('click', () => setSheet(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !sheet.hidden) { setSheet(false); more.focus(); } });

  /* ================= Íconos ================= */
  const ICONS = window.ICONS || {};
  const icon = k => ICONS[k] || '';
  $$('[data-icon]').forEach(el => { el.innerHTML = icon(el.dataset.icon); });

  /* Marcos de selección: manijas y aparición */
  const selObs = new IntersectionObserver(entries => entries.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add('in'); selObs.unobserve(en.target); }
  }), { threshold: .3 });
  $$('.sel').forEach(el => {
    for (let i = 0; i < 6; i++) { const h = document.createElement('i'); h.className = 'h'; h.style.setProperty('--i', i); el.append(h); }
    selObs.observe(el);
  });

  /* Contadores del hero */
  if (!reduced) $$('[data-count]').forEach(el => {
    const to = +el.dataset.count, t0 = performance.now(), d = 1200;
    const tick = now => { const k = Math.min(1, (now - t0) / d); el.textContent = Math.round(to * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(tick); };
    requestAnimationFrame(tick);
  });

  /* ================= Línea del tiempo guiada por el scroll ================= */
  const parse = s => { if (s === 'now') { const d = new Date(); return d.getFullYear() * 12 + d.getMonth(); } const [y, m] = s.split('-').map(Number); return y * 12 + m - 1; };
  const items = $$('.tl-item');
  items.forEach(it => {
    $$('.tl-points li', it).forEach((li, i) => li.style.setProperty('--i', i));
    $$('.tags li', it).forEach((li, i) => li.style.setProperty('--i', i));
    $$('.tags a[data-k]', it).forEach(a => a.insertAdjacentHTML('afterbegin', icon(a.dataset.k)));
    if (it.dataset.type === 'edu') return;
    const months = parse(it.dataset.end) - parse(it.dataset.start) + 1 - (+it.dataset.gap || 0);
    const y = Math.floor(months / 12), m = months % 12;
    $('.dur', it).textContent = [y ? `${y} ${y === 1 ? 'año' : 'años'}` : '', m ? `${m} ${m === 1 ? 'mes' : 'meses'}` : ''].filter(Boolean).join(' ');
  });

  const tl = $('#timeline'), yrEl = $('#yr'), yrRole = $('#yr-role'), yrBar = $('#yr-bar'), nav = $('#steps-nav');
  const navBtns = items.map((it, i) => {
    const li = document.createElement('li');
    const b = document.createElement('button');
    b.type = 'button';
    b.innerHTML = `<b>${it.dataset.year}</b><span></span>`;
    $('span', b).textContent = it.dataset.short;
    b.addEventListener('click', () => {
      const r = $('.tl-dot', it).getBoundingClientRect();
      scrollTo({ top: scrollY + r.top - innerHeight * .55 + 20, behavior: reduced ? 'auto' : 'smooth' });
    });
    li.append(b); nav.append(li);
    return b;
  });

  let shownYear = +yrEl.textContent, yrAnim;
  const animateYear = to => {
    if (to === shownYear) return;
    cancelAnimationFrame(yrAnim);
    const from = shownYear, t0 = performance.now(), d = reduced ? 1 : 600;
    shownYear = to;
    const tick = now => { const k = Math.min(1, (now - t0) / d); yrEl.textContent = Math.round(from + (to - from) * (1 - Math.pow(1 - k, 3))); if (k < 1) yrAnim = requestAnimationFrame(tick); };
    yrAnim = requestAnimationFrame(tick);
  };

  let active = -1;
  const onScroll = () => {
    const anchor = innerHeight * .6;
    const r = tl.getBoundingClientRect();
    const fill = Math.max(0, Math.min(r.height, anchor - r.top));
    tl.style.setProperty('--fill', fill + 'px');
    yrBar.style.width = (r.height ? fill / r.height * 100 : 0) + '%';
    let last = -1;
    items.forEach((it, i) => {
      const d = $('.tl-dot', it).getBoundingClientRect();
      const inView = d.top + 15 < anchor;
      it.classList.toggle('in', inView);
      navBtns[i].classList.toggle('seen', inView);
      if (inView) last = i;
    });
    const a = Math.max(0, last);
    items.forEach((it, i) => it.classList.toggle('on', i === last));
    if (a !== active) {
      active = a;
      navBtns.forEach((b, i) => b.classList.toggle('on', i === a));
      animateYear(+items[a].dataset.year);
      yrRole.textContent = items[a].dataset.short;
    }
  };
  let ticking = false;
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(() => { onScroll(); ticking = false; }); } }, { passive: true });
  addEventListener('resize', onScroll);
  onScroll();

  /* Aparición de tarjetas de proyecto */
  const reveal = new IntersectionObserver(entries => entries.forEach(en => {
    if (en.isIntersecting) { en.target.classList.remove('pre'); reveal.unobserve(en.target); }
  }), { rootMargin: '0px 0px -10% 0px' });

  /* ================= Habilidades: íconos por área ================= */
  const CATS = ['Frontend', 'Backend', 'Datos', 'Arquitectura', 'Nube', 'DevOps', 'Diseño', 'SEO y CMS', 'Gestión'];
  const SKILLS = [
    ['angular', 'Angular', 0, '#DD0031'], ['react', 'React', 0, '#149ECA'], ['typescript', 'TypeScript', 0, '#3178C6'], ['javascript', 'JavaScript', 0, '#C9A800'],
    ['html', 'HTML', 0, '#E34F26'], ['scss', 'SCSS', 0, '#CC6699'], ['tailwind', 'Tailwind', 0, '#06B6D4'], ['material', 'Material', 0, '#757575'], ['bootstrap', 'Bootstrap', 0, '#7952B3'],
    ['nodejs', 'Node.js', 1, '#5FA04E'], ['nestjs', 'NestJS', 1, '#E0234E'], ['express', 'Express', 1, '#000000'], ['java', 'Java', 1, '#E76F00'], ['springboot', 'Spring Boot', 1, '#6DB33F'],
    ['python', 'Python', 1, '#3776AB'], ['django', 'Django', 1, '#092E20'], ['flask', 'Flask', 1, '#000000'], ['php', 'PHP', 1, '#777BB4'],
    ['postgresql', 'PostgreSQL', 2, '#4169E1'], ['oracle', 'Oracle', 2, '#C74634'], ['mysql', 'MySQL', 2, '#4479A1'], ['sqlserver', 'SQL Server', 2, '#CC2927'], ['prisma', 'Prisma', 2, '#2D3748'],
    ['microfrontends', 'Microfrontends', 3], ['microservicios', 'Microservicios', 3], ['capas', 'En capas', 3], ['gateway', 'API Gateway', 3], ['patrones', 'Patrones', 3],
    ['keycloak', 'Keycloak', 3, '#4D4D4D'], ['sso', 'SSO', 3], ['roles', 'Roles y permisos', 3],
    ['aws', 'AWS', 4, '#FF9900'], ['gcp', 'Google Cloud', 4, '#4285F4'], ['azure', 'Azure', 4, '#0078D4'], ['docker', 'Docker', 4, '#2496ED'], ['kubernetes', 'Kubernetes', 4, '#326CE5'],
    ['cpanel', 'cPanel', 4, '#FF6C2C'], ['dns', 'DNS y SSL', 4], ['cloudflare', 'Cloudflare', 4, '#F38020'],
    ['git', 'Git', 5, '#F05032'], ['gitlab', 'GitLab CI/CD', 5, '#FC6D26'], ['github', 'GitHub', 5, '#181717'], ['jenkins', 'Jenkins', 5, '#D24939'], ['sonarqube', 'SonarQube', 5, '#4E9BCD'],
    ['lint', 'Lint y Husky', 5, '#4B32C3'], ['pruebas', 'Pruebas E2E', 5], ['postman', 'Postman', 5, '#FF6C37'],
    ['figma', 'Figma', 6, '#F24E1E'], ['wireframing', 'Wireframes', 6], ['prototipado', 'Prototipos', 6], ['mobilefirst', 'Mobile first', 6],
    ['seo', 'SEO', 7], ['ga4', 'Analytics 4', 7, '#E37400'], ['gtm', 'Tag Manager', 7, '#246FDB'], ['gsc', 'Search Console', 7, '#458CF5'], ['powerbi', 'Power BI', 7, '#C9A300'],
    ['wordpress', 'WordPress', 7, '#21759B'], ['shopify', 'Shopify', 7, '#7AB55C'], ['odoo', 'Odoo', 7, '#714B67'],
    ['scrum', 'Scrum', 8], ['jira', 'Jira', 8, '#0052CC'], ['otobo', 'OTOBO', 8], ['bpmn', 'BPMN', 8],
  ].map(([k, name, cat, color]) => ({ k, name, cat: CATS[cat], color }));
  const skillBy = Object.fromEntries(SKILLS.map(s => [s.k, s]));

  // Cómo y para qué uso cada herramienta (sin nombrar empresas)
  const HOW = {
    angular: ['Mi framework principal para aplicaciones grandes: formularios complejos, módulos por equipo y sitios con renderizado en servidor para SEO.', ['Sistemas empresariales', 'Microfrontends', 'Sitios con SSR']],
    react: ['Lo uso para construir módulos de interfaz independientes que conviven con otras aplicaciones dentro de una misma plataforma.', ['Microfrontends', 'Componentes reutilizables']],
    typescript: ['Escribo casi todo en TypeScript: los tipos evitan errores antes de llegar a producción y hacen el código más fácil de mantener en equipo.', ['Frontend', 'Backend con Node']],
    javascript: ['La base de todo lo que corre en el navegador: interacciones, animaciones y lógica de interfaz sin dependencias.', ['Interacciones', 'Sitios estáticos']],
    html: ['Estructura semántica y accesible, pensada para lectores de pantalla y para que Google entienda cada página.', ['Accesibilidad', 'SEO']],
    scss: ['Organizo los estilos en variables y sistemas de diseño para que una marca se aplique igual en todas las pantallas.', ['Sistemas de diseño', 'Temas por marca']],
    tailwind: ['Para maquetar rápido interfaces consistentes, especialmente en prototipos y paneles internos.', ['Prototipos rápidos', 'Paneles']],
    material: ['Componentes listos y accesibles para aplicaciones internas donde la prioridad es la claridad y la velocidad de entrega.', ['Aplicaciones internas', 'Formularios']],
    bootstrap: ['Base de maquetación responsiva en sitios corporativos y proyectos que necesitan salir pronto.', ['Sitios corporativos', 'Responsivo']],
    nodejs: ['Creo servicios y APIs que conectan la interfaz con los datos, además de scripts que automatizan tareas repetitivas.', ['APIs', 'Automatización']],
    nestjs: ['Lo uso para gateways y microservicios bien ordenados en capas, con validaciones y documentación de cada servicio.', ['API Gateway', 'Microservicios']],
    express: ['Para APIs ligeras y servidores pequeños donde no hace falta una estructura grande.', ['APIs ligeras', 'Prototipos']],
    java: ['Desarrollo de lógica de negocio en sistemas institucionales donde la estabilidad y el tipado fuerte son clave.', ['Sistemas institucionales', 'Procesos de negocio']],
    springboot: ['Servicios backend en Java para procesos críticos con muchas reglas de negocio e integraciones.', ['Servicios backend', 'Integraciones']],
    python: ['Automatizo procesos, limpio datos y genero reportes; también lo uso para backends sencillos.', ['Automatización', 'Datos y reportes']],
    django: ['Aplicaciones web con panel administrativo incluido, ideales cuando el cliente necesita gestionar su propio contenido.', ['Paneles administrativos', 'Aplicaciones web']],
    flask: ['Para servicios pequeños y APIs rápidas en Python.', ['Microservicios', 'APIs']],
    php: ['Personalizo y extiendo sitios en WordPress con funciones y plantillas a la medida.', ['WordPress a la medida', 'Mantenimiento']],
    postgresql: ['Mi base de datos de cabecera: modelo la información, optimizo consultas y cuido la integridad de los datos.', ['Modelado de datos', 'Consultas optimizadas']],
    oracle: ['Trabajo con bases de datos Oracle en sistemas institucionales con grandes volúmenes de información.', ['Sistemas institucionales', 'Consultas']],
    mysql: ['Base de datos de muchos sitios y aplicaciones web, sobre todo en WordPress y proyectos PHP.', ['Sitios web', 'WordPress']],
    sqlserver: ['Consultas y mantenimiento de datos en sistemas empresariales basados en tecnología Microsoft.', ['Sistemas empresariales', 'Reportes']],
    prisma: ['Conecto los servicios en Node con la base de datos de forma segura, con migraciones y tipos generados.', ['Acceso a datos', 'Migraciones']],
    microfrontends: ['Divido plataformas grandes en partes independientes para que varios equipos trabajen y publiquen sin estorbarse.', ['Plataformas grandes', 'Equipos independientes']],
    microservicios: ['Separo cada responsabilidad en un servicio propio para que el sistema escale y se mantenga por partes.', ['Escalabilidad', 'Mantenimiento por partes']],
    capas: ['Ordeno el código en capas (controladores, servicios y datos) para que sea fácil de probar y de cambiar.', ['Código mantenible', 'Pruebas']],
    gateway: ['Una sola puerta de entrada para todos los servicios: seguridad, rutas y control de acceso en un mismo lugar.', ['Seguridad', 'Orden de servicios']],
    patrones: ['Aplico patrones como Singleton, Observer e inyección de dependencias para resolver problemas comunes de forma probada.', ['Código limpio', 'Reutilización']],
    keycloak: ['Configuro proveedores de identidad para que los usuarios inicien sesión una sola vez y accedan a varios sistemas.', ['Identidad digital', 'Inicio de sesión']],
    sso: ['Inicio de sesión único: un usuario, una contraseña y acceso a todas las aplicaciones que le corresponden.', ['Experiencia de usuario', 'Seguridad']],
    roles: ['Defino quién puede ver y hacer qué dentro de un sistema, según el puesto o la institución del usuario.', ['Control de acceso', 'Seguridad']],
    aws: ['Publico y monitoreo aplicaciones en la nube: servidores, almacenamiento de archivos, balanceo de carga y alertas.', ['Servidores', 'Almacenamiento', 'Monitoreo']],
    gcp: ['Despliegue de aplicaciones y servicios en la nube de Google.', ['Despliegues', 'Servicios en la nube']],
    azure: ['Despliegue y operación de aplicaciones en la nube de Microsoft.', ['Despliegues', 'Operación']],
    docker: ['Empaqueto cada aplicación en contenedores para que funcione igual en mi equipo, en pruebas y en producción.', ['Despliegues', 'Entornos iguales']],
    kubernetes: ['Conozco cómo orquestar contenedores para escalar aplicaciones según la demanda.', ['Escalado', 'Orquestación']],
    cpanel: ['Administro hosting, correos corporativos y archivos de sitios para mis clientes.', ['Hosting', 'Correo corporativo']],
    dns: ['Configuro dominios, registros DNS y certificados de seguridad para que cada sitio cargue rápido y con candado.', ['Dominios', 'Certificados SSL']],
    cloudflare: ['Publico sitios estáticos rápidos y seguros, con dominio propio y certificado incluido.', ['Publicación', 'Velocidad']],
    git: ['Control de versiones en todos mis proyectos: cada cambio queda registrado y se puede revisar o revertir.', ['Historial de cambios', 'Trabajo en equipo']],
    gitlab: ['Configuro pipelines que prueban, revisan y publican el código de forma automática en cada cambio.', ['CI/CD', 'Publicación automática']],
    github: ['Repositorios, revisión de código y colaboración en proyectos propios y de clientes.', ['Repositorios', 'Revisión de código']],
    jenkins: ['Automatización de compilaciones y despliegues en entornos empresariales.', ['Automatización', 'Despliegues']],
    sonarqube: ['Mido la calidad del código y detecto errores o vulnerabilidades antes de publicar.', ['Calidad de código', 'Seguridad']],
    lint: ['Reglas automáticas de estilo y revisiones antes de cada commit para que el código del equipo se vea igual.', ['Estándares', 'Revisiones automáticas']],
    pruebas: ['Escribo pruebas unitarias y de punta a punta para asegurar que lo que funciona hoy siga funcionando mañana.', ['Pruebas unitarias', 'Pruebas E2E']],
    postman: ['Pruebo y documento APIs antes de conectarlas con la interfaz.', ['Pruebas de API', 'Documentación']],
    figma: ['Diseño pantallas, prototipos interactivos y sistemas de diseño antes de escribir código, para validar ideas rápido.', ['Diseño de pantallas', 'Prototipos', 'Sistemas de diseño']],
    wireframing: ['Bocetos de estructura para acordar el contenido y el flujo con el cliente antes del diseño final.', ['Estructura', 'Validación temprana']],
    prototipado: ['Prototipos navegables para que el cliente pruebe la experiencia antes de invertir en desarrollo.', ['Validación', 'Experiencia de usuario']],
    mobilefirst: ['Diseño primero para el celular, donde llega la mayoría de visitas, y luego adapto a pantallas grandes.', ['Responsivo', 'Experiencia móvil']],
    seo: ['Optimizo estructura, velocidad y contenido para que los sitios aparezcan en Google cuando los clientes buscan.', ['Posicionamiento', 'Velocidad']],
    ga4: ['Mido visitas, clics y conversiones para saber qué funciona en un sitio y qué no.', ['Métricas', 'Conversiones']],
    gtm: ['Configuro eventos de medición (clics a WhatsApp, formularios enviados) sin tocar el código del sitio.', ['Eventos', 'Medición']],
    gsc: ['Reviso cómo Google ve cada sitio: indexación, búsquedas que traen visitas y errores por corregir.', ['Indexación', 'Búsquedas']],
    powerbi: ['Convierto datos en tableros claros para que los equipos tomen decisiones con números.', ['Tableros', 'Reportes']],
    wordpress: ['Sitios administrables para negocios: el cliente actualiza su contenido y yo me encargo del diseño, la velocidad y la seguridad.', ['Sitios corporativos', 'Mantenimiento']],
    shopify: ['Tiendas en línea con catálogo, pagos y gestión de pedidos.', ['E-commerce', 'Pagos en línea']],
    odoo: ['Tiendas en línea conectadas con inventario y procesos del negocio.', ['E-commerce', 'Gestión de negocio']],
    scrum: ['Trabajo en ciclos cortos con entregas frecuentes, para mostrar avances y ajustar a tiempo.', ['Entregas frecuentes', 'Trabajo en equipo']],
    jira: ['Organizo tareas, prioridades y avances del equipo en tableros visibles para todos.', ['Seguimiento', 'Planificación']],
    otobo: ['Gestión de solicitudes de soporte para atender incidencias de forma ordenada.', ['Soporte', 'Incidencias']],
    bpmn: ['Dibujo los procesos de negocio para entenderlos, detectar pasos innecesarios y automatizarlos.', ['Procesos', 'Automatización']],
  };

  const tabsEl = $('#sk-tabs'), skGrid = $('#sk-grid');
  const insIc = $('#ins-ic'), insName = $('#ins-name'), insCat = $('#ins-cat'), insList = $('#ins-list'), insDesc = $('#ins-desc');
  let current = 'angular';
  const inspect = k => {
    const s = skillBy[k]; if (!s) return;
    current = k;
    $$('.sk-tile', skGrid).forEach(t => t.setAttribute('aria-pressed', String(t.dataset.k === k)));
    insIc.innerHTML = icon(k); insIc.classList.remove('pop'); void insIc.offsetWidth; insIc.classList.add('pop');
    insName.textContent = s.name; insCat.textContent = s.cat;
    const [txt, uses] = HOW[k] || ['', []];
    insDesc.textContent = txt;
    insList.innerHTML = uses.map((u, i) => `<li style="--i:${i}">${u}</li>`).join('');
  };
  const renderGrid = cat => {
    skGrid.innerHTML = '';
    SKILLS.filter(s => cat === 'Todas' || s.cat === cat).forEach((s, i) => {
      const li = document.createElement('li');
      const b = document.createElement('button');
      b.type = 'button'; b.className = 'sk-tile'; b.dataset.k = s.k;
      b.style.setProperty('--i', i);
      if (s.color) b.style.setProperty('--bc', s.color);
      b.setAttribute('aria-pressed', String(s.k === current));
      b.innerHTML = icon(s.k) + '<span></span>';
      $('span', b).textContent = s.name;
      b.addEventListener('click', () => {
        inspect(s.k);
        if (matchMedia('(max-width: 1000px)').matches) $('#inspector').scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
      });
      li.append(b); skGrid.append(li);
    });
  };
  ['Todas', ...CATS].forEach((c, i) => {
    const b = document.createElement('button');
    b.type = 'button'; b.setAttribute('role', 'tab'); b.setAttribute('aria-selected', String(i === 0));
    const n = c === 'Todas' ? SKILLS.length : SKILLS.filter(s => s.cat === c).length;
    b.innerHTML = `<span></span><small>${n}</small>`; $('span', b).textContent = c;
    b.addEventListener('click', () => { $$('button', tabsEl).forEach(x => x.setAttribute('aria-selected', String(x === b))); renderGrid(c); });
    tabsEl.append(b);
  });
  renderGrid('Todas');
  inspect('angular');

  // Las etiquetas de la línea del tiempo abren la herramienta en Habilidades
  $$('.tags a[data-k]').forEach(a => a.addEventListener('click', () => {
    if (!$(`.sk-tile[data-k="${a.dataset.k}"]`, skGrid)) $('button', tabsEl).click();
    inspect(a.dataset.k);
  }));

  /* ================= Proyectos ================= */
  const arrow = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
  const pre = el => { if (!reduced) { el.classList.add('pre'); reveal.observe(el); } };

  // Casos destacados: imagen grande y texto, alternando lados
  const casesEl = $('#cases');
  PROJECTS.filter(p => p.featured).forEach((p, i) => {
    const art = document.createElement('article');
    art.className = 'case';
    art.innerHTML = `<button type="button" class="case-media"><img src="${p.images[0]}" alt="" loading="lazy" referrerpolicy="no-referrer"><span class="case-n">0${i + 1}</span></button>
      <div class="case-txt"><p class="case-k"></p><h3></h3><p class="case-d"></p><ul class="tags light"></ul>
      <div class="case-ctas"><button type="button" class="btn btn-brand">Ver detalle</button><a class="case-go" target="_blank" rel="noopener"></a></div></div>`;
    $('.case-k', art).innerHTML = `${p.place} <span class="new">${p.date}</span>`;
    $('h3', art).textContent = p.name;
    $('.case-d', art).textContent = p.short || p.desc;
    $('.tags', art).innerHTML = p.tags.map(t => `<li>${t}</li>`).join('');
    const go = $('.case-go', art); go.href = p.url; go.innerHTML = `Visitar ${p.domain} <span aria-hidden="true">↗</span>`;
    $('.case-media', art).setAttribute('aria-label', `Ver detalle de ${p.name}`);
    $$('button', art).forEach(b => b.addEventListener('click', () => openProject(p.id, b)));
    casesEl.append(art); pre(art);
  });

  // Tarjetas por sección
  const grids = { web: $('#grid-web'), mant: $('#grid-mant'), proto: $('#grid-proto') };
  PROJECTS.filter(p => !p.featured).forEach(p => {
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'pcard';
    b.setAttribute('aria-label', `Ver detalle de ${p.name}, ${p.typeLabel}`);
    b.innerHTML = `<div class="p-img"><img src="${p.images[0]}" alt="" loading="lazy"><span class="p-badge">${p.typeLabel}</span></div>
      <div class="p-info"><h3></h3><p></p><span class="p-go">${arrow}</span></div>`;
    $('h3', b).textContent = p.name; $('p', b).textContent = `${p.place} | ${p.date}`;
    b.addEventListener('click', () => openProject(p.id, b));
    grids[p.type].append(b); pre(b);
  });

  /* Modal de detalle */
  const modal = $('#modal');
  let opener = null;
  const setMain = (src, alt) => { const img = $('#m-img'); img.src = src; img.alt = alt; img.style.animation = 'none'; void img.offsetWidth; img.style.animation = ''; };
  function openProject(id, from) {
    const p = byId[id]; if (!p) return;
    opener = from || document.activeElement;
    $('#m-k').textContent = p.place;
    $('#m-title').textContent = p.name;
    $('#m-desc').textContent = p.desc;
    $('#m-date').textContent = p.date;
    $('#m-type').textContent = p.typeLabel;
    $('#m-tags').innerHTML = p.tags.map(t => `<li>${t}</li>`).join('');
    const link = $('#m-link');
    link.href = p.url;
    link.firstChild.textContent = p.type === 'proto' ? 'Abrir en Figma ' : 'Visitar sitio ';
    link.setAttribute('aria-label', `${p.type === 'proto' ? 'Abrir en Figma' : 'Visitar'} ${p.name} (se abre en otra pestaña)`);
    const main = $('.m-main'), thumbs = $('#m-thumbs');
    thumbs.innerHTML = '';
    if (p.images.length) {
      main.innerHTML = '<img id="m-img" alt="">';
      setMain(p.images[0], `${p.name}, imagen 1`);
      if (p.images.length > 1) p.images.forEach((src, i) => {
        const t = document.createElement('button');
        t.type = 'button'; t.setAttribute('aria-pressed', String(i === 0)); t.setAttribute('aria-label', `Ver imagen ${i + 1}`);
        t.innerHTML = `<img src="${src}" alt="" loading="lazy">`;
        t.addEventListener('click', () => { $$('button', thumbs).forEach(x => x.setAttribute('aria-pressed', String(x === t))); setMain(src, `${p.name}, imagen ${i + 1}`); });
        thumbs.append(t);
      });
    }
    modal.showModal();
  }
  $$('[data-close]', modal).forEach(b => b.addEventListener('click', () => modal.close()));
  modal.addEventListener('click', e => { if (e.target === modal) modal.close(); });
  modal.addEventListener('close', () => opener?.focus());

  /* ================= Contacto ================= */
  const copy = $('#copy');
  copy.addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(copy.dataset.mail); copy.textContent = '¡Copiado!'; }
    catch { copy.textContent = copy.dataset.mail; }
    setTimeout(() => { copy.textContent = 'Copiar correo'; }, 2000);
  });
  $('#year').textContent = new Date().getFullYear();
})();
