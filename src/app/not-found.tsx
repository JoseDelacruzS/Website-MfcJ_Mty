"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { Home, Compass, MapPin } from "lucide-react";

export default function NotFound() {
  return (
    // min-h-screen y centrado absoluto para que ocupe toda la pantalla
    <main className="min-h-screen flex items-center justify-center bg-background p-6 relative overflow-hidden flex-col pt-20">
      <div className="relative z-10 text-center flex flex-col items-center max-w-lg mx-auto mt-[-10vh]">
        {/* Ícono de brújula animado suavemente */}
        <div className="w-20 h-20 md:w-24 md:h-24 bg-card/50 backdrop-blur-xl border border-white/10 rounded-3xl flex items-center justify-center mb-6 shadow-2xl">
          <Compass size={40} className="text-primary" />
        </div>

        {/* Texto 404 Gigante con degradado */}
        <h1 className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-linear-to-b from-white to-white/10 mb-2">
          404
        </h1>

        {/* Mensaje amigable y temático */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          ¡Ups! Te saliste del camino
        </h2>
        <p className="text-muted-foreground text-sm md:text-base mb-10 leading-relaxed px-4">
          La página que estás buscando no existe, fue movida, o tal vez se fue
          de retiro de fin de semana. Regresemos a casa.
        </p>

        {/* Botones de acción usando HeroUI combinados con Next Link */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto px-4">
          <Button
            as={Link}
            href="/"
            color="primary"
            size="lg"
            className="font-bold w-full sm:w-auto text-white"
            startContent={<Home size={18} />}
          >
            Volver al Inicio
          </Button>

          <Button
            as={Link}
            href="/sedes"
            variant="faded"
            color="default"
            size="lg"
            className="font-bold w-full sm:w-auto bg-transparent border-secondary/40 hover:bg-secondary hover:border-secondary"
            startContent={<MapPin size={18} />}
          >
            Buscar un Sector
          </Button>
        </div>
      </div>
    </main>
  );
}
