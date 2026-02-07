// src/app/page.tsx
import { Hero } from "@/components/home/hero";
import { MisticaCards } from "@/components/home/misticaCards";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <Hero />
      <section className="py-20 px-6 relative z-10 bg-background">
         <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12 text-primary uppercase tracking-wider">
              Nuestra Esencia
            </h2>
            <MisticaCards />
         </div>
      </section>
      <section className="h-[50vh] flex items-center justify-center bg-muted/10">
        <p className="text-muted">Próximamente: Versículo y Timeline...</p>
      </section>

    </main>
  );
}