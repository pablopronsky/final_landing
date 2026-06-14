'use client';

import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import { fadeUp, staggerParent } from '@/lib/motion';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { FAQ_SECTION, FAQS } from '@/content/site';

export const Faq = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 border-b border-grafito bg-surface-1" id="faq">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center"><Eyebrow index={FAQ_SECTION.eyebrowIndex} label={FAQ_SECTION.eyebrowLabel} /></div>
          <motion.h2 variants={fadeUp} transition={{ duration: 0.7 }} className="font-display text-fluid-h2 font-bold uppercase tracking-tighter leading-none">
            {FAQ_SECTION.heading}
          </motion.h2>
        </motion.div>

        <motion.div variants={staggerParent} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}>
          {FAQS.map((faq, index) => {
            const isOpen = openFaq === index;
            const buttonId = `faq-button-${index}`;
            const panelId = `faq-panel-${index}`;
            return (
              <motion.div
                key={faq.q}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className={`border-t ${index === FAQS.length - 1 ? 'border-b' : ''} border-grafito transition-colors duration-300 ${isOpen ? 'border-l-2 border-l-cobre' : 'border-l-2 border-l-transparent'}`}
              >
                <button
                  id={buttonId}
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full flex items-center gap-6 py-7 px-2 md:px-6 text-left hover:bg-hueso/[0.03] transition-colors"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <span className="font-mono text-[13px] text-cobre tracking-widest pt-1 shrink-0">0{index + 1}</span>
                  <span className={`font-display font-bold text-[20px] md:text-[24px] tracking-tight pr-8 transition-colors ${isOpen ? 'text-cobre' : 'text-hueso'}`}>{faq.q}</span>
                  <span className="ml-auto flex-shrink-0 text-cobre">
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 px-2 md:px-6 pl-[52px] md:pl-[60px] text-hueso/80 text-[17px] md:text-[19px] leading-[1.75] measure">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
