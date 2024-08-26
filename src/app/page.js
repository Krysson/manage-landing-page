import CTA from '@/components/cta/CTA';
import Feature from '@/components/feature/Feature';
import Hero from '@/components/hero/Hero';
import Testimonials from '@/components/testimonials/Testimonials';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <Hero />
      <Feature />
      <Testimonials />
      <CTA />
    </main>
  );
}
