'use client';

import { motion } from 'motion/react';
import { fadeUp, staggerParent } from '@/lib/motion';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { ProofImage } from '@/components/ui/ProofImage';
import { PRACTICA, PROOF_IMAGES } from '@/content/site';

const WRAPPER_CLASSES = ['md:col-span-3 md:row-span-2', 'md:col-span-2', 'md:col-span-2 md:mt-5'];

export const Practica = () => (
  <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 border-b border-grafito bg-surface-1" id="practica">
    <div className="max-w-7xl mx-auto">
      <motion.div
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="mb-16 xl:mb-20 max-w-3xl"
      >
        <Eyebrow index={PRACTICA.eyebrowIndex} label={PRACTICA.eyebrowLabel} />
        <motion.h2 variants={fadeUp} transition={{ duration: 0.7 }} className="font-display text-fluid-h2 font-bold uppercase tracking-tighter leading-[0.95] mb-6">
          {PRACTICA.headingLines.map((line, i) => (
            <span key={i}>
              {line}
              {i < PRACTICA.headingLines.length - 1 && <br />}
            </span>
          ))}
        </motion.h2>
        <motion.p variants={fadeUp} transition={{ duration: 0.6 }} className="text-[18px] md:text-[20px] text-hueso/75 max-w-2xl font-medium leading-relaxed measure">
          {PRACTICA.body}
        </motion.p>
      </motion.div>

      <motion.div
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="grid grid-cols-1 md:grid-cols-5 gap-5 md:gap-6"
      >
        {PROOF_IMAGES.map((image, i) => (
          <motion.div key={image.src} variants={fadeUp} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className={WRAPPER_CLASSES[i]}>
            <ProofImage src={image.src} alt={image.alt} annotation={image.annotation} className={image.className} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);
