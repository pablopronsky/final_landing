'use client';

import { trackWhatsAppClick } from '@/lib/analytics';

interface WhatsAppLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Identifies where this link lives, for click_whatsapp analytics */
  location: string;
  children: React.ReactNode;
}

export const WhatsAppLink = ({ location, children, onClick, ...props }: WhatsAppLinkProps) => {
  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    trackWhatsAppClick(location);
    onClick?.(e);
  };

  return (
    <a onClick={handleClick} {...props}>
      {children}
    </a>
  );
};
