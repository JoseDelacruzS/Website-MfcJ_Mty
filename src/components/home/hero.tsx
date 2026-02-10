"use client";

import Image from "next/image";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export const Hero = () => {
  return (
    <section className="relative h-[92vh] w-full flex items-center justify-center overflow-hidden font-sans">
      <div className="absolute inset-0 z-0">
        <Image
          src="/image/hero.jpeg"
          alt="Encuentro Diocesano MFCJ"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center z-20">
        <h4 className="text-2xl text-accent font-bold tracking-[0.2em] uppercase mb-4">
          Movimiento Familiar Cristiano Juvenil
        </h4>

        <div className="my-6">
          <Image
            src="/image/logo.png"
            alt="Logo MFCJ Monterrey"
            width={96}
            height={96}
            className="mx-auto"
          />
        </div>

        <TextGenerateEffect
          words="Caminando juntos, con la mirada puesta en Jesus."
          className="drop-shadow-lg max-w-4xl"
        />

        {/* Subtítulo */}
        <p className="text-gray-200 text-lg md:text-xl mt-6 max-w-2xl font-light">
          El lugar donde tu fe se encuentra con tu comunidad. Únete a la experiencia.
        </p>

        {/* Botones temporales removidos (solicitud) */}
      </div>
    </section>
  );
};