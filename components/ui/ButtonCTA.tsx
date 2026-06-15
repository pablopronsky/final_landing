'use client';

import { ArrowUpRight } from 'lucide-react';
import { trackWhatsAppClick } from '@/lib/analytics';

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'outline' | 'filled' | 'dark' | 'ghost';
  /** Identifies where this CTA lives, for click_whatsapp analytics */
  location?: string;
  children: React.ReactNode;
}

const variantClasses = {
  filled: 'bg-cobre text-negro hover:bg-hueso hover:text-negro',
  outline: 'border border-cobre text-cobre hover:bg-cobre hover:text-negro',
  dark: 'bg-negro text-hueso border border-negro hover:bg-cobre hover:border-cobre hover:text-negro',
  ghost: 'text-cobre hover:text-hueso',
};

export const ButtonCTA = ({ variant = 'filled', location, className = '', children, onClick, ...props }: ButtonProps) => {
  const baseClasses = 'group/btn relative font-display font-bold uppercase tracking-[0.15em] inline-flex items-center justify-center gap-3 transition-colors duration-300 rounded-[3px] overflow-hidden';

  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    if (location && typeof props.href === 'string' && props.href.includes('wa.me')) {
      trackWhatsAppClick(location);
    }
    onClick?.(e);
  };

  return (
    <a className={`${baseClasses} ${variantClasses[variant]} ${className}`} onClick={handleClick} {...props}>
      <span className="relative z-10">{children}</span>
      <ArrowUpRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
    </a>
  );
};
