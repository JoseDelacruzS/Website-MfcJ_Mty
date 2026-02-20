import React from "react";
import { ResourceLibrary } from "@/components/resources/resourceLibrary"; // Revisa que la ruta y mayúsculas sean correctas
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function RecursosPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col overflow-x-hidden">
      <div className="h-120 w-full rounded-md relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4 relative z-10 text-center -mt-12 md:-mt-20">
          <h1 className="relative z-10 text-4xl md:text-7xl bg-clip-text text-center font-sans font-bold leading-tight">
            Recursos MFCJ
          </h1>
          <p className="text-neutral-400 max-w-lg mx-auto my-4 text-sm md:text-base text-center relative z-10 px-4">
            Descarga manuales, cantorales, logotipos y todo lo que necesitas
            para tu servicio. Una biblioteca digital para facilitar la
            evangelización.
          </p>
        </div>
        <BackgroundBeams
          gradientStart="#ea580c"
          gradientVia="#f97316"
          gradientEnd="#fbbf24"
        />
      </div>
      <ResourceLibrary />

      <section className="py-16 px-6 text-center border-t border-white/10 bg-black/30 mt-12">
        <p className="text-white/60 mb-4 text-sm md:text-base">
          ¿Tienes algún material que quieras compartir con la comunidad?
        </p>
        <a
          href="mailto:medios@mfcjmty.com"
          className="text-primary font-bold text-lg hover:text-orange-400 transition-colors underline decoration-2 underline-offset-4"
        >
          Envíanoslo aquí
        </a>
      </section>
    </main>
  );
}
