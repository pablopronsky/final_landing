export const SITE = {
  // EDITAR — confirmar el dominio definitivo del sitio antes de deploy.
  siteUrl: 'https://www.cotacero.com.ar',
  // Número operativo actual (el que está activo en el sitio en producción).
  // EDITAR — el brand book de Cota Cero registra +54 9 221 676-8181 como
  // número oficial. Verificar cuál es el correcto antes de deploy y, si
  // corresponde, reemplazar este valor.
  whatsappNumber: '5492215680778',
  whatsappDisplay: '+54 9 221 568 0778',
  whatsappMessage:
    'Hola, quiero agendar un diagnóstico técnico para mi obra. Estoy en [localidad], el trabajo sería sobre [tipo de superficie] y la superficie aproximada es de [m2].',
  // EDITAR — verificar que este sea el handle real de Instagram.
  instagram: '@cotacero_superficies',
  // EDITAR — completar con la razón social / CUIT antes de publicar.
  cuit: '[CUIT]',
  ga4Id: process.env.NEXT_PUBLIC_GA4_ID ?? '',
} as const;

export const WHATSAPP_URL = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(SITE.whatsappMessage)}`;
