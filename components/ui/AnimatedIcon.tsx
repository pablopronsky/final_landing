'use client';

import { AnimatePresence, motion } from 'motion/react';
import type { ReactNode } from 'react';

/**
 * Cross-fade contextual entre dos estados de un icono (play↔pause, plus↔minus,
 * menu↔close). Usa los valores EXACTOS del skill make-interfaces-feel-better:
 *   scale 0.25 → 1 · opacity 0 → 1 · blur 4px → 0 · spring duration 0.3, bounce 0.
 * `initial={false}` evita que anime en el primer render (solo en cambios de estado).
 *
 * `swapKey` debe cambiar cuando cambia el estado para disparar el swap.
 */
export const AnimatedIcon = ({ swapKey, children }: { swapKey: string; children: ReactNode }) => (
  <AnimatePresence initial={false} mode="popLayout">
    <motion.span
      key={swapKey}
      initial={{ opacity: 0, scale: 0.25, filter: 'blur(4px)' }}
      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, scale: 0.25, filter: 'blur(4px)' }}
      transition={{ type: 'spring', duration: 0.3, bounce: 0 }}
      className="inline-flex"
    >
      {children}
    </motion.span>
  </AnimatePresence>
);
