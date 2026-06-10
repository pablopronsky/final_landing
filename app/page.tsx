import { ScrollProgressBar } from '@/components/ui/ScrollProgressBar';
import { WhatsAppFloat } from '@/components/ui/WhatsAppFloat';
import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { TrustBar } from '@/components/sections/TrustBar';
import { Manifiesto } from '@/components/sections/Manifiesto';
import { Protocolo } from '@/components/sections/Protocolo';
import { Practica } from '@/components/sections/Practica';
import { Superficies } from '@/components/sections/Superficies';
import { Faq } from '@/components/sections/Faq';
import { Contacto } from '@/components/sections/Contacto';
import { MobileCta } from '@/components/sections/MobileCta';

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollProgressBar />
      <Header />
      <Hero />
      <TrustBar />
      <Manifiesto />
      <Protocolo />
      <Practica />
      <Superficies />
      <Faq />
      <Contacto />
      <MobileCta />
      <WhatsAppFloat />
    </main>
  );
}
