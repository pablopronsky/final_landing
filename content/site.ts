import { Droplets, Ruler, Hammer, SearchCheck, FileCheck, type LucideIcon } from 'lucide-react';

export const NAV_LINKS: { href: string; label: string }[] = [
  { href: '#manifiesto', label: 'Concepto' },
  { href: '#protocolo', label: 'Protocolo' },
  { href: '#superficies', label: 'Superficies' },
  { href: '#faq', label: 'FAQ' },
];

export const MOBILE_NAV_LINKS: { href: string; label: string }[] = [
  { href: '#manifiesto', label: 'Concepto' },
  { href: '#protocolo', label: 'Protocolo' },
  { href: '#superficies', label: 'Superficies' },
  { href: '#faq', label: 'Preguntas Frecuentes' },
];

export const HERO = {
  descriptor: 'Instalación de pisos y revestimientos bajo protocolo',
  cities: 'City Bell · Gonnet · La Plata',
  headlineLines: ['Cada obra tiene un', 'punto de partida.'],
  subheadPrefix: 'Nosotros lo llamamos',
  subheadEmphasis: 'cota cero',
  body: 'El material no corrige una mala obra. Revisamos la base, definimos el sistema correcto y controlamos la ejecución hasta la entrega final.',
  ctaPrimary: 'PEDÍ TU DIAGNÓSTICO',
  ctaSecondary: 'CONOCÉ EL PROTOCOLO',
  ctaMicrocopy: 'Relevamiento en obra · Sistema a medida · Agenda acotada',
  trust: ['Diagnóstico previo en obra', 'Instalación bajo protocolo', 'Registro auditable de obra'],
  imageAlt: 'Interior de obra terminada con piso de madera — Cota Cero',
};

export const TRUST_ITEMS: { n: string; title: string; desc: string }[] = [
  { n: '01', title: 'DIAGNÓSTICO PREVIO', desc: 'Medimos humedad y niveles antes de presupuestar.' },
  { n: '02', title: 'SUPERVISIÓN TÉCNICA', desc: 'Instalación controlada sin dejar nada librado al azar.' },
  { n: '03', title: 'REGISTRO AUDITABLE', desc: 'Documentación de cada etapa técnica hasta la entrega.' },
];

export const MANIFIESTO = {
  eyebrowIndex: '01',
  eyebrowLabel: 'El Concepto',
  heading: 'La mayoría de las fallas no aparecen porque el material sea malo.',
  sectionRef: '§ 01 / 06',
  sectionLabel: 'Diagnóstico · Base · Protocolo',
  paragraph1: 'Aparecen porque la base no fue evaluada, preparada o ejecutada correctamente. Por eso nuestro trabajo empieza antes de instalar.',
  paragraph2Before: 'Revisamos las condiciones de la obra, corregimos lo que haga falta y ejecutamos cada etapa bajo un protocolo definido. La ',
  paragraph2Emphasis: 'cota cero',
  paragraph2After: ' es el punto de referencia desde el que se construye todo lo demás. Esa idea también define nuestra forma de trabajar.',
};

export const PROTOCOLO = {
  eyebrowIndex: '02',
  eyebrowLabel: 'El Protocolo',
  heading: 'Protocolo de Obra',
  introLines: ['Antes de instalar, medimos.', 'Antes de avanzar, corregimos.', 'Antes de entregar, verificamos.'],
};

export const PROTOCOL_STEPS: { id: string; title: string; desc: string; icon: LucideIcon }[] = [
  { id: '01', title: 'Diagnóstico', desc: 'Medimos humedad y planimetría en obra. No cotizamos sobre sorpresas ocultas en la base.', icon: Droplets },
  { id: '02', title: 'Preparación', desc: 'Acondicionamos y nivelamos el sustrato. El material aclimatado reposa en el ambiente definitivo antes de instalarse.', icon: Ruler },
  { id: '03', title: 'Ejecución', desc: 'Colocación bajo norma técnica estricta. Controlamos dilatación, anclaje y encuentros para evitar fallas a futuro.', icon: Hammer },
  { id: '04', title: 'Control', desc: 'Revisión de juntas, zócalos, perfiles y terminaciones. El nivel de detalle que separa una colocación común de una superior.', icon: SearchCheck },
  { id: '05', title: 'Entrega', desc: 'Limpieza final y registro auditable de la obra. Te entregamos documentando que cada etapa del protocolo se cumplió.', icon: FileCheck },
];

export const PRACTICA = {
  eyebrowIndex: '03',
  eyebrowLabel: 'Práctica',
  headingLines: ['Así trabajamos.', 'Mirá la diferencia.'],
  body: 'La cota cero se construye en la obra. Medición con higrómetro, corrección de niveles, cortes milimétricos y terminaciones exactas.',
};

export const PROOF_IMAGES: { src: string; alt: string; annotation: string; className: string }[] = [
  {
    src: '/obra/medicion-humedad.webp',
    alt: 'Medición de humedad y planimetría en obra',
    annotation: '01 — Medición de humedad · higrómetro',
    className: 'aspect-[4/3] md:aspect-auto md:h-full min-h-[320px]',
  },
  {
    src: '/obra/nivelacion-sustrato.webp',
    alt: 'Nivelación y preparación de sustrato',
    annotation: '02 — Nivelación de sustrato',
    className: 'aspect-[16/10] md:aspect-[4/3]',
  },
  {
    src: '/obra/cortes-zocalos.webp',
    alt: 'Cortes milimétricos y terminación de zócalos',
    annotation: '03 — Cortes y zócalos de precisión',
    className: 'aspect-[16/10] md:aspect-[4/3]',
  },
];

