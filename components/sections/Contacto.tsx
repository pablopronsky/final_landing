'use client';

import { motion } from 'motion/react';
import { fadeUp, staggerParent } from '@/lib/motion';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { DatumLine } from '@/components/ui/DatumLine';
import { ButtonCTA } from '@/components/ui/ButtonCTA';
import { WhatsAppLink } from '@/components/ui/WhatsAppLink';
import { CONTACTO } from '@/content/site';
import { SITE, WHATSAPP_URL } from '@/lib/config';

export const Contacto = () => (
  <section className="relative bg-hueso text-negro px-6 md:px-12 lg:px-24 pt-28 md:pt-36 pb-16 flex flex-col items-center text-center overflow-hidden" id="contacto">
    <div className="blueprint-grid" />

    <motion.div
      variants={staggerParent}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="relative flex flex-col items-center max-w-4xl mx-auto"
    >
      <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
        <Eyebrow index={CONTACTO.eyebrowIndex} label={CONTACTO.eyebrowLabel} tone="muted" />
      </motion.div>
      <motion.h3 variants={fadeUp} transition={{ duration: 0.7 }} className="font-display text-[clamp(2.4rem,6vw,5.2rem)] font-bold uppercase leading-[0.98] tracking-tighter text-balance mb-6">
        {CONTACTO.heading}
      </motion.h3>
      <motion.p variants={fadeUp} transition={{ duration: 0.6 }} className="text-[21px] md:text-[25px] italic text-grafito font-serif mb-12">
        {CONTACTO.subheading}
      </motion.p>

      <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
        <ButtonCTA href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" variant="dark" location="contacto" className="px-12 py-6 text-[16px] mb-8">
          {CONTACTO.ctaLabel}
        </ButtonCTA>
      </motion.div>

      {/* Ficha técnica — qué incluye el diagnóstico. Borde hairline, microcuadrado
          cobre como marca de ítem (sin íconos ni color de relleno). */}
      <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="w-full max-w-sm border border-negro/15 px-7 py-6 mb-12 text-left">
        <p className="font-display text-[12px] font-bold uppercase tracking-[0.25em] text-grafito mb-4">
          {CONTACTO.fichaTitle}
        </p>
        <ul className="flex flex-col gap-3">
          {CONTACTO.fichaItems.map((item) => (
            <li key={item} className="flex items-center gap-3 text-[15px] text-negro/80">
              <span className="h-[7px] w-[7px] bg-cobre shrink-0" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* datum bookend — closing the loop opened in the hero */}
      <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="mb-14 mt-2">
        <DatumLine label={CONTACTO.datumLabel} />
      </motion.div>

      <motion.p variants={fadeUp} transition={{ duration: 0.6 }} className="text-[16px] md:text-[18px] opacity-70 font-medium max-w-2xl px-6 mb-20 md:mb-24 text-grafito measure">
        {CONTACTO.closingParagraph}
      </motion.p>
    </motion.div>

    <div className="relative w-full h-px bg-negro opacity-10 mb-8 max-w-7xl mx-auto" />

    <footer className="relative w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[12px] md:text-[13px] tracking-widest font-bold uppercase opacity-80 gap-4 pb-6">
      <div className="flex flex-col md:flex-row gap-2 md:gap-10">
        <span>{CONTACTO.location}</span>
        <span>IG {SITE.instagram}</span>
      </div>
      <div className="flex flex-col md:flex-row gap-2 md:gap-6 items-center">
        <WhatsAppLink href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" location="footer" className="text-grafito hover:text-negro underline underline-offset-4 decoration-cobre transition-colors">
          WhatsApp: {SITE.whatsappDisplay}
        </WhatsAppLink>
        <span>© {new Date().getFullYear()} {CONTACTO.watermark}</span>
      </div>
    </footer>

    {/* giant faint watermark */}
    <span
      aria-hidden="true"
      className="pointer-events-none select-none absolute -bottom-[0.18em] left-1/2 -translate-x-1/2 font-display font-bold uppercase tracking-tighter text-negro/[0.04] leading-none whitespace-nowrap text-[18vw]"
    >
      {CONTACTO.watermark}
    </span>
  </section>
);
