'use client';

import Image, { StaticImageData } from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { ArrowRight, MapPin, Ruler, Layers, ShieldCheck, Check, Menu, X, Plus, Minus } from 'lucide-react';
import { useRef, useState } from 'react';

// Images
import heroImg from '../src/assets/images/hero_1780368898171.png';
import s1Img from '../src/assets/images/servicio_01_1780368912901.png';
import s2Img from '../src/assets/images/servicio_02_1780368927428.png';
import s3Img from '../src/assets/images/servicio_03_1780368940724.png';
import s4Img from '../src/assets/images/servicio_04_1780368954829.png';
import s5Img from '../src/assets/images/servicio_05_1780368968875.png';
import s6Img from '../src/assets/images/servicio_06_1780368985507.png';
import ctaImg from '../src/assets/images/cta_bg_1780369000320.png';

const services = [
  { img: s1Img, title: 'Pisos SPC & Vinílicos', desc: 'Resistencia absoluta al agua con textura hiperrealista. Ideal para cocinas, baños y zonas de alto tránsito.' },
  { img: s2Img, title: 'Pisos Flotantes', desc: 'Calidez acústica y visual impecable. El estándar para dormitorios y livings que exigen confort.' },
  { img: s3Img, title: 'Madera Natural', desc: 'La nobleza del material vivo, instalada con rigor técnico. Para proyectos donde la exclusividad no es negociable.' },
  { img: s4Img, title: 'Decks WPC', desc: 'Exteriores inalterables al sol y la lluvia. Solución definitiva con cero mantenimiento estructural.' },
  { img: s5Img, title: 'Revestimientos', desc: 'Acentos arquitectónicos para interiores. Paneles ranurados y placas de diseño con anclajes invisibles.' },
  { img: s6Img, title: 'Restauración', desc: 'Superficies clásicas recuperadas a nuevo. Pulido e hidrolaqueado sin alterar la esencia original.' },
];

const ProofImage = ({ src, alt, label }: { src: string, alt: string, label: string }) => {
  const [error, setError] = useState(false);

  return (
    <div className="relative aspect-[4/3] bg-[#1F1F1F] flex border border-[#2B2D2F] items-center justify-center p-6 text-center overflow-hidden group">
      {!error && (
        <img 
          src={src} 
          alt={alt} 
          className="absolute inset-0 w-full h-full object-cover z-10 transition-transform duration-700 group-hover:scale-105" 
          loading="lazy" 
          onError={() => setError(true)} 
        />
      )}
      <span className="text-[#C38A5A]/60 font-mono text-sm uppercase tracking-widest relative z-0">{label}</span>
    </div>
  );
};

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'outline' | 'filled' | 'dark' | 'ghost';
  children: React.ReactNode;
}

