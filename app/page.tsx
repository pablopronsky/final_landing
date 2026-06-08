'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowUpRight, Droplets, Ruler, ScissorsLineDashed, Menu, X, Plus, Minus } from 'lucide-react';
import { useRef, useState } from 'react';

// Images
import heroImg from '../src/assets/images/hero_1780368898171.png';
import s1Img from '../src/assets/images/servicio_01_1780368912901.png';
import s2Img from '../src/assets/images/servicio_02_1780368927428.png';
import s3Img from '../src/assets/images/servicio_03_1780368940724.png';
import s4Img from '../src/assets/images/servicio_04_1780368954829.png';
import s5Img from '../src/assets/images/servicio_05_1780368968875.png';
import s6Img from '../src/assets/images/servicio_06_1780368985507.png';

const WHATSAPP_URL = "https://wa.me/5492215680778?text=Hola,%20quiero%20agendar%20un%20diagn%C3%B3stico%20t%C3%A9cnico%20para%20mi%20obra.%20Estoy%20en%20[localidad],%20el%20trabajo%20ser%C3%ADa%20sobre%20[tipo%20de%20superficie]%20y%20la%20superficie%20aproximada%20es%20de%20[m2].";

const services = [
  { img: s1Img, title: 'Pisos SPC & Vinílicos', desc: 'Resistencia absoluta al agua con textura hiperrealista. Ideal para cocinas, baños y zonas de alto tránsito.', big: true },
  { img: s2Img, title: 'Pisos Flotantes', desc: 'Calidez acústica y visual impecable. El estándar para dormitorios y livings que exigen confort.', big: false },
  { img: s3Img, title: 'Madera Natural', desc: 'La nobleza del material vivo, instalada con rigor técnico. Para proyectos donde la exclusividad no es negociable.', big: false },
  { img: s4Img, title: 'Decks WPC', desc: 'Exteriores inalterables al sol y la lluvia. Solución definitiva con cero mantenimiento estructural.', big: false },
  { img: s5Img, title: 'Revestimientos', desc: 'Acentos arquitectónicos para interiores. Paneles ranurados y placas de diseño con anclajes invisibles.', big: true },
  { img: s6Img, title: 'Restauración', desc: 'Superficies clásicas recuperadas a nuevo. Pulido e hidrolaqueado sin alterar la esencia original.', big: false },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const staggerParent = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14 },
  },
};

/** Thin gold "datum" rule with a topographic tick + mono label — the brand's recurring motif */
const DatumLine = ({ label = 'COTA 0.00', align = 'left' }: { label?: string; align?: 'left' | 'right' }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, amount: 0.6 }}
    transition={{ duration: 0.4 }}
    className={`flex items-center gap-3 ${align === 'right' ? 'flex-row-reverse text-right' : ''}`}
  >
    <span className="relative flex h-[10px] w-[10px] items-center justify-center shrink-0">
      <span className="absolute inset-0 rotate-45 border border-[#C38A5A]" />
    </span>
    <motion.span
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      style={{ transformOrigin: align === 'right' ? 'right' : 'left' }}
      className="h-px w-16 md:w-28 bg-[#C38A5A]"
    />
    <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-[#C38A5A]">{label}</span>
  </motion.div>
);

/** Fixed top progress rule — "from datum to delivery" */
const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-[#C38A5A] origin-left z-[60]"
      aria-hidden="true"
    />
  );
};

/** Section eyebrow — index + label, with the datum tick */
const Eyebrow = ({ index, label, tone = 'copper' }: { index: string; label: string; tone?: 'copper' | 'muted' }) => (
  <motion.div
    variants={fadeUp}
    className={`flex items-center gap-3 mb-4 font-mono text-[12px] tracking-[0.3em] uppercase ${tone === 'copper' ? 'text-[#C38A5A]' : 'text-[#ECE5D6]/45'}`}
  >
    <span className="relative flex h-[8px] w-[8px] items-center justify-center shrink-0">
      <span className="absolute inset-0 rotate-45 border border-current" />
    </span>
    {index} — {label}
  </motion.div>
);

