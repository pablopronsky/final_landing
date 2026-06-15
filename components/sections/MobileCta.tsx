'use client';

import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { trackWhatsAppClick } from '@/lib/analytics';

// Barra inferior fija sólo en mobile. Aparece tras pasar el hero.
// Estilo sobrio: fondo negro, hairline cobre arriba, sin globo verde.
// La entrada (slide) la gobierna MotionConfig reducedMotion="user".
export const MobileCta = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsVisible(latest > window.innerHeight * 0.9);
  });

  return (
    <motion.div
      initial={false}
      animate={{ y: isVisible ? '0%' : '110%' }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      aria-hidden={!isVisible}
      className="md:hidden fixed bottom-0 left-0 w-full z-40 border-t border-cobre/70 bg-negro/95 backdrop-blur-sm [padding-bottom:env(safe-area-inset-bottom)]"
    >
      <a
        href={buildWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={isVisible ? 0 : -1}
        onClick={() => trackWhatsAppClick('mobile-sticky')}
        className="flex w-full items-center justify-center gap-3 px-6 py-4 font-display text-[15px] font-bold uppercase tracking-[0.18em] text-hueso"
      >
        Pedí tu diagnóstico
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </a>
    </motion.div>
  );
};
