'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, ClipboardCheck, Ruler, FileCheck, type LucideIcon } from 'lucide-react';
import { useRef } from 'react';
import { ButtonCTA } from '@/components/ui/ButtonCTA';
import { HERO } from '@/content/site';
import { WHATSAPP_URL } from '@/lib/config';

// Íconos de proceso para la tira de micro-confianza (orden = HERO.trust).
const TRUST_ICONS: LucideIcon[] = [ClipboardCheck, Ruler, FileCheck];

export const Hero = () => {
  const heroRef = useRef(null);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(heroProgress, [0, 1], ['0%', '30%']);
  const heroLineWidth = useTransform(heroProgress, [0, 1], ['100%', '60%']);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[100svh] w-full flex flex-col justify-center overflow-hidden border-b border-grafito"
      id="hero"
    >
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <Image
          src="/images/hero.webp"
          alt={HERO.imageAlt}
          fill
          sizes="100vw"
          quality={70}
          className="object-cover opacity-[0.42]"
          priority
          fetchPriority="high"
        />
        {/* Gradiente reforzado hacia abajo-izquierda: garantiza contraste AA del bloque de texto. */}
        <div className="absolute inset-0 bg-gradient-to-tr from-surface-1 via-surface-1/65 to-surface-1/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-1 via-transparent to-transparent" />
      </motion.div>
      <div className="vignette-copper z-[1]" />
      <div className="grain-overlay z-[1]" />

      {/* background datum line — confinada a la mitad derecha (foto), nunca cruza el titular */}
      <div className="absolute right-0 top-[38%] z-[1] hidden lg:flex w-[42%] justify-end items-center pr-12 xl:pr-20 opacity-40 pointer-events-none">
        <span className="font-mono text-[11px] tracking-[0.35em] uppercase text-hueso/40 mr-4 whitespace-nowrap">REFERENCIA · DATUM</span>
        <motion.span style={{ width: heroLineWidth }} className="h-px bg-gradient-to-l from-cobre to-transparent origin-right" />
        <span className="font-mono text-[11px] tracking-[0.35em] uppercase text-cobre-light ml-4 whitespace-nowrap">COTA 0.00</span>
      </div>

      <div className="relative z-10 px-6 py-28 md:px-12 lg:px-24 max-w-7xl w-full">
        {/* Eyebrow legible: status-dot + descriptor en lenguaje claro, ciudades en renglón secundario */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-6"
        >
          <span className="inline-flex items-center gap-2 font-mono text-[11px] md:text-[12px] tracking-[0.25em] uppercase text-cobre-light">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-cobre opacity-60 motion-safe:animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cobre" />
            </span>
            {HERO.descriptor}
          </span>
          <span className="hidden sm:inline text-hueso/25">/</span>
          <span className="font-mono text-[11px] md:text-[12px] tracking-[0.25em] uppercase text-hueso-muted">
            {HERO.cities}
          </span>
        </motion.div>

        {/* clip-path line reveal headline */}
        <h1 className="font-display text-fluid-hero leading-[0.88] font-bold uppercase mb-6 tracking-tighter text-balance max-w-[16ch]">
          {HERO.headlineLines.map((line, i) => (
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
            className="h-px w-40 bg-cobre mb-6 origin-left"
          />
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.68 }}
            className="text-[28px] md:text-[40px] italic text-hueso mb-5 font-serif leading-tight"
            style={{ textShadow: '0 1px 8px rgba(0, 0, 0, 0.6)' }}
          >
            {HERO.subheadPrefix} <span className="text-cobre-light font-bold not-italic font-display">{HERO.subheadEmphasis}</span>.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.78 }}
            className="text-[17px] md:text-[21px] text-hueso/85 max-w-xl font-sans font-normal leading-relaxed"
          >
            {HERO.body}
          </motion.p>
        </div>

        {/* CTAs — el primario va DIRECTO a WhatsApp + microcopy reductor de fricción */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-10 md:mt-12"
        >
          <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 items-start sm:items-center">
            <ButtonCTA
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="filled"
              location="hero"
              className="px-9 py-5 text-[15px] md:text-[16px] whitespace-nowrap"
            >
              {HERO.ctaPrimary}
            </ButtonCTA>
            <a
              href="#protocolo"
              className="group inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-[3px] border border-hueso/25 px-8 py-5 font-display text-[13px] md:text-[14px] font-bold uppercase tracking-[0.15em] text-hueso/90 transition-[background-color,border-color,color] duration-200 ease-out hover:border-cobre hover:bg-hueso/[0.03] hover:text-cobre"
            >
              {HERO.ctaSecondary}
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
          <p className="mt-4 font-mono text-[11px] md:text-[12px] tracking-[0.18em] uppercase text-hueso-muted">
            {HERO.ctaMicrocopy}
          </p>
        </motion.div>

        {/* Tira de micro-confianza (proceso real, no prueba social) — empieza above-the-fold */}
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.15 }}
          className="mt-10 md:mt-14 flex flex-wrap gap-x-7 gap-y-3 border-t border-hueso/10 pt-6 max-w-2xl"
        >
          {HERO.trust.map((label, i) => {
            const Icon = TRUST_ICONS[i] ?? ClipboardCheck;
            return (
              <li key={label} className="flex items-center gap-2 text-hueso-muted">
                <Icon className="w-4 h-4 text-cobre shrink-0" strokeWidth={1.6} aria-hidden="true" />
                <span className="font-display text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.12em]">{label}</span>
              </li>
            );
          })}
        </motion.ul>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-hueso-muted">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="block w-px h-10 bg-gradient-to-b from-cobre to-transparent"
        />
      </motion.div>
    </section>
  );
};
