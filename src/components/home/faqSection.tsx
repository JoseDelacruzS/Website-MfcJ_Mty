"use client";

import React from "react";
import { Accordion, AccordionItem, Button } from "@heroui/react";
import { motion } from "framer-motion";
import { MessageCircleQuestion, Plus, Minus } from "lucide-react";

// Datos de las preguntas (puedes editarlos luego)
const faqs = [
  {
    key: "1",
    question: "¿Qué es el Ciclo y quiénes pueden vivirlo?",
    answer:
      "El Ciclo es una experiencia inicial de fin de semana donde desconectas del mundo para conectar contigo mismo y con Dios. Está diseñado para jóvenes solteros de 18 a 25 años (universitarios o trabajadores). ¡No necesitas ser experto en religión!",
  },
  {
    key: "2",
    question: "¿Tiene algún costo unirme?",
    answer:
      "Las reuniones semanales son totalmente gratuitas. Eventos especiales como 'La Pesca' (el retiro de iniciación) o campamentos tienen una cuota de recuperación mínima para cubrir hospedaje y comidas.",
  },
  {
    key: "3",
    question: "¿Es necesario ir a misa todos los domingos?",
    answer:
      "No es un requisito para entrar, pero en el MFCJ fomentamos la vivencia de los sacramentos. Aquí aprenderás a vivir la misa no por obligación, sino por convicción y amor.",
  },
  {
    key: "4",
    question: "¿Qué hacen en las reuniones semanales?",
    answer:
      "¡De todo! Tenemos temas de formación humana y espiritual, dinámicas de integración, momentos de oración, y claro, la famosa 'convivencia' o cena al final. Es un espacio seguro para ser tú mismo.",
  },
];

export const FaqSection = () => {
  return (
    <section className="pt-16 pb-24 bg-background overflow-hidden">
      {/* Decoración de fondo sutil */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-secondary/10 via-background to-background pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* --- COLUMNA IZQUIERDA: Texto y Llamada a la acción --- */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <MessageCircleQuestion className="text-primary" size={24} />
              <span className="text-sm font-bold uppercase tracking-widest text-primary">
                Dudas Comunes
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-secondary dark:text-white mb-6 leading-tight">
              Todo lo que necesitas saber antes de{" "}
              <span className="text-primary">dar el sí.</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Entendemos que dar el primer paso puede generar dudas. Aquí
              respondemos las preguntas más frecuentes de los chavos que, como
              tú, buscan algo más.
            </p>

            <Button
              size="lg"
              className="bg-secondary text-white font-semibold  hover:scale-105 transition-transform"
              radius="full"
              onPress={() => (window.location.href = "/contacto")} // O tu ruta de contacto
            >
              Tengo otra pregunta
            </Button>
          </motion.div>

          {/* --- COLUMNA DERECHA: Acordeón HeroUI --- */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion
              variant="splitted"
              selectionMode="multiple"
              className="px-0"
              itemClasses={{
                base: "group mb-4 bg-white dark:bg-neutral-900 border border-black/5 dark:border-white/10 shadow-sm rounded-2xl transition-all duration-300 hover:border-primary hover:shadow-md",
                title:
                  "font-bold text-secondary dark:text-white text-lg text-left flex-1",

                trigger:
                  "py-4 px-6 data-[hover=true]:bg-transparent focus:outline-none",
                indicator: "text-primary",

                content:
                  "text-muted-foreground px-6 pb-6 text-base leading-relaxed",
              }}
            >
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.key}
                  aria-label={faq.question}
                  title={faq.question}
                  indicator={({ isOpen }) =>
                    isOpen ? <Minus size={20} /> : <Plus size={20} />
                  }
                >
                  {faq.answer}
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
