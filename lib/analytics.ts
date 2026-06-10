type GtagFn = (...args: unknown[]) => void;

export function trackWhatsAppClick(location: string) {
  if (typeof window === 'undefined') return;
  const gtag = (window as typeof window & { gtag?: GtagFn }).gtag;
  gtag?.('event', 'click_whatsapp', { location });
}
