'use client';

import { motion } from 'motion/react';
import { fadeUp, staggerParent } from '@/lib/motion';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { MANIFIESTO } from '@/content/site';

export const Manifiesto = () => (
  <section className="relative bg-hueso text-negro py-24 md:py-32 px-6 md:px-12 lg:px-24 border-b border-grafito overflow-hidden" id="manifiesto">
    <div className="blueprint-grid" />
    <motion.div
      variants={staggerParent}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="relative grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-8 mb-16 lg:mb-20"
    >
      <div className="lg:col-span-8 xl:col-span-7">
        <Eyebrow index={MANIFIESTO.eyebrowIndex} label={MANIFIESTO.eyebrowLabel} tone="muted" />
        <motion.h2 variants={fadeUp} transition={{ duration: 0.7 }} className="font-display text-fluid-h2 font-bold uppercase tracking-tighter mt-2 text-balance leading-[0.95]">
          {MANIFIESTO.heading}
        </motion.h2>
      </div>
      <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="lg:col-span-4 xl:col-span-5 flex items-start lg:items-end lg:justify-end">
        <div className="lg:text-right border-l-2 lg:border-l-0 lg:border-r-2 border-cobre/40 pl-5 lg:pl-0 lg:pr-5 py-1">
          <span className="block font-mono text-[11px] tracking-[0.3em] uppercase text-cobre mb-1">{MANIFIESTO.sectionRef}</span>
          <span className="block font-mono text-[11px] tracking-[0.3em] uppercase text-negro/40">{MANIFIESTO.sectionLabel}</span>
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
        {MANIFIESTO.paragraph1}
      </motion.p>
      <motion.p variants={fadeUp} transition={{ duration: 0.6 }} className="text-[19px] md:text-[21px] font-medium opacity-90 leading-relaxed measure">
        {MANIFIESTO.paragraph2Before}<span className="font-serif italic font-semibold text-cobre text-[1.15em]">{MANIFIESTO.paragraph2Emphasis}</span>{MANIFIESTO.paragraph2After}
      </motion.p>
    </motion.div>
  </section>
);
