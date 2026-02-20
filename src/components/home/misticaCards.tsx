"use client";

import { Card, CardHeader, CardBody } from "@heroui/react";
import { BookOpen, HeartHandshake, Flame } from "lucide-react";
import { motion, Variants } from "framer-motion";

const items = [
  {
    title: "Formación Integral",
    icon: <BookOpen size={40} />,
    description: "Adquiere herramientas para crecer en tu fe y liderazgo.",
  },
  {
    title: "Servicio y Apostolado",
    icon: <HeartHandshake size={40} />,
    description: "Ponemos nuestros dones al servicio de los demás.",
  },
  {
    title: "Espiritualidad Viva",
    icon: <Flame size={40} />,
    description: "Un encuentro personal y comunitario con Cristo.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

export const MisticaCards = () => {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {items.map((item, index) => (
        <motion.div key={index} variants={itemVariants}>
          <Card
            className="py-4 bg-secondary shadow-xl hover:scale-105 transition-transform h-full"
            isPressable
          >
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
              <div className="p-4 rounded-full bg-accent/10 text-accent mb-4 shadow-lg shadow-accent/5">
                {item.icon}
              </div>
              <h4 className="font-bold text-xl uppercase text-foreground">
                {item.title}
              </h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2 items-center text-center">
              <p className="text-primary px-4 font-light">{item.description}</p>
            </CardBody>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
};