const ButtonCTA = ({ variant = 'filled', className = '', children, ...props }: ButtonProps) => {
  const baseClasses = "font-display font-bold uppercase tracking-[0.15em] inline-flex items-center justify-center transition-colors duration-300 rounded-none";
  
  const variants = {
    filled: "bg-[#C38A5A] text-[#1F1F1F] hover:bg-[#F5F2ED] hover:text-[#1F1F1F]",
    outline: "border border-[#C38A5A] text-[#C38A5A] hover:bg-[#C38A5A] hover:text-[#1F1F1F]",
    dark: "bg-[#1F1F1F] text-[#F5F2ED] border border-[#1F1F1F] hover:bg-[#C38A5A] hover:border-[#C38A5A] hover:text-[#1F1F1F]",
    ghost: "text-[#C38A5A] hover:text-[#F5F2ED]",
  };

  return (
    <a className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
};

const protocolSteps = [
  { id: '01', title: 'Relevamiento', desc: 'Medimos humedad y planimetría. Evitamos cotizar sobre sorpresas ocultas en la base.' },
  { id: '02', title: 'Preparación', desc: 'Acondicionamos y nivelamos el sustrato. Aseguramos una base perfecta para que el piso no copie imperfecciones.' },
  { id: '03', title: 'Aclimatación', desc: 'El material reposa en el ambiente definitivo. Evitamos que se expanda, se abra o se deforme al instalarlo.' },
  { id: '04', title: 'Instalación', desc: 'Ejecución bajo norma técnica estricta. Controlamos la dilatación y el anclaje para evitar fallas a futuro.' },
  { id: '05', title: 'Terminaciones', desc: 'Ajuste de zócalos y perfiles. El nivel de detalle que separa una colocación común de una terminación premium.' },
  { id: '06', title: 'Entrega', desc: 'Limpieza y registro auditable. Te entregamos la obra documentando que cada etapa se cumplió.' },
];

const faqs = [
  { q: '¿Cómo funciona el presupuesto? ¿Cuánto sale?', a: 'No damos presupuesto sin diagnóstico previo. Sin medir la humedad y el estado del contrapiso, cualquier número es mentira. Primero medimos, después hablamos de inversión.' },
  { q: '¿Tengo que preparar mi contrapiso antes de que vengan?', a: 'No necesariamente. Nuestro equipo evalúa si el sustrato está en condiciones durante el diagnóstico técnico. De ser necesario, nos encargamos nosotros de la nivelación y preparación.' },
  { q: '¿Instalan materiales que yo ya compré?', a: 'Sí. Nuestro valor central es controlar la instalación. Si ya invertiste en el material, repetimos el diagnóstico técnico y aplicamos nuestro protocolo para asegurar que no falle por errores de base.' },
  { q: '¿Qué revisan en el relevamiento?', a: 'Medimos los niveles de humedad residual con higrómetro, verificamos la planimetría (que el piso esté recto y a nivel) y evaluamos la solidez general del contrapiso.' },
  { q: '¿Trabajan en obras chicas o solo proyectos grandes?', a: 'Trabajamos principalmente sobre obra de arquitectura, reformas integrales y residencias de alta gama. Evaluamos cada caso: el volumen no es el filtro, sino la expectativa del cliente sobre el rigor técnico.' }
];

export default function Home() {
  const heroRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <main className="min-h-screen bg-[#1E1E20] text-[#ECE5D6] font-sans selection:bg-[#B06F4E] selection:text-white">
      {/* HEADER / NAVIGATION */}
      <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-10 py-6 border-b border-[#3A3A3C] backdrop-blur-md bg-[#1E1E20]/90 text-[#ECE5D6]">
        <div className="flex items-center gap-4">
          <div className="flex flex-col z-50">
            <Image src="/logo.svg" alt="Cota Cero" width={180} height={40} className="w-auto h-5 md:h-6" priority />
          </div>
        </div>
        
        {/* DESKTOP NAV */}
        <div className="hidden md:flex gap-8 items-center">
          <span className="text-[11px] font-bold tracking-[0.2em] opacity-60 uppercase">Pisos · Revestimientos · Decks</span>
          <ButtonCTA href="#contacto" variant="outline" className="px-6 py-3 text-[12px]">
            PEDÍ TU DIAGNÓSTICO
          </ButtonCTA>
        </div>

        {/* MOBILE NAV TOGGLE */}
        <button 
          className="md:hidden z-50 p-2 -mr-2 text-[#ECE5D6]" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
                <a href="#manifiesto" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold uppercase tracking-widest text-[#ECE5D6] hover:text-[#B06F4E]">Concepto</a>
                <a href="#protocolo" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold uppercase tracking-widest text-[#ECE5D6] hover:text-[#B06F4E]">Protocolo</a>
                <a href="#superficies" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold uppercase tracking-widest text-[#ECE5D6] hover:text-[#B06F4E]">Superficies</a>
                <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold uppercase tracking-widest text-[#ECE5D6] hover:text-[#B06F4E]">Preguntas Frecuentes</a>
              </nav>
              <ButtonCTA href="#contacto" variant="outline" onClick={() => setIsMobileMenuOpen(false)} className="px-8 py-4 text-[12px]">
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
            className="object-cover opacity-50"
            referrerPolicy="no-referrer"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E20] via-[#1E1E20]/40 to-[#1E1E20]/10" />
        </motion.div>

        <div className="relative z-10 p-6 md:p-12 lg:p-24 max-w-7xl w-full">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="block text-[#C38A5A] text-[12px] font-display font-bold tracking-[0.4em] uppercase mb-6"
          >
            Superficies y Terminaciones · City Bell
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-[64px] md:text-[80px] lg:text-[100px] leading-[0.85] font-bold uppercase mb-6 tracking-tighter text-balance"
          >
            Cada obra tiene un<br />
            punto de partida.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-[2px] w-48 bg-[#C38A5A] mb-6 origin-left"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-[32px] md:text-[40px] italic text-[#ECE5D6] mb-8 font-serif leading-tight"
            style={{ textShadow: '0 1px 6px rgba(0, 0, 0, 0.75)' }}
          >
            Nosotros lo llamamos <span className="text-[#C38A5A] font-bold">cota cero</span>.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg text-[#ECE5D6] opacity-100 max-w-lg font-display font-normal leading-relaxed drop-shadow-sm"
          >
            Un piso premium no se arruina por el material, sino por cómo se instala. No despachamos cajas: controlamos la instalación completa bajo un estricto protocolo de obra.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 mt-12 items-start sm:items-center"
          >
            <ButtonCTA href="#contacto" variant="filled" className="px-10 py-5 text-[14px]">
              PEDÍ TU DIAGNÓSTICO
            </ButtonCTA>
            <ButtonCTA href="#protocolo" variant="ghost" className="gap-2 text-[12px]">
              CONOCÉ EL PROTOCOLO <ArrowRight className="w-4 h-4" />
            </ButtonCTA>
          </motion.div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="bg-[#1F1F1F] py-10 md:py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3">
          <div className="flex flex-col md:border-r border-[#C38A5A]/20 pb-8 md:pb-0 mb-8 md:mb-0 border-b md:border-b-0 md:pr-8">
            <span className="font-display text-[#C38A5A] text-[10px] tracking-[0.2em] uppercase mb-3">01</span>
            <h4 className="font-display text-[#F5F2ED] font-bold uppercase tracking-[0.16em] text-[13px] mb-2">DIAGNÓSTICO PREVIO</h4>
            <p className="text-[#F5F2ED]/55 font-normal text-[13px] leading-relaxed">Medimos humedad y niveles antes de presupuestar.</p>
          </div>
          <div className="flex flex-col md:border-r border-[#C38A5A]/20 pb-8 md:pb-0 mb-8 md:mb-0 border-b md:border-b-0 md:px-8">
            <span className="font-display text-[#C38A5A] text-[10px] tracking-[0.2em] uppercase mb-3">02</span>
            <h4 className="font-display text-[#F5F2ED] font-bold uppercase tracking-[0.16em] text-[13px] mb-2">SUPERVISIÓN TÉCNICA</h4>
            <p className="text-[#F5F2ED]/55 font-normal text-[13px] leading-relaxed">Instalación controlada sin dejar nada librado al azar.</p>
          </div>
          <div className="flex flex-col md:pl-8">
            <span className="font-display text-[#C38A5A] text-[10px] tracking-[0.2em] uppercase mb-3">03</span>
            <h4 className="font-display text-[#F5F2ED] font-bold uppercase tracking-[0.16em] text-[13px] mb-2">REGISTRO AUDITABLE</h4>
            <p className="text-[#F5F2ED]/55 font-normal text-[13px] leading-relaxed">Documentación de cada etapa técnica hasta la entrega.</p>
          </div>
        </div>
      </div>

      {/* SECTION 2: THE MANIFESTO */}
      <section className="bg-[#ECE5D6] text-[#1E1E20] py-24 px-6 md:px-12 lg:px-24 border-b border-[#3A3A3C]" id="manifiesto">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-12 gap-6">
          <div>
            <span className="text-[10px] font-bold tracking-widest text-[#3A3A3C] uppercase">01 — El Concepto</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold uppercase tracking-tighter mt-2 text-balance leading-none">
              El problema de un piso casi nunca empieza en el piso.
            </h2>
          </div>
          <div className="h-[1px] flex-1 mx-8 bg-[#1E1E20] opacity-20 mb-3 hidden lg:block"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 text-lg md:text-xl font-medium opacity-90 leading-relaxed max-w-5xl">
          <p>
            La durabilidad y estética de una superficie premium dependen en un 80% del estado del sustrato y el rigor de la instalación, no solo de la calidad del material. La industria se acostumbró a vender metros cuadrados.
          </p>
          <p>
            Nosotros cambiamos el paradigma: medimos, acondicionamos e instalamos. En arquitectura, la <span className="font-bold text-[#B06F4E]">cota cero</span> es el nivel de referencia desde el cual se mide todo el proyecto. Es la fundación visible que sostiene el resto de tu obra.
          </p>
        </div>
      </section>

      {/* SECTION 3: PROTOCOLO DE OBRA */}
      <section className="bg-[#1E1E20] py-24 px-6 md:px-12 lg:px-24 border-b border-[#3A3A3C]" id="protocolo">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 gap-6">
          <div>
            <span className="text-[10px] font-bold tracking-widest text-[#B06F4E] uppercase">02 — El Método</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter mt-2 leading-none">Protocolo de Obra</h2>
          </div>
          <div className="h-[1px] flex-1 mx-8 bg-[#ECE5D6] opacity-20 mb-3 hidden md:block"></div>
          <p className="max-w-xs text-[10px] font-bold text-[#ECE5D6]/50 uppercase tracking-widest leading-relaxed mb-1">
            Seis etapas. Cero atajos.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 lg:gap-8">
          {protocolSteps.map((step) => (
             <div key={step.id} className="border-l border-[#ECE5D6]/20 pl-4 py-2 hover:border-[#B06F4E] transition-colors duration-300">
               <span className="block font-mono text-[#B06F4E] text-2xl font-bold mb-2">{step.id}</span>
               <span className="block text-[13px] font-bold uppercase mb-2 tracking-wider">{step.title}</span>
               <span className="block text-xs font-medium leading-relaxed opacity-70">{step.desc}</span>
             </div>
          ))}
        </div>
      </section>

      {/* SECTION PRÁCTICA (NEW) */}
      <section className="py-24 px-6 md:px-12 lg:px-24 border-b border-[#3A3A3C] bg-[#1E1E20]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 xl:mb-20">
             <span className="text-[#ECE5D6]/50 text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block">03 — Práctica</span>
             <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter leading-none mb-6">
              Así trabajamos.<br />Mirá la diferencia.
             </h2>
             <p className="text-lg md:text-xl text-[#ECE5D6] opacity-80 max-w-2xl font-medium leading-relaxed">
              La cota cero se construye en la obra. Medición con higrómetro, corrección de niveles, cortes milimétricos y terminaciones exactas.
             </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ProofImage src="/obra/medicion-humedad.png" alt="Medición de humedad y planimetría en obra" label="[FOTO: Medición de humedad]" />
            <ProofImage src="/obra/nivelacion-sustrato.png" alt="Nivelación y preparación de sustrato" label="[FOTO: Nivelación de sustrato]" />
            <ProofImage src="/obra/cortes-zocalos.png" alt="Cortes milimétricos y terminación de zócalos" label="[FOTO: Cortes y zócalos]" />
          </div>
        </div>
      </section>

      {/* SECTION 5: SUPERFICIES Y TERMINACIONES (SERVICES) */}
      <section className="py-24 px-6 md:px-12 lg:px-24 border-b border-[#3A3A3C] bg-[#1E1E20]" id="superficies">
        <div className="mb-16 md:mb-24">
           <span className="text-[#B06F4E] text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block">04 — Soluciones</span>
           <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter leading-none text-balance">
            Superficies de<br />Alta Gama
           </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-[100rem]">
          {services.map((service, index) => (
            <div key={index} className="group relative aspect-[4/5] overflow-hidden border border-[#3A3A3C]">
              <Image
                src={service.img}
                alt={service.title}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#1E1E20]/80 group-hover:bg-[#1E1E20]/20 transition-colors duration-500" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="block font-mono text-[#B06F4E] text-xs mb-2">0{index + 1}</span>
                <h4 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tighter leading-none mb-3">{service.title}</h4>
                <p className="text-[11px] font-bold opacity-70 uppercase tracking-widest leading-relaxed max-w-[90%]">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION FAQ (NEW) */}
      <section className="py-24 px-6 md:px-12 lg:px-24 border-b border-[#3A3A3C] bg-[#1E1E20]" id="faq">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#B06F4E] text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block">05 — Preguntas Frecuentes</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter leading-none">Lo que necesitás saber.</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border border-[#3A3A3C] bg-[#1E1E20]/50 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-[#ECE5D6]/5 transition-colors"
                >
                  <span className="font-bold text-lg md:text-xl pr-8">{faq.q}</span>
                  <span className="flex-shrink-0 text-[#B06F4E]">
                    {openFaq === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </span>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-[#ECE5D6]/80 text-sm md:text-base leading-relaxed border-t border-[#3A3A3C] mt-2 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: CONTACTO / CTA & FOOTER */}
      <section className="bg-[#ECE5D6] text-[#1E1E20] px-6 md:px-12 lg:px-24 py-24 md:py-32 flex flex-col items-center text-center relative" id="contacto">
        <span className="text-[#3A3A3C] text-[10px] font-bold tracking-[0.3em] uppercase mb-6 block">06 — Contacto</span>
        <h3 className="font-display text-[40px] md:text-[60px] lg:text-[80px] font-bold uppercase leading-none tracking-tighter text-balance mb-6 max-w-4xl mx-auto">
          Antes de elegir el material, revisemos si tu obra está lista para recibirlo.
        </h3>
        <p className="text-xl md:text-[24px] italic text-[#C38A5A] font-serif mb-12">
          Solicitá un diagnóstico técnico previo en obra, sin compromiso.
        </p>

        <ButtonCTA 
          href="https://wa.me/5492215680778?text=Hola,%20quiero%20agendar%20un%20diagn%C3%B3stico%20t%C3%A9cnico%20para%20mi%20obra.%20Estoy%20en%20[localidad],%20el%20trabajo%20ser%C3%ADa%20sobre%20[tipo%20de%20superficie]%20y%20la%20superficie%20aproximada%20es%20de%20[m2]." 
          target="_blank" 
          rel="noopener noreferrer" 
          variant="dark" 
          className="px-12 py-6 text-[14px] mb-16"
        >
          PEDÍ TU DIAGNÓSTICO
        </ButtonCTA>

        <p className="text-sm md:text-base opacity-70 font-medium max-w-2xl px-6 mb-24 md:mb-32 text-[#2B2D2F]">
          Trabajamos sobre obra de arquitectura, reformas integrales y residencias de alta gama. Tomamos un número limitado de obras por mes para sostener el protocolo.
        </p>

        <div className="w-full h-[1px] bg-[#1E1E20] opacity-10 mb-8 max-w-7xl mx-auto" />
        
        <footer className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] md:text-[11px] tracking-widest font-bold uppercase opacity-80 gap-4">
          <div className="flex flex-col md:flex-row gap-2 md:gap-10">
            <span>City Bell / Gonnet</span>
            <span>IG @cotacero_superficies</span>
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-6 items-center">
             <a href="https://wa.me/5492215680778?text=Hola,%20quiero%20agendar%20un%20diagn%C3%B3stico%20t%C3%A9cnico%20para%20mi%20obra.%20Estoy%20en%20[localidad],%20el%20trabajo%20ser%C3%ADa%20sobre%20[tipo%20de%20superficie]%20y%20la%20superficie%20aproximada%20es%20de%20[m2]." target="_blank" rel="noopener noreferrer" className="text-[#B06F4E] hover:text-[#C98A66] transition-colors">WhatsApp: +54 9 221 568 0778</a>
             <span>© {new Date().getFullYear()} Cota Cero</span>
          </div>
        </footer>
      </section>

      {/* MOBILE STICKY CTA */}
      <div className="md:hidden fixed bottom-0 left-0 w-full p-4 z-40 pointer-events-none">
        <ButtonCTA 
          href="https://wa.me/5492215680778?text=Hola,%20quiero%20agendar%20un%20diagn%C3%B3stico%20t%C3%A9cnico%20para%20mi%20obra.%20Estoy%20en%20[localidad],%20el%20trabajo%20ser%C3%ADa%20sobre%20[tipo%20de%20superficie]%20y%20la%20superficie%20aproximada%20es%20de%20[m2]." 
          target="_blank" 
          rel="noopener noreferrer" 
          variant="filled" 
          className="pointer-events-auto w-full py-5 text-[14px] shadow-lg"
        >
          PEDÍ TU DIAGNÓSTICO
        </ButtonCTA>
      </div>

      {/* WHATSAPP FLOAT */}
      <div className="fixed bottom-24 md:bottom-8 right-6 z-50">
        <a 
          href="https://wa.me/5492215680778?text=Hola,%20quiero%20agendar%20un%20diagn%C3%B3stico%20t%C3%A9cnico%20para%20mi%20obra.%20Estoy%20en%20[localidad],%20el%20trabajo%20ser%C3%ADa%20sobre%20[tipo%20de%20superficie]%20y%20la%20superficie%20aproximada%20es%20de%20[m2]." 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 hover:bg-[#20bd5a] transition-all duration-300"
          aria-label="Contactar por WhatsApp"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
      </div>
    </main>
  );
}
