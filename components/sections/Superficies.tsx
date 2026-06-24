'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { fadeUp, staggerParent } from '@/lib/motion';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { SUPERFICIES, SERVICES } from '@/content/site';
import { whatsAppForMaterial } from '@/lib/whatsapp';
import { trackWhatsAppClick } from '@/lib/analytics';

export const Superficies = () => (
  <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 border-b border-grafito bg-surface-1" id="superficies">
    <motion.div
      variants={staggerParent}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      className="mb-16 md:mb-20"
    >
      <Eyebrow index={SUPERFICIES.eyebrowIndex} label={SUPERFICIES.eyebrowLabel} />
      <motion.h2 variants={fadeUp} transition={{ duration: 0.7 }} className="font-display text-[clamp(2.5rem,5vw,4.8rem)] font-bold uppercase tracking-tighter leading-none text-balance">
        {SUPERFICIES.headingLines.map((line, i) => (
          <span key={i}>
            {line}
            {i < SUPERFICIES.headingLines.length - 1 && <br />}
          </span>
        ))}
      </motion.h2>
    </motion.div>

    <motion.div
      variants={staggerParent}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="grid grid-cols-1 md:grid-cols-3 auto-rows-[280px] md:auto-rows-[320px] gap-5 md:gap-6 max-w-[100rem]"
    >
      {SERVICES.map((service, index) => (
        <motion.div
          key={service.title}
          variants={fadeUp}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className={`group relative overflow-hidden rounded-[3px] border border-grafito ${service.big ? 'md:row-span-2' : ''}`}
        >
          <motion.div
            initial={{ clipPath: 'inset(8% 8% 8% 8%)' }}
            whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={service.img}
              alt={service.title}
              fill
              quality={90}
              sizes={service.big ? '(min-width: 768px) 50vw, 100vw' : '(min-width: 768px) 33vw, 100vw'}
              className="object-cover saturate-[0.85] transition-[filter,transform] duration-700 group-hover:saturate-110 group-hover:scale-105"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-surface-1/95 via-surface-1/35 to-surface-1/10 group-hover:from-surface-1/85 group-hover:via-surface-1/25 transition-[background-image] duration-500" />
          <div className="absolute inset-0 rounded-[3px] border border-transparent group-hover:border-cobre/50 transition-colors duration-500" />
          <div className="absolute inset-0 shadow-[inset_0_0_0_1px_transparent] group-hover:shadow-[inset_0_0_40px_-6px_rgba(195,138,90,0.45)] transition-shadow duration-500" />

          <div className="absolute inset-0 p-7 md:p-8 flex flex-col justify-end">
            <h4 className="font-display text-[24px] md:text-[28px] font-bold uppercase tracking-tight leading-none mb-3">{service.title}</h4>
            {/* Descripción visible siempre en mobile; en desktop (lg+) colapsa y se revela en hover */}
            <p className="text-[14px] font-normal leading-relaxed text-hueso/80 max-w-[34ch] lg:text-hueso/0 lg:max-h-0 lg:overflow-hidden lg:group-hover:text-hueso/80 lg:group-hover:max-h-28 lg:transition-[color,max-height] lg:duration-500 lg:ease-out">
              {service.desc}
            </p>

            {/* CTA explícito (deep-link por material) — reemplaza el overlay que secuestraba toda la card */}
            <a
              href={whatsAppForMaterial(service.material)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick(`superficie-${service.material}`)}
              aria-label={`Coordinar un diagnóstico técnico para una obra de ${service.material}`}
              className="relative z-10 mt-4 inline-flex items-center gap-2 self-start font-display text-[12px] font-bold uppercase tracking-[0.15em] text-cobre-light hover:text-hueso transition-colors"
            >
              Coordinar diagnóstico
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </section>
);
