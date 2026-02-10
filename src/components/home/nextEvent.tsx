"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@heroui/react";
import { CalendarClock, MapPin } from "lucide-react";
import eventsData from "@/data/events-2026.json";

interface TimeLeft {
  dias: number;
  horas: number;
  minutos: number;
  segundos: number;
}

interface EventData {
  id: number;
  title: string;
  date: string;
  displayDate: string;
  category: string;
  description: string;
  endDate?: string;
}

export const NextEvent = () => {
  const [isMounted, setIsMounted] = useState(false);

  const getNextEvent = (): EventData | null => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);

    const upcoming = eventsData
      .filter((e) => new Date(`${e.date}T00:00:00`) >= now)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    return upcoming[0] || null;
  };

  const calculateTimeLeft = (targetDate: number): TimeLeft | null => {
    const difference = targetDate - Date.now();
    if (difference > 0) {
      return {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      };
    }
    return null;
  };

  const [event] = useState<EventData | null>(() => getNextEvent());

  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(() => {
    const next = getNextEvent();
    if (next) {
      return calculateTimeLeft(new Date(`${next.date}T00:00:00`).getTime());
    }
    return null;
  });

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);

    if (!event) return;

    const targetTime = new Date(`${event.date}T00:00:00`).getTime();

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetTime));
    }, 1000);

    return () => clearInterval(timer);
  }, [event]);

  if (!isMounted || !event) return null;

  const timerComponents = timeLeft
    ? Object.keys(timeLeft).map((interval) => {
        const value = timeLeft[interval as keyof TimeLeft];
        return (
          <div
            key={interval}
            className="flex flex-col items-center mx-2 md:mx-4"
          >
            <span className="text-2xl md:text-4xl font-bold text-white font-mono">
              {value < 10 ? `0${value}` : value}
            </span>
            <span className="text-[10px] md:text-xs uppercase tracking-widest text-white/60">
              {interval}
            </span>
          </div>
        );
      })
    : null;

  return (
    <section className="relative bg-secondary py-20 border-y border-white/10 overflow-hidden mt-20">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>

      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
        {/* Info del Evento */}
        <div className="text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
            <span className="bg-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-white">
              {event.category || "Próximo Evento"}
            </span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
            {event.title}
          </h3>
          <div className="flex flex-col md:flex-row items-center gap-4 text-white/80 text-sm">
            <span className="flex items-center gap-1">
              <CalendarClock size={16} /> {event.displayDate}
            </span>
            <span className="hidden md:block">•</span>
            <span className="flex items-center gap-1">
              <MapPin size={16} /> Monterrey, N.L.
            </span>
          </div>
          <p className="text-white/60 text-sm mt-2 max-w-md mx-auto lg:mx-0">
            {event.description}
          </p>
        </div>

        {/* El Contador */}
        <div className="flex items-center bg-white/5 rounded-2xl p-4 md:p-6 border border-white/10 backdrop-blur-md min-h-24">
          {timeLeft ? (
            timerComponents
          ) : (
            <span className="text-white font-bold text-xl animate-pulse">
              ¡El evento es hoy! 🎉
            </span>
          )}
        </div>

        {/* Botón CTA */}
        <div>
          <Button
            size="lg"
            className="bg-white text-secondary font-bold shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 transition-transform"
            radius="full"
          >
            Más Información
          </Button>
        </div>
      </div>
    </section>
  );
};
