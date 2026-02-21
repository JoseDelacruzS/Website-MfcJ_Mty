"use client";

import React from "react";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

import { LayoutTextFlip } from "@/components/ui/layout-text-flip";

const testimonials = [
  {
    id: 1,
    quote:
      "Tengo 6 años en MFC, donde he crecido mucho en mi fe y en el servicio. Hoy soy equipera y recientemente coordinadora, un llamado que recibo con alegría. En mi parroquia María Reina de la Paz también sirvo como acólita los domingos por la tarde, entregando con amor mi tiempo a Dios.",
    name: "Dania Gonzalez",
    title: "Joven Coordinadora",
  },
  {
    id: 2,
    quote:
      "Mi experiencia en el MFC ha sido muy significativa. Desde pequeña crecí en la Iglesia gracias a mis abuelos, y ahí encontré familias que me acogieron como una hija. Eso me enseñó que no estoy sola y que, con el apoyo correcto, sí puedo salir adelante.",
    name: "Yamileth Hernandez",
    title: "Coordinadora de Jóvenes",
  },
  {
    id: 3,
    quote:
      "Increíble cómo Dios usa estos espacios para hablarnos. ¡El Atrio Digital está quedando de lujo!",
    name: "Diego",
    title: "Equipo de Medios",
  },
  {
    id: 4,
    quote:
      "Ser parte de esta comunidad me ha dado la fuerza para enfrentar los retos de la facultad.",
    name: "Sofía R.",
    title: "Joven Activa",
  },
];

export const Testimonials = () => {
  return (
    <section className="relative py-24 overflow-hidden ">
      <div className="container relative z-10 mx-auto px-6">
        {/* Título con animación */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          {/* Badge pequeño arriba */}
          <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary text-xs font-bold tracking-widest uppercase mb-4 border border-secondary/20">
            Testimonios
          </span>
          <motion.div className="relative mx-4 my-4 flex flex-col items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row">
            <LayoutTextFlip
              text="Voces de nuestros"
              words={["hermanos", "amigos", "familiares", "compañeros"]}
            />
          </motion.div>

          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            El MFCJ no son solo eventos, son historias de transformación real.
            <br className="hidden md:block" /> Descubre lo que los jóvenes dicen
            de su experiencia.
          </p>
        </motion.div>
        <div className="flex flex-col antialiased items-center justify-center relative">
          <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="slow"
            pauseOnHover={true}
          />
        </div>
      </div>
    </section>
  );
};
