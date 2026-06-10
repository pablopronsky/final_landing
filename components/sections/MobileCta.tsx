'use client';

import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { useState } from 'react';
import { ButtonCTA } from '@/components/ui/ButtonCTA';
import { WHATSAPP_URL } from '@/lib/config';
import { HERO } from '@/content/site';

export const MobileCta = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsVisible(latest < window.innerHeight * 0.85);
  });

  return (
    <motion.div
      initial={false}
      animate={{ y: isVisible ? '0%' : '120%', opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
      className="md:hidden fixed bottom-0 left-0 w-full p-4 z-40 pointer-events-none"
    >
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-surface-1 to-transparent -z-10" />
      <ButtonCTA
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        variant="filled"
        location="mobile-sticky"
        className={`w-full py-5 text-[16px] shadow-lg ${isVisible ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        {HERO.ctaPrimary}
      </ButtonCTA>
    </motion.div>
  );
};
