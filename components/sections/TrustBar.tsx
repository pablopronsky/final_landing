'use client';

import { motion } from 'motion/react';
import { fadeUp, staggerParent } from '@/lib/motion';
import { TRUST_ITEMS } from '@/content/site';

export const TrustBar = () => (
  <div className="relative bg-surface-2 py-10 md:py-12 px-6 md:px-12 lg:px-24 overflow-hidden">
    <div className="grain-overlay opacity-[0.04]" />
    <motion.ul
      variants={staggerParent}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3"
    >
      {TRUST_ITEMS.map((item, i) => (
        <motion.li
          key={item.n}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`group relative flex flex-col px-0 md:px-8 py-8 md:py-2 cursor-default transition-all duration-500 hover:bg-cobre/[0.04] ${i > 0 ? 'md:border-l border-cobre/15' : ''} border-t md:border-t-0 ${i === 0 ? 'border-t-0' : ''}`}
        >
          <span className="font-mono text-cobre text-[13px] tracking-[0.2em] uppercase mb-3 transition-transform duration-500 group-hover:-translate-y-1">{item.n}</span>
          <p className="font-display text-hueso font-bold uppercase tracking-[0.16em] text-[15px] mb-2 transition-transform duration-500 group-hover:translate-x-1">{item.title}</p>
          <p className="text-hueso/55 font-normal text-[15px] leading-relaxed transition-all duration-500 group-hover:translate-x-1 group-hover:text-hueso/80">{item.desc}</p>
          <span className="absolute left-0 md:left-8 bottom-0 h-px w-0 bg-cobre transition-all duration-500 group-hover:w-12" />
        </motion.li>
      ))}
    </motion.ul>
  </div>
);
