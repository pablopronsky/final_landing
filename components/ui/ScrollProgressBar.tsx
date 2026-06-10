'use client';

import { motion, useScroll, useSpring } from 'motion/react';

/** Fixed top progress rule — "from datum to delivery" */
export const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-cobre origin-left z-[60]"
      aria-hidden="true"
    />
  );
};
