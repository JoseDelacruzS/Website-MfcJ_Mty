"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export const LayoutTextFlip = ({
  text = "Voces de nuestros",
  words = ["hermanos", "amigos", "familias", "hijos"],
  duration = 3000,
  className,
}: {
  text?: string;
  words?: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [duration, words.length]);

  return (
    <div className={cn("flex flex-col sm:flex-row items-center justify-center gap-3", className)}>
      {/* Texto Estático (Azul) */}
      <motion.span
        layoutId="subtext"
        className="text-4xl md:text-5xl font-bold tracking-tight text-secondary dark:text-white"
      >
        {text}
      </motion.span>

      {/* Texto Cambiante (Etiqueta Naranja) */}
      <motion.div
        layout
        className="relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-primary px-4 py-2 shadow-lg shadow-primary/20"
      >
        <AnimatePresence mode="popLayout">
          <motion.span
            key={words[currentIndex]} // Usamos la palabra como key
            initial={{ y: 40, opacity: 0, filter: "blur(1px)" }}
            animate={{
              y: 0,
              opacity: 1,
              filter: "blur(0px)",
            }}
            exit={{ y: -40, opacity: 0, filter: "blur(1px)" }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              duration: 0.6,
            }}
            className="inline-block whitespace-nowrap text-4xl md:text-5xl font-bold tracking-tight text-white"
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};