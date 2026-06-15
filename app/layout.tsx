import type { Metadata } from 'next';
import { Montserrat, Cormorant_Garamond, IBM_Plex_Sans, Courier_Prime } from 'next/font/google';
import { MotionConfig } from 'motion/react';
import { GoogleAnalytics } from '@next/third-parties/google';
import { SITE } from '@/lib/config';
import './globals.css';

// Display geométrica del brand book para titulares (H1/H2/H3, eyebrows y labels).
// El cuerpo sigue en IBM Plex Sans (ver --font-sans), sin cambios.
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '800'],
  variable: '--font-montserrat',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-ibm-plex-sans',
});

const courierPrime = Courier_Prime({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-courier-prime',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.siteUrl),
  title: 'Cota Cero — Pisos, Revestimientos y Terminaciones | City Bell · La Plata',
  description: 'Pisos vinílicos, flotantes, madera, decks y revestimientos con instalación bajo protocolo. No vendemos pisos: controlamos cómo se instalan, del sustrato a la última terminación. City Bell, Gonnet y La Plata.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Cota Cero — Pisos, Revestimientos y Terminaciones',
    description: 'Pisos vinílicos, flotantes, madera, decks y revestimientos con instalación bajo protocolo. No vendemos pisos: controlamos cómo se instalan.',
    url: SITE.siteUrl,
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cota Cero — Pisos, Revestimientos y Terminaciones',
    description: 'Pisos vinílicos, flotantes, madera, decks y revestimientos con instalación bajo protocolo. No vendemos pisos: controlamos cómo se instalan.',
  },
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Cota Cero',
  image: `${SITE.siteUrl}/images/hero.webp`,
  url: SITE.siteUrl,
  telephone: `+${SITE.whatsappNumber}`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'City Bell',
    addressRegion: 'Buenos Aires',
    addressCountry: 'AR',
  },
  areaServed: ['City Bell', 'Gonnet', 'La Plata'],
  priceRange: '$$',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${montserrat.variable} ${cormorant.variable} ${ibmPlexSans.variable} ${courierPrime.variable}`}>
      <body className="selection:bg-cobre selection:text-negro" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
        {SITE.ga4Id && <GoogleAnalytics gaId={SITE.ga4Id} />}
      </body>
    </html>
  );
}