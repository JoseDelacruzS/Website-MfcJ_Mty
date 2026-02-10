import React from "react";
import eventsData from "@/data/events-2026.json";
import { Calendar, CalendarPlus, MapPin, ArrowRight } from "lucide-react"; // Importamos CalendarPlus

interface Event {
  id: number;
  title: string;
  date: string;
  endDate?: string;
  displayDate: string;
  category: string;
  description: string;
}

const getCategoryStyles = (category: string) => {
  switch (category) {
    case "retiro":
      return {
        bg: "bg-purple-500/20",
        text: "text-purple-500",
        border: "border-purple-500/50",
        dot: "bg-purple-500",
      };
    case "servicio":
      return {
        bg: "bg-emerald-500/20",
        text: "text-emerald-500",
        border: "border-emerald-500/50",
        dot: "bg-emerald-500",
      };
    case "espiritual":
      return {
        bg: "bg-blue-500/20",
        text: "text-blue-500",
        border: "border-blue-500/50",
        dot: "bg-blue-500",
      };
    case "formacion":
      return {
        bg: "bg-amber-500/20",
        text: "text-amber-500",
        border: "border-amber-500/50",
        dot: "bg-amber-500",
      };
    case "nacional":
      return {
        bg: "bg-red-500/20",
        text: "text-red-500",
        border: "border-red-500/50",
        dot: "bg-red-500",
      };
    case "social":
      return {
        bg: "bg-pink-500/20",
        text: "text-pink-500",
        border: "border-pink-500/50",
        dot: "bg-pink-500",
      };
    case "integracion":
      return {
        bg: "bg-orange-500/20",
        text: "text-orange-500",
        border: "border-orange-500/50",
        dot: "bg-orange-500",
      };
    default:
      return {
        bg: "bg-gray-500/20",
        text: "text-gray-400",
        border: "border-gray-500/50",
        dot: "bg-gray-500",
      };
  }
};

export const Timeline = () => {
  const eventsByMonth = eventsData.reduce(
    (groups, event) => {
      const date = new Date(`${event.date}T00:00:00`);
      const monthKey = date.toLocaleString("es-MX", {
        month: "long",
        year: "numeric",
      });

      if (!groups[monthKey]) {
        groups[monthKey] = [];
      }
      groups[monthKey].push(event);
      return groups;
    },
    {} as Record<string, Event[]>,
  );

  const getGoogleCalendarUrl = (event: Event) => {
    const startDate = event.date.replace(/-/g, "");
    const endDate = event.endDate ? event.endDate.replace(/-/g, "") : startDate;

    const title = encodeURIComponent(event.title);
    const details = encodeURIComponent(event.description);
    const location = encodeURIComponent("Monterrey, NL");

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}&location=${location}`;
  };

  return (
    <div className="relative max-w-3xl mx-auto pb-20">
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-border to-transparent" />

      {Object.entries(eventsByMonth).map(([month, events], groupIndex) => (
        <div key={month} className="mb-12 relative z-10">
          <div className="flex justify-center mb-8 sticky top-24 z-20">
            <span className="bg-background border border-border px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest text-muted-foreground shadow-sm">
              {month}
            </span>
          </div>

          <div className="space-y-8">
            {events.map((event, index) => {
              const styles = getCategoryStyles(event.category);
              const isEven = index % 2 === 0;
              const googleUrl = getGoogleCalendarUrl(event);

              return (
                <div
                  key={event.id}
                  className="relative flex flex-col md:flex-row items-center group"
                >
                  <div
                    className={`absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-background ${styles.dot} shadow-[0_0_10px_rgba(0,0,0,0.2)] z-10`}
                  />

                  {/* VISTA ESCRITORIO (Lado Izquierdo o Derecho según paridad) */}
                  <div
                    className={`w-full md:w-1/2 pl-20 md:pl-0 md:pr-12 ${isEven ? "md:text-right" : "md:order-last md:pl-12 md:text-left"}`}
                  >
                    <div className="hidden md:block">
                      <span
                        className={`text-sm font-bold uppercase ${styles.text} mb-1 block`}
                      >
                        {event.category}
                      </span>
                      <h3 className="text-xl font-bold text-foreground">
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-2">
                        {event.description}
                      </p>

                      {/* Botón Agregar (Desktop) */}
                      <a
                        href={googleUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 mt-3 text-xs font-bold ${styles.text} hover:underline cursor-pointer`}
                      >
                        <CalendarPlus size={14} />
                        Agregar al calendario
                      </a>
                    </div>
                  </div>

                  {/* VISTA MÓVIL (Tarjeta principal) */}
                  <div
                    className={`w-full md:w-1/2 pl-16 md:pl-12 ${isEven ? "md:order-last md:text-left" : "md:pr-12 md:text-right"}`}
                  >
                    <div
                      className={`
                      bg-card/50 backdrop-blur-sm border border-white/5 p-5 rounded-2xl hover:border-primary/30 transition-all hover:shadow-lg
                      md:bg-transparent md:border-none md:p-0 md:hover:shadow-none
                    `}
                    >
                      <div className="md:hidden mb-2 flex justify-between items-start">
                        <span
                          className={`text-[10px] font-bold uppercase px-2 py-1 rounded border ${styles.bg} ${styles.text} ${styles.border}`}
                        >
                          {event.category}
                        </span>

                        {/* Botón Agregar (Móvil - Icono pequeño arriba a la derecha) */}
                        <a
                          href={googleUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/60 hover:text-primary transition-colors p-1"
                          aria-label="Agregar a calendario"
                        >
                          <CalendarPlus size={18} />
                        </a>
                      </div>

                      <div className="flex items-center gap-2 text-primary font-bold md:justify-end md:flex-row-reverse mb-1">
                        <Calendar size={16} />
                        <span>{event.displayDate}</span>
                      </div>

                      <div className="md:hidden">
                        <h3 className="text-lg font-bold text-white mt-1">
                          {event.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};
