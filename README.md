# Cota Cero — Landing

Landing page de Cota Cero (pisos, revestimientos y terminaciones — City Bell, Gonnet y La Plata).

## Stack

- [Next.js 15](https://nextjs.org/) (App Router, React 19)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [motion](https://motion.dev/) para animaciones
- [lucide-react](https://lucide.dev/) para íconos

## Desarrollo local

**Requisitos:** Node.js 20+

```bash
npm install
npm run dev
```

La app queda disponible en `http://localhost:3000`.

## Build de producción

```bash
npm run build
npm run start
```

## Estructura de carpetas

```
app/
  layout.tsx        # fonts, metadata, JSON-LD, GA4
  page.tsx          # compone las secciones del landing
  globals.css       # tokens de diseño (paleta, tipografías, utilidades)
  sitemap.ts
  robots.ts
components/
  ui/                # piezas reutilizables (botones, eyebrows, líneas datum, etc.)
  sections/          # secciones de la landing (Header, Hero, Protocolo, etc.)
content/
  site.ts            # todo el copy del sitio (servicios, protocolo, FAQs, etc.)
lib/
  config.ts          # constantes del sitio (WhatsApp, Instagram, GA4)
  analytics.ts       # tracking de eventos (click_whatsapp)
  utils.ts
public/
  obra/              # fotos de obra
  images/            # imágenes de servicios y hero
```

## Variables de entorno

| Variable | Descripción |
| --- | --- |
| `NEXT_PUBLIC_GA4_ID` | ID de Google Analytics 4 (formato `G-XXXXXXXXXX`). Si no está definida, GA4 no se carga. |

## Configuración del sitio

Los datos de contacto (WhatsApp, Instagram) viven en [`lib/config.ts`](lib/config.ts) y están marcados con `// EDITAR` donde falta verificar el dato real antes de salir a producción.
