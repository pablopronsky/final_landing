// Helper único para armar deep-links de WhatsApp con texto real y URL-encodeado.
// Número operativo de la marca.
export const WHATSAPP_PHONE = '5492215681131';

// CTAs genéricos (hero, header, footer, contacto).
export const WHATSAPP_GENERIC_MESSAGE =
  'Hola, quiero coordinar un diagnóstico técnico para mi obra.';

/** Arma un link wa.me con el mensaje URL-encodeado. */
export function buildWhatsAppUrl(message: string = WHATSAPP_GENERIC_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

/** Deep-link por servicio, interpolando el material real (sin corchetes). */
export function whatsAppForMaterial(material: string): string {
  return buildWhatsAppUrl(
    `Hola, quiero coordinar un diagnóstico técnico para una obra de ${material}.`
  );
}

export interface LeadInput {
  nombre: string;
  telefono: string;
  localidad: string;
  obra?: string;
}

/** Deep-link de WhatsApp pre-rellenado con los datos del formulario de contacto. */
export function whatsAppForLead({ nombre, telefono, localidad, obra }: LeadInput): string {
  const lines = [
    `Hola, soy ${nombre.trim()}. Quiero coordinar un diagnóstico técnico para mi obra.`,
    `Localidad: ${localidad.trim()}`,
    obra?.trim() ? `Obra: ${obra.trim()}` : '',
    `Tel: ${telefono.trim()}`,
  ].filter(Boolean);
  return buildWhatsAppUrl(lines.join('\n'));
}

// Link genérico precomputado (compat con imports existentes).
export const WHATSAPP_URL = buildWhatsAppUrl();
