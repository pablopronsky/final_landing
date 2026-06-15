import { WHATSAPP_GENERIC_MESSAGE, WHATSAPP_PHONE } from './whatsapp';

export const SITE = {
  // Dominio servido en producción. Todo (canonical/OG/sitemap/robots) se unifica aquí.
  siteUrl: 'https://cotacero.ar',
  // Número operativo actual (el que está activo en el sitio en producción).
  // EDITAR — el brand book de Cota Cero registra +54 9 221 676-8181 como
  // número oficial. Verificar cuál es el correcto antes de deploy y, si
  // corresponde, reemplazar este valor.
  whatsappNumber: WHATSAPP_PHONE,
  whatsappDisplay: '+54 9 221 568 0778',
  whatsappMessage: WHATSAPP_GENERIC_MESSAGE,
  // EDITAR — verificar que este sea el handle real de Instagram.
  instagram: '@cotacero_superficies',
  // EDITAR — completar con la razón social / CUIT antes de publicar.
  cuit: '[CUIT]',
  ga4Id: process.env.NEXT_PUBLIC_GA4_ID ?? '',
} as const;

// Re-export para mantener estables los imports existentes (`@/lib/config`).
export { WHATSAPP_URL, buildWhatsAppUrl, whatsAppForMaterial } from './whatsapp';
