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
  { img: s1Img, title: 'Pisos SPC & Vinílicos', desc: 'Resistencia extrema al agua y alto tránsito, con mimetismo hiperrealista.' },
  { img: s2Img, title: 'Pisos Flotantes', desc: 'Calidez acústica y visual con sistemas de anclaje de última generación.' },
  { img: s3Img, title: 'Madera Natural', desc: 'Ingeniería y macizos. La nobleza del material vivo bajo tratamiento premium.' },
  { img: s4Img, title: 'Decks WPC', desc: 'Exteriores inalterables. Cero mantenimiento, máxima durabilidad estructural.' },
  { img: s5Img, title: 'Revestimientos', desc: 'Paneles ranurados y placas de diseño para acentos arquitectónicos interiores.' },
  { img: s6Img, title: 'Restauración', desc: 'Pulido, hidrolaqueado y recuperación de superficies clásicas.' },
];

const protocolSteps = [
  { id: '01', title: 'Relevamiento', desc: 'Humedad, niveles y sustrato.' },
  { id: '02', title: 'Preparación', desc: 'Acondicionamos la base.' },
  { id: '03', title: 'Aclimatación', desc: 'Descanso del material.' },
  { id: '04', title: 'Instalación', desc: 'Certificación técnica.' },
  { id: '05', title: 'Terminaciones', desc: 'Zócalos y transiciones.' },
  { id: '06', title: 'Entrega', desc: 'Registro de obra final.' },
];

