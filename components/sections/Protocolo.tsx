'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { fadeUp, staggerParent } from '@/lib/motion';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { PROTOCOLO, PROTOCOL_STEPS } from '@/content/site';

export const Protocolo = () => {
  const protocolRef = useRef(null);

  const { scrollYProgress: protocolProgress } = useScroll({
    target: protocolRef,
    offset: ['start 70%', 'end 60%'],
  });
  const protocolFill = useTransform(protocolProgress, [0, 1], ['0%', '100%']);

  return (
    <section ref={protocolRef} className="bg-surface-1 py-24 md:py-32 px-6 md:px-12 lg:px-24 border-b border-grafito" id="protocolo">
      <motion.div
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col md:flex-row justify-between md:items-end mb-20 gap-6"
      >
        <div>
          <Eyebrow index={PROTOCOLO.eyebrowIndex} label={PROTOCOLO.eyebrowLabel} />
          <motion.h2 variants={fadeUp} transition={{ duration: 0.7 }} className="font-display text-fluid-h2 font-bold uppercase tracking-tighter mt-2 leading-none">
            {PROTOCOLO.heading}
          </motion.h2>
        </div>
        <motion.p variants={fadeUp} transition={{ duration: 0.6 }} className="max-w-sm text-[13px] md:text-right font-bold text-hueso/55 uppercase tracking-widest leading-relaxed mb-1">
          {PROTOCOLO.introLines.map((line, i) => (
            <span key={i}>
              {line}
              {i < PROTOCOLO.introLines.length - 1 && <br />}
            </span>
          ))}
        </motion.p>
      </motion.div>

      {/* connector rail that fills with copper as you scroll */}
      <div className="relative">
        <div className="hidden lg:block absolute top-[26px] left-0 right-0 h-px bg-hueso/12">
          <motion.div style={{ width: protocolFill }} className="absolute inset-y-0 left-0 bg-cobre" />
        </div>
        <div className="lg:hidden absolute top-0 bottom-0 left-[26px] w-px bg-hueso/12">
          <motion.div style={{ height: protocolFill }} className="absolute inset-x-0 top-0 bg-cobre w-px" />
        </div>

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-12 lg:gap-x-4 relative"
        >
          {PROTOCOL_STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                variants={fadeUp}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group relative pl-[52px] lg:pl-0"
              >
                <div className="lg:flex lg:flex-col">
                  <span className="absolute left-0 top-0 lg:relative lg:mb-6 flex items-center justify-center w-[52px] h-[52px] rounded-full bg-surface-2 border border-hueso/15 group-hover:border-cobre transition-colors duration-400">
                    <Icon className="w-5 h-5 text-cobre" strokeWidth={1.6} />
                  </span>
                  <span className="block font-mono text-cobre text-[34px] md:text-[40px] font-semibold leading-none mb-2 tracking-tight tabular-nums transition-transform duration-400 group-hover:-translate-y-1">{step.id}</span>
                  <h4 className="block font-display text-[19px] font-bold uppercase mb-2 tracking-wide">{step.title}</h4>
                  <p className="block text-[16px] md:text-[17px] leading-[1.7] text-hueso/75 max-w-[30ch]">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
