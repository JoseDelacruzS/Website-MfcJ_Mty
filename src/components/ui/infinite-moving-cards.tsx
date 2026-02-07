"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState, useCallback, useRef } from "react";
import { Avatar } from "@heroui/react";
import { Quote } from "lucide-react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  // --- LÓGICA DE ANIMACIÓN (INTACTA) ---
  const getDirection = useCallback(() => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  }, [direction]);

  const getSpeed = useCallback(() => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  }, [speed]);

  const addAnimation = useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const existingItems = Array.from(scrollerRef.current.children);

      // Evitamos clonar si ya existen más elementos de los originales
      if (scrollerRef.current.children.length > items.length) {
        getDirection();
        getSpeed();
        setStart(true);
        return;
      }

      existingItems.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }, [getDirection, getSpeed, items.length]);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);

  // --- RENDERIZADO (DISEÑO MEJORADO) ---
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-6 py-8", // Más gap y padding vertical
          start && "animate-scroll",
          pauseOnHover && "hover:paused",
        )}
      >
        {items.map((item, idx) => (
          <li
            key={`${item.name}-${idx}`}
            className="relative w-[350px] md:w-[450px] shrink-0 rounded-3xl p-1 group"
          >
            {/* Contenedor Interior de la Tarjeta */}
            <div className="relative h-full w-full rounded-[20px] bg-secondary/90 backdrop-blur-xl border border-white/10 p-6 md:p-8 flex flex-col justify-between overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:border-primary">
              <Quote
                className="absolute -right-4 -top-4 text-white/5 rotate-12 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-110"
                size={120}
                fill="currentColor"
              />

              {/* Texto de la Cita */}
              <blockquote className="relative z-10 mb-6">
                <p className="text-base md:text-lg leading-relaxed font-light text-gray-200 italic tracking-wide">
                  &quot;{item.quote}&quot;
                </p>
              </blockquote>

              {/* Pie de la tarjeta: Avatar e Info */}
              <div className="relative z-10 flex items-center gap-4 mt-auto border-t border-white/10 pt-4">
                {/* 1. AVATAR DE HERO UI */}
                <Avatar
                  isBordered
                  name={item.name} // Genera iniciales si no hay src
                  src={`https://i.pravatar.cc/150?u=${item.name}`} // Descomenta si quieres fotos random reales
                  className="w-12 h-12 text-lg font-bold text-secondary bg-white"
                />

                <div className="flex flex-col">
                  <span className="text-sm md:text-base font-bold text-primary uppercase tracking-wider">
                    {item.name}
                  </span>
                  <span className="text-xs text-gray-400 font-medium">
                    {item.title}
                  </span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
