'use client';

import { motion } from 'motion/react';

/** Thin gold "datum" rule with a topographic tick + mono label — the brand's recurring motif */
export const DatumLine = ({ label = 'COTA 0.00', align = 'left' }: { label?: string; align?: 'left' | 'right' }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, amount: 0.6 }}
    transition={{ duration: 0.4 }}
    className={`flex items-center gap-3 ${align === 'right' ? 'flex-row-reverse text-right' : ''}`}
  >
    <span className="relative flex h-[10px] w-[10px] items-center justify-center shrink-0">
      <span className="absolute inset-0 rotate-45 border border-cobre" />
    </span>
    <motion.span
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      style={{ transformOrigin: align === 'right' ? 'right' : 'left' }}
      className="h-px w-16 md:w-28 bg-cobre"
    />
    <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-cobre">{label}</span>
  </motion.div>
);