export const SUPERFICIES = {
  eyebrowIndex: '04',
  eyebrowLabel: 'Superficies',
  headingLines: ['Superficies y', 'Terminaciones'],
};

export const SERVICES: { img: string; title: string; desc: string; big: boolean; material: string }[] = [
  { img: '/images/servicio-01.webp', title: 'Pisos SPC & Vinílicos', desc: 'Estabilidad dimensional y resistencia al agua. El sistema correcto para cocinas, baños y alto tránsito.', big: true, material: 'pisos SPC / vinílicos' },
  { img: '/images/servicio-02.webp', title: 'Pisos Flotantes', desc: 'Calidez acústica y visual impecable. El estándar para dormitorios y livings que exigen confort.', big: false, material: 'pisos flotantes' },
  { img: '/images/servicio-03.webp', title: 'Madera Natural', desc: 'Material vivo, instalado con norma técnica. Aclimatación, dilatación y fijación controladas.', big: false, material: 'madera natural' },
  { img: '/images/servicio-04.webp', title: 'Decks WPC', desc: 'Exteriores estables al sol y la lluvia, con estructura ventilada y mantenimiento mínimo.', big: false, material: 'decks WPC' },
  { img: '/images/servicio-05.webp', title: 'Revestimientos', desc: 'Acentos arquitectónicos para interiores. Paneles ranurados y placas de diseño con anclajes invisibles.', big: true, material: 'revestimientos' },
  { img: '/images/servicio-06.webp', title: 'Restauración', desc: 'Superficies clásicas recuperadas a nuevo. Pulido e hidrolaqueado sin alterar la esencia original.', big: false, material: 'restauración / pulido' },
];

export const FAQ_SECTION = {
  eyebrowIndex: '05',
  eyebrowLabel: 'Preguntas Frecuentes',
  heading: 'Lo que necesitás saber.',
};

export const FAQS: { q: string; a: string }[] = [
  { q: '¿Cómo funciona el presupuesto? ¿Cuánto sale?', a: 'Podemos brindarte una referencia inicial. El presupuesto definitivo surge del diagnóstico técnico. Relevamos la superficie, verificamos la base y definimos el alcance real de la obra. Así evitamos imprevistos, diferencias y sobrecostos durante la ejecución.' },
  { q: '¿Tengo que preparar mi contrapiso antes de que vengan?', a: 'No necesariamente. Nuestro equipo evalúa si el sustrato está en condiciones durante el diagnóstico técnico. De ser necesario, nos encargamos nosotros de la nivelación y preparación.' },
  { q: '¿Instalan materiales que yo ya compré?', a: 'Sí. Nuestro valor central es controlar la instalación. Si ya invertiste en el material, repetimos el diagnóstico técnico y aplicamos nuestro protocolo para asegurar que no falle por errores de base.' },
  { q: '¿Qué revisan en el relevamiento?', a: 'Medimos los niveles de humedad residual con higrómetro, verificamos la planimetría (que el piso esté recto y a nivel) y evaluamos la solidez general del contrapiso.' },
  { q: '¿Trabajan en obras chicas o solo proyectos grandes?', a: 'Trabajamos principalmente sobre obra de arquitectura, reformas integrales y residencias. Evaluamos cada caso: el volumen no es el filtro, sino la expectativa del cliente sobre el rigor técnico.' },
];

export const CONTACTO = {
  eyebrowIndex: '06',
  eyebrowLabel: 'Contacto',
  heading: 'Antes de elegir el material, revisemos si tu obra está lista para recibirlo.',
  subheading: 'Coordinamos un relevamiento técnico en tu obra antes de cualquier presupuesto.',
  ctaLabel: 'PEDÍ TU DIAGNÓSTICO',
  fichaTitle: 'Tu diagnóstico incluye:',
  fichaItems: ['Medición de humedad', 'Planimetría', 'Sistema recomendado'],
  datumLabel: 'COTA 0.00 — PUNTO DE ENTREGA',
  closingParagraph: 'Trabajamos sobre obra de arquitectura, reformas integrales y residencias. Tomamos un número limitado de obras por mes para sostener el protocolo.',
  location: 'City Bell / Gonnet',
  watermark: 'Cota Cero',
  form: {
    title: 'Coordiná tu diagnóstico',
    nameLabel: 'Nombre',
    namePlaceholder: 'Tu nombre',
    phoneLabel: 'Teléfono / WhatsApp',
    phonePlaceholder: '221 568 1131',
    zoneLabel: 'Localidad',
    zonePlaceholder: 'City Bell · Gonnet · La Plata…',
    projectLabel: 'Contanos de tu obra (opcional)',
    projectPlaceholder: 'Tipo de superficie, m² aproximados, estado actual…',
    submit: 'PEDÍ TU DIAGNÓSTICO',
    altPrefix: '¿Preferís hablar ahora?',
  },
};
