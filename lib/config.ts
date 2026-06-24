import { WHATSAPP_GENERIC_MESSAGE, WHATSAPP_PHONE } from './whatsapp';

export const SITE = {
  // Dominio servido en producción. Todo (canonical/OG/sitemap/robots) se unifica aquí.
  siteUrl: 'https://cotacero.ar',
  // Número operativo actual (el que está activo en el sitio en producción).
  // Fuente única en lib/whatsapp.ts (WHATSAPP_PHONE).
  whatsappNumber: WHATSAPP_PHONE,
  whatsappDisplay: '+54 9 221 568 1131',
  whatsappMessage: WHATSAPP_GENERIC_MESSAGE,
  // EDITAR — verificar que este sea el handle real de Instagram.
  instagram: '@cotacero_superficies',
  // EDITAR — completar con la razón social / CUIT antes de publicar.
  cuit: '[CUIT]',
  ga4Id: process.env.NEXT_PUBLIC_GA4_ID ?? '',
} as const;

// Re-export para mantener estables los imports existentes (`@/lib/config`).
export { WHATSAPP_URL, WHATSAPP_PHONE, buildWhatsAppUrl, whatsAppForMaterial, whatsAppForLead } from './whatsapp';
