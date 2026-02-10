// src/app/page.tsx
import { Hero } from "@/components/home/hero";
import { MisticaCards } from "@/components/home/misticaCards";
import { VerseOfDay } from "@/components/home/versOfDay";
import { Testimonials } from "@/components/home/testimonials";
import { FaqSection } from "@/components/home/faqSection";
import { GallerySection } from "@/components/home/gallerySection"; 
import { NextEvent } from "@/components/home/nextEvent"; 

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <Hero />
      <NextEvent />
      <section className="py-20 px-6 relative z-10 bg-background">
         <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12 text-primary uppercase tracking-wider">
              Nuestra Esencia
            </h2>
            <MisticaCards />
         </div>
      </section>
      <GallerySection />
      <VerseOfDay />
      <Testimonials />
      <FaqSection />
    </main>
  );
}