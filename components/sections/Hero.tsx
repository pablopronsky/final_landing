'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import { ButtonCTA } from '@/components/ui/ButtonCTA';
import { HERO } from '@/content/site';

export const Hero = () => {
  const heroRef = useRef(null);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(heroProgress, [0, 1], ['0%', '30%']);
  const heroLineWidth = useTransform(heroProgress, [0, 1], ['100%', '60%']);

  return (
    <section ref={heroRef} className="relative h-[100svh] w-full flex flex-col justify-center overflow-hidden border-b border-grafito" id="hero">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <Image
          src="/images/hero.webp"
          alt={HERO.imageAlt}
          fill
          className="object-cover opacity-[0.45]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-1 via-surface-1/45 to-surface-1/15" />
      </motion.div>
      <div className="vignette-copper z-[1]" />
      <div className="grain-overlay z-[1]" />

      {/* background datum line — confined to the right (photo) half so it never crosses the headline */}
      <div className="absolute right-0 top-[40%] z-[1] hidden lg:flex w-[44%] justify-end items-center pr-12 xl:pr-20 opacity-40 pointer-events-none">
        <span className="font-mono text-[11px] tracking-[0.35em] uppercase text-hueso/35 mr-4 whitespace-nowrap">REFERENCIA · DATUM</span>
        <motion.span style={{ width: heroLineWidth }} className="h-px bg-gradient-to-l from-cobre to-transparent origin-right" />
        <span className="font-mono text-[11px] tracking-[0.35em] uppercase text-cobre ml-4 whitespace-nowrap">COTA 0.00</span>
      </div>

      <div className="relative z-10 p-6 md:p-12 lg:p-24 max-w-7xl w-full">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="block text-cobre text-[14px] font-display font-bold tracking-[0.4em] uppercase mb-6"
        >
          {HERO.eyebrow}
        </motion.span>

        {/* clip-path line reveal headline */}
        <h1 className="font-display text-fluid-hero leading-[0.88] font-bold uppercase mb-6 tracking-tighter text-balance">
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
            className="text-[32px] md:text-[40px] italic text-hueso mb-5 font-serif leading-tight"
            style={{ textShadow: '0 1px 6px rgba(0, 0, 0, 0.75)' }}
          >
            {HERO.subheadPrefix} <span className="text-cobre font-bold">{HERO.subheadEmphasis}</span>.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.78 }}
            className="text-[18px] md:text-[22px] text-hueso/80 max-w-lg font-display font-normal leading-relaxed"
          >
            {HERO.body}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-6 mt-12 items-start sm:items-center"
        >
          <ButtonCTA href="#contacto" variant="filled" className="px-10 py-5 text-[16px]">
            {HERO.ctaPrimary}
          </ButtonCTA>
          <a href="#protocolo" className="group flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.15em] text-hueso hover:text-cobre transition-colors mt-2 sm:mt-0 sm:ml-4">
            <span className="border-b border-transparent group-hover:border-cobre transition-colors pb-0.5">{HERO.ctaSecondary}</span>
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
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-hueso/50">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="block w-px h-10 bg-gradient-to-b from-cobre to-transparent"
        />
      </motion.div>
    </section>
  );
};
