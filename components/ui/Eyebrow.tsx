'use client';

import { motion } from 'motion/react';
import { fadeUp } from '@/lib/motion';

export const Eyebrow = ({ index, label, tone = 'copper' }: { index: string; label: string; tone?: 'copper' | 'muted' }) => (
  <motion.div
    variants={fadeUp}
    className={`flex items-center gap-3 mb-4 font-mono text-[12px] tracking-[0.3em] uppercase ${tone === 'copper' ? 'text-cobre' : 'text-hueso/45'}`}
  >
    <span className="relative flex h-[8px] w-[8px] items-center justify-center shrink-0">
      <span className="absolute inset-0 rotate-45 border border-current" />
    </span>
    {index} — {label}
  </motion.div>
);