const ProofImage = ({ src, alt, annotation, className = '' }: { src: string; alt: string; annotation: string; className?: string }) => {
  const [error, setError] = useState(false);

  return (
    <div className={`group relative bg-surface-2 border border-[#3A3A3C] overflow-hidden ${className}`}>
      {!error && (
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700 grayscale-[35%] group-hover:grayscale-0 group-hover:scale-[1.04]"
          loading="lazy"
          onError={() => setError(true)}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-[#19191B] via-[#19191B]/10 to-transparent" />
      <div className="grain-overlay opacity-[0.06]" />

      {/* corner ticks */}
      <span className="absolute top-3 left-3 w-3 h-3 border-t border-l border-[#C38A5A]/70" />
      <span className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-[#C38A5A]/70" />

      {/* technical annotation — leader line revealed on hover */}
      <div className="absolute left-4 bottom-4 right-4 flex items-end gap-2 opacity-90 group-hover:opacity-100 transition-opacity duration-500">
        <span className="h-px bg-[#C38A5A] w-6 mb-[7px] origin-left scale-x-50 group-hover:scale-x-100 transition-transform duration-500" />
        <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#ECE5D6] drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]">
          {annotation}
        </span>
      </div>
    </div>
  );
};

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'outline' | 'filled' | 'dark' | 'ghost';
  children: React.ReactNode;
}

const ButtonCTA = ({ variant = 'filled', className = '', children, ...props }: ButtonProps) => {
  const baseClasses = "group/btn relative font-display font-bold uppercase tracking-[0.15em] inline-flex items-center justify-center gap-3 transition-colors duration-300 rounded-none overflow-hidden";

  const variants = {
    filled: "bg-[#C38A5A] text-[#1F1F1F] hover:bg-[#F5F2ED] hover:text-[#1F1F1F]",
    outline: "border border-[#C38A5A] text-[#C38A5A] hover:bg-[#C38A5A] hover:text-[#1F1F1F]",
    dark: "bg-[#1F1F1F] text-[#F5F2ED] border border-[#1F1F1F] hover:bg-[#C38A5A] hover:border-[#C38A5A] hover:text-[#1F1F1F]",
    ghost: "text-[#C38A5A] hover:text-[#F5F2ED]",
  };

  return (
    <a className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      <span className="relative z-10">{children}</span>
      <ArrowUpRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
    </a>
  );
};

const protocolSteps = [
  { id: '01', title: 'Relevamiento', desc: 'Medimos humedad y planimetría. Evitamos cotizar sobre sorpresas ocultas en la base.', icon: Droplets },
  { id: '02', title: 'Preparación', desc: 'Acondicionamos y nivelamos el sustrato. Aseguramos una base perfecta para que el piso no copie imperfecciones.', icon: Ruler },
  { id: '03', title: 'Aclimatación', desc: 'El material reposa en el ambiente definitivo. Evitamos que se expanda, se abra o se deforme al instalarlo.', icon: ShieldIcon },
  { id: '04', title: 'Instalación', desc: 'Ejecución bajo norma técnica estricta. Controlamos la dilatación y el anclaje para evitar fallas a futuro.', icon: Ruler },
  { id: '05', title: 'Terminaciones', desc: 'Ajuste de zócalos y perfiles. El nivel de detalle que separa una colocación común de una terminación premium.', icon: ScissorsLineDashed },
  { id: '06', title: 'Entrega', desc: 'Limpieza y registro auditable. Te entregamos la obra documentando que cada etapa se cumplió.', icon: ShieldIcon },
];

// small inline icon wrapper to avoid importing ShieldCheck twice with different names
function ShieldIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

const faqs = [
  { q: '¿Cómo funciona el presupuesto? ¿Cuánto sale?', a: 'No damos presupuesto sin diagnóstico previo. Sin medir la humedad y el estado del contrapiso, cualquier número es mentira. Primero medimos, después hablamos de inversión.' },
  { q: '¿Tengo que preparar mi contrapiso antes de que vengan?', a: 'No necesariamente. Nuestro equipo evalúa si el sustrato está en condiciones durante el diagnóstico técnico. De ser necesario, nos encargamos nosotros de la nivelación y preparación.' },
  { q: '¿Instalan materiales que yo ya compré?', a: 'Sí. Nuestro valor central es controlar la instalación. Si ya invertiste en el material, repetimos el diagnóstico técnico y aplicamos nuestro protocolo para asegurar que no falle por errores de base.' },
  { q: '¿Qué revisan en el relevamiento?', a: 'Medimos los niveles de humedad residual con higrómetro, verificamos la planimetría (que el piso esté recto y a nivel) y evaluamos la solidez general del contrapiso.' },
  { q: '¿Trabajan en obras chicas o solo proyectos grandes?', a: 'Trabajamos principalmente sobre obra de arquitectura, reformas integrales y residencias de alta gama. Evaluamos cada caso: el volumen no es el filtro, sino la expectativa del cliente sobre el rigor técnico.' }
];

export default function Home() {
  const heroRef = useRef(null);
  const protocolRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(heroProgress, [0, 1], ['0%', '30%']);
  const heroLineWidth = useTransform(heroProgress, [0, 1], ['100%', '60%']);

  const { scrollYProgress: protocolProgress } = useScroll({
    target: protocolRef,
    offset: ['start 70%', 'end 60%'],
  });
  const protocolFill = useTransform(protocolProgress, [0, 1], ['0%', '100%']);

  return (
    <main className="min-h-screen bg-[#1E1E20] text-[#ECE5D6] font-sans selection:bg-[#B06F4E] selection:text-white">
      <ScrollProgressBar />

      {/* HEADER / NAVIGATION */}
      <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-10 py-6 border-b border-[#3A3A3C] backdrop-blur-md bg-[#1E1E20]/90 text-[#ECE5D6]">
        <div className="flex items-center gap-4">
          <a href="#hero" className="flex flex-col z-50 cursor-pointer">
            <Image src="/logo.svg" alt="Cota Cero" width={180} height={40} className="w-auto h-5 md:h-6" priority />
          </a>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex gap-8 items-center">
          <span className="font-mono text-[12px] tracking-[0.25em] uppercase text-[#ECE5D6]/55">
            Pisos <span className="text-[#C38A5A]">·</span> Revestimientos <span className="text-[#C38A5A]">·</span> Decks
          </span>
          <ButtonCTA href="#contacto" variant="outline" className="px-6 py-3 text-[14px]">
            PEDÍ TU DIAGNÓSTICO
          </ButtonCTA>
        </div>

        {/* MOBILE NAV TOGGLE */}
        <button
          className="md:hidden z-50 p-2 -mr-2 text-[#ECE5D6]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* MOBILE MENU FULLSCREEN */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 w-full h-screen bg-[#1E1E20] flex flex-col items-center justify-center gap-12 z-40 text-center px-6"
            >
              <nav className="flex flex-col gap-8 items-center">
                <a href="#manifiesto" onClick={() => setIsMobileMenuOpen(false)} className="text-[26px] font-bold uppercase tracking-widest text-[#ECE5D6] hover:text-[#B06F4E]">Concepto</a>
                <a href="#protocolo" onClick={() => setIsMobileMenuOpen(false)} className="text-[26px] font-bold uppercase tracking-widest text-[#ECE5D6] hover:text-[#B06F4E]">Protocolo</a>
                <a href="#superficies" onClick={() => setIsMobileMenuOpen(false)} className="text-[26px] font-bold uppercase tracking-widest text-[#ECE5D6] hover:text-[#B06F4E]">Superficies</a>
                <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="text-[26px] font-bold uppercase tracking-widest text-[#ECE5D6] hover:text-[#B06F4E]">Preguntas Frecuentes</a>
              </nav>
              <ButtonCTA href="#contacto" variant="outline" onClick={() => setIsMobileMenuOpen(false)} className="px-8 py-4 text-[14px]">
                PEDÍ TU DIAGNÓSTICO
              </ButtonCTA>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* SECTION 1: HERO */}
      <section ref={heroRef} className="relative h-[100svh] w-full flex flex-col justify-center overflow-hidden border-b border-[#3A3A3C]" id="hero">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <Image
            src={heroImg}
            alt="Interior architecture showcasing premium flooring"
            fill
            className="object-cover opacity-[0.45]"
            referrerPolicy="no-referrer"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E20] via-[#1E1E20]/45 to-[#1E1E20]/15" />
        </motion.div>
        <div className="vignette-copper z-[1]" />
        <div className="grain-overlay z-[1]" />

        {/* background datum line — confined to the right (photo) half so it never crosses the headline */}
        <div className="absolute right-0 top-[40%] z-[1] hidden lg:flex w-[44%] justify-end items-center pr-12 xl:pr-20 opacity-40 pointer-events-none">
          <span className="font-mono text-[11px] tracking-[0.35em] uppercase text-[#ECE5D6]/35 mr-4 whitespace-nowrap">REFERENCIA · DATUM</span>
          <motion.span style={{ width: heroLineWidth }} className="h-px bg-gradient-to-l from-[#C38A5A] to-transparent origin-right" />
          <span className="font-mono text-[11px] tracking-[0.35em] uppercase text-[#C38A5A] ml-4 whitespace-nowrap">COTA 0.00</span>
        </div>

        <div className="relative z-10 p-6 md:p-12 lg:p-24 max-w-7xl w-full">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="block text-[#C38A5A] text-[14px] font-display font-bold tracking-[0.4em] uppercase mb-6"
          >
            Superficies y Terminaciones · City Bell
          </motion.span>

          {/* clip-path line reveal headline */}
          <h1 className="font-display text-fluid-hero leading-[0.88] font-bold uppercase mb-6 tracking-tighter text-balance">
            {['Cada obra tiene un', 'punto de partida.'].map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span
                  initial={{ y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.9, delay: 0.32 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="h-px w-40 bg-[#C38A5A] mb-6 origin-left"
            />
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.68 }}
              className="text-[32px] md:text-[40px] italic text-[#ECE5D6] mb-5 font-serif leading-tight"
              style={{ textShadow: '0 1px 6px rgba(0, 0, 0, 0.75)' }}
            >
              Nosotros lo llamamos <span className="text-[#C38A5A] font-bold">cota cero</span>.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.78 }}
              className="text-[20px] md:text-[22px] text-[#ECE5D6]/80 max-w-lg font-display font-normal leading-relaxed"
            >
              El material no corrige una mala obra. Revisamos la base, definimos el sistema correcto y controlamos la ejecución hasta la entrega final.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-6 mt-12 items-start sm:items-center"
          >
            <ButtonCTA href="#contacto" variant="filled" className="px-10 py-5 text-[16px]">
              PEDÍ TU DIAGNÓSTICO
            </ButtonCTA>
            <a href="#protocolo" className="group flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.15em] text-[#ECE5D6] hover:text-[#C38A5A] transition-colors mt-2 sm:mt-0 sm:ml-4">
              <span className="border-b border-transparent group-hover:border-[#C38A5A] transition-colors pb-0.5">CONOCÉ EL PROTOCOLO</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>

        {/* scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#ECE5D6]/50">Scroll</span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="block w-px h-10 bg-gradient-to-b from-[#C38A5A] to-transparent"
          />
        </motion.div>
      </section>

      {/* TRUST BAR */}
      <div className="relative bg-surface-2 py-10 md:py-12 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="grain-overlay opacity-[0.04]" />
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3"
        >
          {[
            { n: '01', title: 'DIAGNÓSTICO PREVIO', desc: 'Medimos humedad y niveles antes de presupuestar.' },
            { n: '02', title: 'SUPERVISIÓN TÉCNICA', desc: 'Instalación controlada sin dejar nada librado al azar.' },
            { n: '03', title: 'REGISTRO AUDITABLE', desc: 'Documentación de cada etapa técnica hasta la entrega.' },
          ].map((item, i) => (
            <motion.div
              key={item.n}
              variants={fadeUp}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative flex flex-col px-0 md:px-8 py-8 md:py-2 cursor-default transition-all duration-500 hover:bg-[#C38A5A]/[0.04] ${i > 0 ? 'md:border-l border-[#C38A5A]/15' : ''} border-t md:border-t-0 ${i === 0 ? 'border-t-0' : ''}`}
            >
              <span className="font-mono text-[#C38A5A] text-[13px] tracking-[0.2em] uppercase mb-3 transition-transform duration-500 group-hover:-translate-y-1">{item.n}</span>
              <h4 className="font-display text-[#F5F2ED] font-bold uppercase tracking-[0.16em] text-[15px] mb-2 transition-transform duration-500 group-hover:translate-x-1">{item.title}</h4>
              <p className="text-[#F5F2ED]/55 font-normal text-[15px] leading-relaxed transition-all duration-500 group-hover:translate-x-1 group-hover:text-[#F5F2ED]/80">{item.desc}</p>
              <span className="absolute left-0 md:left-8 bottom-0 h-px w-0 bg-[#C38A5A] transition-all duration-500 group-hover:w-12" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* SECTION 2: THE MANIFESTO */}
      <section className="relative bg-[#ECE5D6] text-[#1E1E20] py-24 md:py-32 px-6 md:px-12 lg:px-24 border-b border-[#3A3A3C] overflow-hidden" id="manifiesto">
        <div className="blueprint-grid" />
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-8 mb-16 lg:mb-20"
        >
          <div className="lg:col-span-8 xl:col-span-7">
            <Eyebrow index="01" label="El Concepto" tone="muted" />
            <motion.h2 variants={fadeUp} transition={{ duration: 0.7 }} className="font-display text-fluid-h2 font-bold uppercase tracking-tighter mt-2 text-balance leading-[0.95]">
              La mayoría de las fallas no aparecen porque el material sea malo.
            </motion.h2>
          </div>
          <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="lg:col-span-4 xl:col-span-5 flex items-start lg:items-end lg:justify-end">
            <div className="lg:text-right border-l-2 lg:border-l-0 lg:border-r-2 border-[#B06F4E]/40 pl-5 lg:pl-0 lg:pr-5 py-1">
              <span className="block font-mono text-[11px] tracking-[0.3em] uppercase text-[#B06F4E] mb-1">§ 01 / 06</span>
              <span className="block font-mono text-[11px] tracking-[0.3em] uppercase text-[#1E1E20]/40">Diagnóstico · Base · Protocolo</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24 max-w-6xl"
        >
          <motion.p variants={fadeUp} transition={{ duration: 0.6 }} className="text-[19px] md:text-[21px] font-medium opacity-90 leading-relaxed measure">
            Aparecen porque la base no fue evaluada, preparada o ejecutada correctamente. Por eso nuestro trabajo empieza antes de instalar.
          </motion.p>
          <motion.p variants={fadeUp} transition={{ duration: 0.6 }} className="text-[19px] md:text-[21px] font-medium opacity-90 leading-relaxed measure">
            Revisamos las condiciones de la obra, corregimos lo que haga falta y ejecutamos cada etapa bajo un protocolo definido. La <span className="font-serif italic font-semibold text-[#B06F4E] text-[1.15em]">cota cero</span> es el punto de referencia desde el que se construye todo lo demás. Esa idea también define nuestra forma de trabajar.
          </motion.p>
        </motion.div>
      </section>

      {/* SECTION 3: PROTOCOLO DE OBRA — editorial timeline */}
      <section ref={protocolRef} className="bg-[#1E1E20] py-24 md:py-32 px-6 md:px-12 lg:px-24 border-b border-[#3A3A3C]" id="protocolo">
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col md:flex-row justify-between md:items-end mb-20 gap-6"
        >
          <div>
            <Eyebrow index="02" label="El Método" />
            <motion.h2 variants={fadeUp} transition={{ duration: 0.7 }} className="font-display text-fluid-h2 font-bold uppercase tracking-tighter mt-2 leading-none">
              Protocolo de Obra
            </motion.h2>
          </div>
          <motion.p variants={fadeUp} transition={{ duration: 0.6 }} className="max-w-sm text-[12px] md:text-right font-bold text-[#ECE5D6]/45 uppercase tracking-widest leading-relaxed mb-1">
            Antes de instalar, medimos.<br />
            Antes de avanzar, corregimos.<br />
            Antes de entregar, verificamos.
          </motion.p>
        </motion.div>

        {/* connector rail that fills with copper as you scroll */}
        <div className="relative">
          <div className="hidden lg:block absolute top-[26px] left-0 right-0 h-px bg-[#ECE5D6]/12">
            <motion.div style={{ width: protocolFill }} className="absolute inset-y-0 left-0 bg-[#C38A5A]" />
          </div>
          <div className="lg:hidden absolute top-0 bottom-0 left-[26px] w-px bg-[#ECE5D6]/12">
            <motion.div style={{ height: protocolFill }} className="absolute inset-x-0 top-0 bg-[#C38A5A] w-px" />
          </div>

          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-x-6 gap-y-12 lg:gap-x-4 relative"
          >
            {protocolSteps.map((step) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  variants={fadeUp}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative pl-[52px] lg:pl-0"
                >
                  <div className="lg:flex lg:flex-col">
                    <span className="absolute left-0 top-0 lg:relative lg:mb-6 flex items-center justify-center w-[52px] h-[52px] rounded-full bg-surface-2 border border-[#ECE5D6]/15 group-hover:border-[#C38A5A] transition-colors duration-400">
                      <Icon className="w-5 h-5 text-[#C38A5A]" strokeWidth={1.6} />
                    </span>
                    <span className="block font-mono text-[#C38A5A] text-[34px] md:text-[40px] font-semibold leading-none mb-2 tracking-tight transition-transform duration-400 group-hover:-translate-y-1">{step.id}</span>
                    <h4 className="block font-display text-[19px] font-bold uppercase mb-2 tracking-wide">{step.title}</h4>
                    <p className="block text-[14.5px] leading-relaxed text-[#ECE5D6]/65 max-w-[26ch]">{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* SECTION PRÁCTICA — asymmetric technical-sheet layout */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 border-b border-[#3A3A3C] bg-[#1E1E20]" id="practica">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-16 xl:mb-20 max-w-3xl"
          >
            <Eyebrow index="03" label="Práctica" />
            <motion.h2 variants={fadeUp} transition={{ duration: 0.7 }} className="font-display text-fluid-h2 font-bold uppercase tracking-tighter leading-[0.95] mb-6">
              Así trabajamos.<br />Mirá la diferencia.
            </motion.h2>
            <motion.p variants={fadeUp} transition={{ duration: 0.6 }} className="text-[18px] md:text-[20px] text-[#ECE5D6]/75 max-w-2xl font-medium leading-relaxed measure">
              La cota cero se construye en la obra. Medición con higrómetro, corrección de niveles, cortes milimétricos y terminaciones exactas.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 md:grid-cols-5 gap-5 md:gap-6"
          >
            <motion.div variants={fadeUp} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className="md:col-span-3 md:row-span-2">
              <ProofImage
                src="/obra/medicion-humedad.png"
                alt="Medición de humedad y planimetría en obra"
                annotation="01 — Medición de humedad · higrómetro"
                className="aspect-[4/3] md:aspect-auto md:h-full min-h-[320px]"
              />
            </motion.div>
            <motion.div variants={fadeUp} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className="md:col-span-2">
              <ProofImage
                src="/obra/nivelacion-sustrato.png"
                alt="Nivelación y preparación de sustrato"
                annotation="02 — Nivelación de sustrato"
                className="aspect-[16/10] md:aspect-[4/3]"
              />
            </motion.div>
            <motion.div variants={fadeUp} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className="md:col-span-2 md:mt-5">
              <ProofImage
                src="/obra/cortes-zocalos.png"
                alt="Cortes milimétricos y terminación de zócalos"
                annotation="03 — Cortes y zócalos de precisión"
                className="aspect-[16/10] md:aspect-[4/3]"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: SUPERFICIES Y TERMINACIONES (SERVICES) — asymmetric bento */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 border-b border-[#3A3A3C] bg-[#1E1E20]" id="superficies">
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="mb-16 md:mb-20"
        >
          <Eyebrow index="04" label="Soluciones" />
          <motion.h2 variants={fadeUp} transition={{ duration: 0.7 }} className="font-display text-[clamp(2.5rem,5vw,4.8rem)] font-bold uppercase tracking-tighter leading-none text-balance">
            Superficies de<br />Alta Gama
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 auto-rows-[280px] md:auto-rows-[320px] gap-5 md:gap-6 max-w-[100rem]"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden border border-[#3A3A3C] ${service.big ? 'md:row-span-2' : ''}`}
            >
              <motion.div
                initial={{ clipPath: 'inset(8% 8% 8% 8%)' }}
                whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover saturate-[0.85] transition-all duration-700 group-hover:saturate-110 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E20]/95 via-[#1E1E20]/35 to-[#1E1E20]/10 group-hover:from-[#1E1E20]/85 group-hover:via-[#1E1E20]/25 transition-all duration-500" />
              <div className="absolute inset-0 border border-transparent group-hover:border-[#C38A5A]/50 transition-colors duration-500" />
              <div className="absolute inset-0 shadow-[inset_0_0_0_1px_transparent] group-hover:shadow-[inset_0_0_40px_-6px_rgba(195,138,90,0.45)] transition-shadow duration-500" />

              <div className="absolute inset-0 p-7 md:p-8 flex flex-col justify-end">
                <span className="block font-mono text-[#C38A5A] text-[13px] mb-2 tracking-wider">0{index + 1}</span>
                <h4 className="font-display text-[24px] md:text-[28px] font-bold uppercase tracking-tight leading-none mb-3">{service.title}</h4>
                <p className="text-[14px] font-normal leading-relaxed text-[#ECE5D6]/0 max-h-0 group-hover:text-[#ECE5D6]/75 group-hover:max-h-24 transition-all duration-500 ease-out overflow-hidden max-w-[34ch]">
                  {service.desc}
                </p>
                <span className="block h-px w-8 bg-[#C38A5A] mt-3 group-hover:w-16 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* SECTION FAQ — editorial accordion */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 border-b border-[#3A3A3C] bg-[#1E1E20]" id="faq">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="text-center mb-16"
          >
            <div className="flex justify-center"><Eyebrow index="05" label="Preguntas Frecuentes" /></div>
            <motion.h2 variants={fadeUp} transition={{ duration: 0.7 }} className="font-display text-fluid-h2 font-bold uppercase tracking-tighter leading-none">
              Lo que necesitás saber.
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  transition={{ duration: 0.5 }}
                  className={`border-t ${index === faqs.length - 1 ? 'border-b' : ''} border-[#3A3A3C] transition-colors duration-300 ${isOpen ? 'border-l-2 border-l-[#C38A5A]' : 'border-l-2 border-l-transparent'}`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center gap-6 py-7 px-2 md:px-6 text-left hover:bg-[#ECE5D6]/[0.03] transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="font-mono text-[13px] text-[#C38A5A] tracking-widest pt-1 shrink-0">0{index + 1}</span>
                    <span className={`font-display font-bold text-[20px] md:text-[24px] tracking-tight pr-8 transition-colors ${isOpen ? 'text-[#C38A5A]' : 'text-[#ECE5D6]'}`}>{faq.q}</span>
                    <span className="ml-auto flex-shrink-0 text-[#C38A5A]">
                      {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 px-2 md:px-6 pl-[52px] md:pl-[60px] text-[#ECE5D6]/70 text-[16px] md:text-[18px] leading-relaxed measure">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* SECTION 6: CONTACTO / CTA & FOOTER — monumental close */}
      <section className="relative bg-[#ECE5D6] text-[#1E1E20] px-6 md:px-12 lg:px-24 pt-28 md:pt-36 pb-16 flex flex-col items-center text-center overflow-hidden" id="contacto">
        <div className="blueprint-grid" />

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative flex flex-col items-center max-w-4xl mx-auto"
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
            <Eyebrow index="06" label="Contacto" tone="muted" />
          </motion.div>
          <motion.h3 variants={fadeUp} transition={{ duration: 0.7 }} className="font-display text-[clamp(2.4rem,6vw,5.2rem)] font-bold uppercase leading-[0.98] tracking-tighter text-balance mb-6">
            Antes de elegir el material, revisemos si tu obra está lista para recibirlo.
          </motion.h3>
          <motion.p variants={fadeUp} transition={{ duration: 0.6 }} className="text-[21px] md:text-[25px] italic text-[#B06F4E] font-serif mb-12">
            Solicitá un diagnóstico técnico previo en obra, sin compromiso.
          </motion.p>

          <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
            <ButtonCTA
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="dark"
              className="px-12 py-6 text-[16px] mb-6"
            >
              PEDÍ TU DIAGNÓSTICO
            </ButtonCTA>
          </motion.div>

          {/* datum bookend — closing the loop opened in the hero */}
          <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="mb-14 mt-2">
            <DatumLine label="COTA 0.00 — PUNTO DE ENTREGA" />
          </motion.div>

          <motion.p variants={fadeUp} transition={{ duration: 0.6 }} className="text-[16px] md:text-[18px] opacity-70 font-medium max-w-2xl px-6 mb-20 md:mb-24 text-[#2B2D2F] measure">
            Trabajamos sobre obra de arquitectura, reformas integrales y residencias de alta gama. Tomamos un número limitado de obras por mes para sostener el protocolo.
          </motion.p>
        </motion.div>

        <div className="relative w-full h-px bg-[#1E1E20] opacity-10 mb-8 max-w-7xl mx-auto" />

        <footer className="relative w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[12px] md:text-[13px] tracking-widest font-bold uppercase opacity-80 gap-4 pb-6">
          <div className="flex flex-col md:flex-row gap-2 md:gap-10">
            <span>City Bell / Gonnet</span>
            <span>IG @cotacero_superficies</span>
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-6 items-center">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-[#B06F4E] hover:text-[#C98A66] transition-colors">WhatsApp: +54 9 221 568 0778</a>
            <span>© {new Date().getFullYear()} Cota Cero</span>
          </div>
        </footer>

        {/* giant faint watermark */}
        <span
          aria-hidden="true"
          className="pointer-events-none select-none absolute -bottom-[0.18em] left-1/2 -translate-x-1/2 font-display font-bold uppercase tracking-tighter text-[#1E1E20]/[0.04] leading-none whitespace-nowrap text-[18vw]"
        >
          Cota Cero
        </span>
      </section>

      {/* MOBILE STICKY CTA */}
      <div className="md:hidden fixed bottom-0 left-0 w-full p-4 z-40 pointer-events-none">
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#1E1E20] to-transparent -z-10" />
        <ButtonCTA
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          variant="filled"
          className="pointer-events-auto w-full py-5 text-[16px] shadow-lg"
        >
          PEDÍ TU DIAGNÓSTICO
        </ButtonCTA>
      </div>

      {/* WHATSAPP FLOAT */}
      <div className="fixed bottom-24 md:bottom-8 right-6 z-50">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 transition-all duration-300"
          aria-label="Contactar por WhatsApp"
        >
          <span className="absolute inset-0 rounded-full bg-[#25D366] motion-safe:animate-ping motion-safe:opacity-40" aria-hidden="true" />
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="relative z-10">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
      </div>
    </main>
  );
}
