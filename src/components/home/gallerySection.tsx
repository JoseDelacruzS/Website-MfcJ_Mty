"use client";
import React from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { motion } from "framer-motion";

export const GallerySection = () => {
  return (
    <section className="py-24 bg-background relative" id="galeria">
      <div className="container mx-auto px-6">
        
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 space-y-4"
        >
             <h2 className="text-4xl md:text-5xl font-bold text-secondary dark:text-white">
                Momentos <span className="text-primary">Eternos</span>
             </h2>
             <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
             <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light italic">
                &quot;No recordamos días, recordamos los momentos donde Dios tocó nuestro corazón.&quot;
             </p>
        </motion.div>

        {/* --- GALERÍA BENTO --- */}
        {/* Altura ajustada para que se vea bien en desktop */}
        <div className="h-screen py-4 w-full">
          <LayoutGrid cards={cards} />
        </div>
      </div>
    </section>
  );
};

// --- CONTENIDO DE LAS TARJETAS ---
// Aquí defines el texto que sale cuando le pican a la foto
const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-2xl md:text-4xl text-white">La Pesca 2025</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        80 jóvenes valientes desconectándose del mundo para encontrarse a sí mismos.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-2xl md:text-4xl text-white">Misiones Semana Santa</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Llevando esperanza a las comunidades. Servir es amar.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-2xl md:text-4xl text-white">Noches de Adoración</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Momentos íntimos frente al Santísimo. Donde recargamos fuerzas.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-2xl md:text-4xl text-white">Posada MFCJ</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Celebrando en familia. Porque la santidad también es alegría.
      </p>
    </div>
  );
};

// --- CONFIGURACIÓN DE FOTOS ---
// col-span-1 = Cuadrado pequeño
// md:col-span-2 = Rectángulo ancho (Horizontal)
// row-span-2 (si lo agregas al css) = Rectángulo alto (Vertical)

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2", // FOTO GRANDE PRINCIPAL
    thumbnail:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=3270&auto=format&fit=crop", 
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=3270&auto=format&fit=crop",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=3270&auto=format&fit=crop",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2", // FOTO GRANDE FINAL
    thumbnail:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=3269&auto=format&fit=crop",
  },
];