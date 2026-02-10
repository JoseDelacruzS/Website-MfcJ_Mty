"use client";

import { useBibleVerse } from "@/lib/hooks/use-bible-verse";
import { Skeleton, Button } from "@heroui/react";
import { Share2, Quote } from "lucide-react"; // Importamos Quote aquí
import { motion } from "framer-motion";

export const VerseOfDay = () => {
  const { verse, loading } = useBibleVerse();

  return (
    <section className="py-16 flex items-center justify-center overflow-hidden bg-secondary">

      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none mix-blend-overlay"></div>

      <div className="relative z-10 w-full max-w-4xl px-6 text-center">
        {/* Badge Superior */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-6"
        >
          <span className="bg-white/5 backdrop-blur-sm text-white/80 px-5 py-1.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] border border-white/10 shadow-lg">
            Alimento para el Alma
          </span>
        </motion.div>

        {loading ? (
          <div className="space-y-6 max-w-2xl mx-auto mt-12">
            <Skeleton className="h-4 w-full rounded-full bg-white/5" />
            <Skeleton className="h-4 w-5/6 mx-auto rounded-full bg-white/5" />
            <Skeleton className="h-4 w-4/6 mx-auto rounded-full bg-white/5" />
            <Skeleton className="h-3 w-24 mx-auto rounded-full mt-8 bg-primary/20" />
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            {/* --- 2. COMILLAS COMO MARCA DE AGUA --- */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-white/5 pointer-events-none select-none">
              <Quote size={180} fill="currentColor" />
            </div>

            {/* Texto del Versículo */}
            <h2 className="relative text-2xl md:text-4xl lg:text-5xl font-serif leading-relaxed text-white drop-shadow-sm italic">
              &quot;{verse?.text.trim()}&quot;
            </h2>

            {/* Referencia */}
            <div className="mt-8 flex flex-col items-center gap-2">
              <div className="h-[1px] w-12 bg-primary/50 mb-2"></div>
              <p className="text-lg font-medium text-primary tracking-widest uppercase">
                {verse?.reference}
              </p>
            </div>

            {/* Botón Minimalista */}
            <div className="mt-10">
              <Button
                variant="light"
                className="text-white/60 hover:text-white hover:bg-white/5 transition-all font-medium uppercase tracking-wider text-xs"
                startContent={<Share2 size={14} />}
                radius="full"
                size="sm"
                onPress={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: "Versículo del Día - MFCJ",
                      text: `"${verse?.text}" - ${verse?.reference}`,
                      url: window.location.href,
                    });
                  }
                }}
              >
                Compartir
              </Button>
            </div>
          </motion.div>
        )}
      </div>

      {/* Degradado inferior para suavizar la unión con la siguiente sección */}
      <div className="absolute bottom-0 w-full h-32 bg-linear-to-t from-background via-background/50 to-transparent pointer-events-none" />
    </section>
  );
};
