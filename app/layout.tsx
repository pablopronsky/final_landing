import type { Metadata } from 'next';
import { Barlow_Condensed, Cormorant_Garamond, Barlow, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-barlow-condensed',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
});

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-barlow',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--font-ibm-plex',
});

export const metadata: Metadata = {
  title: 'Cota Cero — Pisos, Revestimientos y Terminaciones | City Bell · La Plata',
  description: 'Pisos vinílicos, flotantes, madera, decks y revestimientos con instalación bajo protocolo. No vendemos pisos: controlamos cómo se instalan, del sustrato a la última terminación. City Bell, Gonnet y La Plata.',
  openGraph: {
    title: 'Cota Cero — Pisos, Revestimientos y Terminaciones',
    description: 'Pisos vinílicos, flotantes, madera, decks y revestimientos con instalación bajo protocolo. No vendemos pisos: controlamos cómo se instalan.',
    locale: 'es_AR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${barlowCondensed.variable} ${cormorant.variable} ${barlow.variable} ${ibmPlexMono.variable}`}>
      <body className="bg-[#1E1E20] text-[#ECE5D6] selection:bg-[#B06F4E] selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}