'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { ButtonCTA } from '@/components/ui/ButtonCTA';
import { NAV_LINKS, MOBILE_NAV_LINKS } from '@/content/site';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    toggleRef.current?.focus();
  };

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    document.documentElement.classList.add('overflow-hidden');
    firstLinkRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeMenu();
        return;
      }
      if (e.key === 'Tab' && menuRef.current) {
        const focusables = menuRef.current.querySelectorAll<HTMLElement>('a, button');
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.documentElement.classList.remove('overflow-hidden');
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-10 py-6 border-b border-grafito backdrop-blur-md bg-surface-0/95 text-hueso [transform:translateZ(0)] [-webkit-transform:translateZ(0)] will-change-transform isolate">
      <div className="flex items-center gap-4">
        <a href="#hero" className="flex flex-col z-50 cursor-pointer">
          <Image src="/logo.svg" alt="Cota Cero" width={180} height={40} className="w-auto h-5 md:h-6" priority />
        </a>
      </div>

      {/* DESKTOP NAV */}
      <div className="hidden md:flex gap-8 items-center">
        <nav className="flex items-center gap-2 font-mono text-[12px] tracking-[0.25em] uppercase text-hueso/55">
          {NAV_LINKS.map((link, i) => (
            <span key={link.href} className="flex items-center gap-2">
              {i > 0 && <span className="text-cobre">·</span>}
              <a href={link.href} className="hover:text-cobre transition-colors">{link.label}</a>
            </span>
          ))}
        </nav>
        <ButtonCTA href="#contacto" variant="outline" className="px-6 py-3 text-[14px]">
          PEDÍ TU DIAGNÓSTICO
        </ButtonCTA>
      </div>

      {/* MOBILE NAV TOGGLE */}
      <button
        ref={toggleRef}
        className="md:hidden z-50 p-2 -mr-2 text-hueso"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={isMobileMenuOpen}
      >
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* MOBILE MENU FULLSCREEN */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full h-screen bg-surface-0 flex flex-col items-center justify-center gap-12 z-40 text-center px-6"
          >
            <nav className="flex flex-col gap-8 items-center">
              {MOBILE_NAV_LINKS.map((link, i) => (
                <a
                  key={link.href}
                  ref={i === 0 ? firstLinkRef : undefined}
                  href={link.href}
                  onClick={closeMenu}
                  className="text-[26px] font-bold uppercase tracking-widest text-hueso hover:text-cobre"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <ButtonCTA href="#contacto" variant="outline" onClick={closeMenu} className="px-8 py-4 text-[14px]">
              PEDÍ TU DIAGNÓSTICO
            </ButtonCTA>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
