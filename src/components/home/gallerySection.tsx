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
            &quot;No recordamos días, recordamos los momentos donde Dios tocó
            nuestro corazón.&quot;
          </p>
        </motion.div>
        <div className="h-screen py-4 w-full">
          <LayoutGrid cards={cards} />
        </div>
      </div>
    </section>
  );
};

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-2xl md:text-4xl text-white">
        Peregrinacion 2023
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Todoa la diocesis reunida para alabar a nuestra Madre Maria de
        Guadalupe.
      </p>
    </div>
  );
};
const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-2xl md:text-4xl text-white">
        Equipo de Servicio del Kerigma 2024
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Jóvenes entregados al servicio de Dios y de los hermanos.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-2xl md:text-4xl text-white">
        MFCeciada 2024
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Evento deportivo y cultural en Saltillo.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-2xl md:text-4xl text-white">
        Reunion de Bloque Regional
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Equipos de diferentes diócesis reunidos para compartir y crecer en la
        fe.
      </p>
    </div>
  );
};
const SkeletonFive = () => {
  return (
    <div>
      <p className="font-bold text-2xl md:text-4xl text-white">
        Viviendo al maximo la MFCiada 2024
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Momentos de alegría, convivencia y crecimiento en la fe.
      </p>
    </div>
  );
};
const SkeletonSix = () => {
  return (
    <div>
      <p className="font-bold text-2xl md:text-4xl text-white">
        Posada MFCJ 2023
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Celebrando en familia. Porque la santidad también es alegría.
      </p>
    </div>
  );
};
const SkeletonSeven = () => {
  return (
    <div>
      <p className="font-bold text-2xl md:text-4xl text-white">
        Misiones de Semana Santa
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Llevando esperanza a las comunidades. Servir es amar.
      </p>
    </div>
  );
};
const SkeletonEight = () => {
  return (
    <div>
      <p className="font-bold text-2xl md:text-4xl text-white">
        Misa de Inicio de Ciclo
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Iniciando un nuevo ciclo de servicio y evangelización.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "/image/ciclo/foto-1.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "/image/ciclo/foto-2.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "/image/ciclo/foto-3.jpg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: "/image/ciclo/foto-4.jpg",
  },
  {
    id: 5,
    content: <SkeletonFive />,
    className: "col-span-1",
    thumbnail: "/image/ciclo/foto-5.jpg",
  },
  {
    id: 6,
    content: <SkeletonSix />,
    className: "md:col-span-2",
    thumbnail: "/image/ciclo/foto-6.jpg",
  },
  {
    id: 7,
    content: <SkeletonSeven />,
    className: "md:col-span-2",
    thumbnail: "/image/ciclo/foto-9.jpg",
  },
  {
    id: 8,
    content: <SkeletonEight />,
    className: "col-span-1",
    thumbnail: "/image/ciclo/foto-8.jpg",
  },
];