const faqs = [
  { q: '¿En qué se diferencia el SPC del piso flotante?', a: 'El SPC (Stone Plastic Composite) es 100% resistente al agua y más rígido gracias a su núcleo de piedra, ideal para cocinas y baños. El flotante tradicional ofrece mayor calidez acústica pero es sensible a la humedad prolongada.' },
  { q: '¿Qué significa aclimatar el piso?', a: 'Es el proceso técnico donde el material descansa en el ambiente donde será instalado (generalmente 48 a 72hs). Permite que las tablas se adapten a la temperatura y humedad del lugar, evitando futuras expansiones, contracciones o deformaciones.' },
  { q: '¿Tengo que preparar mi contrapiso antes de que vengan?', a: 'Te recomendamos consultarlo con nosotros en la etapa de relevamiento. En Cota Cero realizamos diagnóstico de humedad y planimetría. Si el sustrato no está en condiciones, nosotros mismos nos encargamos de nivelarlo y prepararlo.' },
  { q: '¿Instalan materiales que yo ya compré?', a: 'Sí. Nuestro foco es la "Cota Cero": la calidad de la instalación. Si ya contás con un material premium, nuestro equipo técnico lo instalará bajo nuestros estrictos protocolos para garantizar su máxima durabilidad.' }
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
          <div className="flex flex-col leading-none z-50">
            <span className="font-display text-2xl font-bold tracking-tighter">N<span className="text-[#B06F4E]">C</span></span>
            <div className="h-[1px] w-full bg-[#B06F4E] mt-1"></div>
          </div>
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase ml-4 hidden sm:inline-block z-50">COTA CERO — City Bell</span>
        </div>
        
        {/* DESKTOP NAV */}
        <div className="hidden md:flex gap-8 items-center">
          <span className="text-[11px] font-bold tracking-[0.2em] opacity-60 uppercase">Pisos · Revestimientos · Decks</span>
          <a href="#contacto" className="bg-[#B06F4E] text-[#1E1E20] px-6 py-3 rounded-full text-[12px] font-bold uppercase tracking-wider hover:bg-[#C98A66] transition-colors">
            Agendá tu relevamiento
          </a>
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
              <a href="#contacto" onClick={() => setIsMobileMenuOpen(false)} className="bg-[#B06F4E] text-[#1E1E20] px-8 py-4 rounded-full text-[12px] font-bold uppercase tracking-wider">
                Agendá tu relevamiento
              </a>
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
            className="block text-[#B06F4E] text-[12px] font-bold tracking-[0.4em] uppercase mb-6"
          >
            Superficies y Terminaciones
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
            className="h-[2px] w-48 bg-[#B06F4E] mb-6 origin-left"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-[32px] md:text-[40px] italic text-[#ECE5D6] mb-8 font-serif leading-tight drop-shadow-md"
          >
            Nosotros lo llamamos <span className="text-[#B06F4E] font-bold">cota cero</span>.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg text-[#ECE5D6] opacity-100 max-w-lg leading-relaxed font-medium drop-shadow-sm"
          >
            No solo vendemos pisos y revestimientos. Controlamos cómo se instalan. Un protocolo de obra que no deja nada librado al azar: del sustrato a la última terminación.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 mt-12 items-start sm:items-center"
          >
            <a href="#contacto" className="bg-[#B06F4E] text-[#1E1E20] px-8 py-4 text-[12px] font-bold uppercase tracking-widest hover:bg-[#C98A66] transition-colors">
              Agendá tu relevamiento
            </a>
            <a href="#protocolo" className="flex items-center gap-2 text-[#ECE5D6] text-[12px] font-bold uppercase tracking-widest hover:text-[#B06F4E] transition-colors">
              Conocé el protocolo <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: THE MANIFESTO */}
      <section className="bg-[#ECE5D6] text-[#1E1E20] py-24 px-6 md:px-12 lg:px-24 border-b border-[#3A3A3C]" id="manifiesto">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-12 gap-6">
          <div>
            <span className="text-[10px] font-bold tracking-widest text-[#3A3A3C] uppercase">01 — El Concepto</span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold uppercase tracking-tighter mt-2 text-balance leading-[0.9]">
              No solo vendemos pisos y revestimientos.<br />
              <span className="text-[#3A3A3C]">Controlamos cómo se instalan.</span>
            </h2>
          </div>
          <div className="h-[1px] flex-1 mx-8 bg-[#1E1E20] opacity-20 mb-3 hidden lg:block"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 text-lg md:text-xl font-medium opacity-90 leading-relaxed max-w-5xl">
          <p>
            En arquitectura, la <span className="font-bold text-[#B06F4E]">cota cero</span> es el nivel de referencia desde el cual se mide todo el proyecto. Es la fundación visible.
          </p>
          <p>
            La industria se enfocó en despachar cajas de materiales, olvidando que la durabilidad y estética de un piso premium dependen en un 80% del sustrato y la técnica de instalación. Nosotros cambiamos el paradigma.
          </p>
        </div>
      </section>

      {/* SECTION 3: PROTOCOLO DE OBRA */}
      <section className="bg-[#1E1E20] py-24 px-6 md:px-12 lg:px-24 border-b border-[#3A3A3C]" id="protocolo">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 gap-6">
          <div>
            <span className="text-[10px] font-bold tracking-widest text-[#B06F4E] uppercase">02 — El Método</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter mt-2 leading-none">Protocolo de Obra</h2>
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

      {/* SECTION VENTA COMUN VS COTA CERO */}
      <section className="bg-[#ECE5D6] text-[#1E1E20] py-24 px-6 md:px-12 lg:px-24 border-b border-[#3A3A3C]">
        <div className="max-w-5xl">
          <span className="text-[#3A3A3C] text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block">La Diferencia</span>
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-12">Por qué Cota Cero</h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4 opacity-50 grayscale pt-6 border-t border-[#1E1E20]/10">
              <div className="w-5 h-5 flex-shrink-0 border border-[#1E1E20] flex items-center justify-center text-[10px] mt-1">×</div>
              <div>
                <span className="block font-bold mb-1">Venta común libre</span>
                <p className="text-sm">Te venden el material y queda en vos conseguir quién y cómo lo instalan.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 pt-6 border-t border-[#B06F4E]/30">
              <div className="w-5 h-5 flex-shrink-0 bg-[#B06F4E] flex items-center justify-center text-[#ECE5D6] text-[10px] mt-1">✓</div>
              <div>
                <span className="block font-bold mb-1 text-[#B06F4E]">Diagnóstico Técnico Previo</span>
                <p className="text-sm font-medium">Medición de humedad y planimetría antes de siquiera presupuestar.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 pt-6 border-t border-[#B06F4E]/30">
              <div className="w-5 h-5 flex-shrink-0 bg-[#B06F4E] flex items-center justify-center text-[#ECE5D6] text-[10px] mt-1">✓</div>
              <div>
                <span className="block font-bold mb-1 text-[#B06F4E]">Certificación de Instalación</span>
                <p className="text-sm font-medium">Instaladores bajo protocolo y registro auditable de cada etapa del proceso.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: SUPERFICIES Y TERMINACIONES (SERVICES) */}
      <section className="py-24 px-6 md:px-12 lg:px-24 border-b border-[#3A3A3C] bg-[#1E1E20]" id="superficies">
        <div className="mb-16 md:mb-24">
           <span className="text-[#B06F4E] text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block">03 — Soluciones</span>
           <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter leading-none text-balance">
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
                <h4 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter leading-none mb-3">{service.title}</h4>
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
            <span className="text-[#B06F4E] text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block">Preguntas Frecuentes</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter leading-none">Lo que necesitás saber.</h2>
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
        <span className="text-[#3A3A3C] text-[10px] font-bold tracking-[0.3em] uppercase mb-6 block">04 — La Diferencia</span>
        <h3 className="text-[50px] md:text-[80px] lg:text-[100px] font-bold uppercase leading-[0.85] tracking-tighter text-balance mb-6">
          No te pedimos que confíes.
        </h3>
        <p className="text-2xl md:text-[32px] italic text-[#B06F4E] font-serif mb-16">
          Te mostramos cómo trabajamos.
        </p>

        <a href="https://wa.me/5492210000000" className="flex items-center gap-4 bg-[#1E1E20] text-[#ECE5D6] px-8 md:px-10 py-4 md:py-5 rounded-full text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-[#3A3A3C] border border-[#B06F4E] transition-all duration-300 shadow-[0_10px_30px_rgba(176,111,78,0.2)] mb-24 md:mb-32">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#B06F4E" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Agendar Evaluación
        </a>

        <div className="w-full h-[1px] bg-[#1E1E20] opacity-10 mb-8 max-w-7xl mx-auto" />
        
        <footer className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] md:text-[11px] tracking-widest font-bold uppercase opacity-80 gap-4">
          <div className="flex flex-col md:flex-row gap-2 md:gap-10">
            <span>City Bell / Gonnet</span>
            <span>IG @cotacero_superficies</span>
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-6 items-center">
             <span className="text-[#B06F4E]">WhatsApp: +54 9 221 000 0000</span>
             <span>© {new Date().getFullYear()} Cota Cero</span>
          </div>
        </footer>
      </section>
    </main>
  );
}
