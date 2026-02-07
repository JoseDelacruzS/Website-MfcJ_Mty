"use client";
import { Card, CardHeader, CardBody } from "@heroui/react";
import { BookOpen, HeartHandshake, Flame } from "lucide-react";

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

export const MisticaCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {items.map((item, index) => (
        <Card 
            key={index} 
            className="py-4 bg-card shadow-xl hover:scale-105 transition-transform"
            isPressable
        >
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
            <div className="p-4 rounded-full bg-accent/10 text-accent mb-4 shadow-lg shadow-accent/5">
                {item.icon}
            </div>
            <h4 className="font-bold text-xl uppercase">{item.title}</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2 items-center text-center">
            <p className="text-primary px-4 font-light">
                {item.description}
            </p>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};