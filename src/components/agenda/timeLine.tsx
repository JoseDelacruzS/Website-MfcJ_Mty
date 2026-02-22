"use client";
import React, { useState } from "react";
import eventsData from "@/data/events-2026.json";
import { Calendar as CalendarIcon, CalendarPlus, Clock } from "lucide-react";
import { Calendar } from "@heroui/react";
import {
  today,
  getLocalTimeZone,
  CalendarDate,
  parseDate,
} from "@internationalized/date";

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
  const [selectedDate, setSelectedDate] = useState<CalendarDate>(
    today(getLocalTimeZone()),
  );
  const [focusedDate, setFocusedDate] = useState<CalendarDate>(
    today(getLocalTimeZone()),
  );

  const eventsByMonth = eventsData.reduce(
    (groups, event) => {
      const date = new Date(`${event.date}T00:00:00`);
      const monthKey = date.toLocaleString("es-MX", {
        month: "long",
        year: "numeric",
      });
      if (!groups[monthKey]) groups[monthKey] = [];
      groups[monthKey].push(event);
      return groups;
    },
    {} as Record<string, Event[]>,
  );

  const focusedYearMonth = `${focusedDate.year}-${String(focusedDate.month).padStart(2, "0")}`;
  const eventsInFocusedMonth = eventsData.filter((event) =>
    event.date.startsWith(focusedYearMonth),
  );

  const handleDateChange = (date: CalendarDate) => {
    setSelectedDate(date);
    const dateString = date.toString();
    const eventOnDate = eventsData.find((e) => e.date === dateString);

    if (eventOnDate) {
      const element = document.getElementById(`event-${eventOnDate.id}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  };

  const getGoogleCalendarUrl = (event: Event) => {
    const startDate = event.date.replace(/-/g, "");
    const endDate = event.endDate ? event.endDate.replace(/-/g, "") : startDate;
    const title = encodeURIComponent(event.title);
    const details = encodeURIComponent(event.description);
    const location = encodeURIComponent("Monterrey, NL");
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}&location=${location}`;
  };

  const formattedFocusedMonth = new Date(
    focusedDate.year,
    focusedDate.month - 1,
  ).toLocaleDateString("es-MX", {
    month: "long",
    year: "numeric",
  });

  return (
    <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto pb-20">
      {/* --- COLUMNA IZQUIERDA: LÍNEA DE TIEMPO --- */}
      <div className="flex-1 relative order-last lg:order-first">
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/50 via-border to-transparent" />

        {Object.entries(eventsByMonth).map(([month, events]) => (
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
                const isActive = selectedDate.toString() === event.date;

                return (
                  <div
                    key={event.id}
                    id={`event-${event.id}`}
                    className={`relative flex flex-col md:flex-row items-center group transition-all duration-500 ${isActive ? "scale-[1.02]" : "opacity-90 hover:opacity-100"}`}
                  >
                    <div
                      className={`absolute left-8 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-4 border-background transition-colors duration-300 ${isActive ? "bg-primary border-primary/20 shadow-[0_0_15px_rgba(var(--primary),0.5)]" : styles.dot + " shadow-[0_0_10px_rgba(0,0,0,0.2)]"} z-10`}
                    />

                    <div
                      className={`w-full md:w-1/2 pl-20 md:pl-0 md:pr-12 ${isEven ? "md:text-right" : "md:order-last md:pl-12 md:text-left"}`}
                    >
                      <div className="hidden md:block">
                        <span
                          className={`text-sm font-bold uppercase ${styles.text} mb-1 block`}
                        >
                          {event.category}
                        </span>
                        <h3
                          className={`text-xl font-bold ${isActive ? "text-primary" : "text-foreground"} transition-colors`}
                        >
                          {event.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mt-2">
                          {event.description}
                        </p>
                        <a
                          href={googleUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 mt-3 text-xs font-bold ${styles.text} hover:underline cursor-pointer`}
                        >
                          <CalendarPlus size={14} /> Agregar al calendario
                        </a>
                      </div>
                    </div>

                    <div
                      className={`w-full md:w-1/2 pl-16 md:pl-12 ${isEven ? "md:order-last md:text-left" : "md:pr-12 md:text-right"}`}
                    >
                      <div
                        onClick={() => {
                          handleDateChange(parseDate(event.date));
                          // Al dar clic, hacemos que el calendario viaje a ese mes automáticamente
                          setFocusedDate(parseDate(event.date));
                        }}
                        className={`cursor-pointer bg-card/50 backdrop-blur-sm border transition-all duration-300 p-5 rounded-2xl md:bg-transparent md:border-none md:p-0 md:hover:shadow-none
                          ${isActive ? "border-primary shadow-[0_0_20px_rgba(var(--primary),0.2)]" : "border-white/5 hover:border-primary/30 hover:shadow-lg"}
                        `}
                      >
                        <div className="md:hidden mb-2 flex justify-between items-start">
                          <span
                            className={`text-[10px] font-bold uppercase px-2 py-1 rounded border ${styles.bg} ${styles.text} ${styles.border}`}
                          >
                            {event.category}
                          </span>
                          <a
                            href={googleUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/60 hover:text-primary transition-colors p-1"
                          >
                            <CalendarPlus size={18} />
                          </a>
                        </div>
                        <div
                          className={`flex items-center gap-2 font-bold md:justify-end md:flex-row-reverse mb-1 ${isActive ? "text-primary" : "text-primary/70"}`}
                        >
                          <CalendarIcon size={16} />
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

      {/* --- COLUMNA DERECHA: CALENDARIO Y DETALLES DEL MES --- */}
      <div className="w-full lg:w-[400px] shrink-0 relative order-first lg:order-last">
        <div className="sticky top-24 flex flex-col gap-6">
          <div className="bg-card/40 backdrop-blur-xl border border-white/10 p-2 md:p-8 rounded-3xl shadow-2xl w-full flex flex-col items-center">
            <Calendar
              aria-label="Calendario de Eventos"
              value={selectedDate}
              onChange={handleDateChange}
              focusedValue={focusedDate}
              onFocusChange={setFocusedDate}
              showMonthAndYearPickers
              classNames={{
                gridHeaderRow: "w-full !bg-transparent max-w-full shadow-none ",
                header: "w-full !bg-transparent max-w-full shadow-none ",
                base: "w-full !bg-transparent max-w-full shadow-none ",
                content: "w-full",
                headerWrapper:
                  "w-full pt-2 pb-6 flex justify-between items-center capitalize ",
                title: "text-xl font-bold capitalize ",
                gridWrapper: "w-full ",
                gridHeaderCell:
                  "capitalize text-xs text-white/60 font-medium pb-4 w-full ",
                cell: "text-center py-1 md:py-2 ",
                cellButton:
                  "w-10 h-10 md:w-12 md:h-12 mx-auto text-sm font-medium hover:bg-white/10 data-[selected=true]:bg-primary data-[selected=true]:text-primary-foreground data-[selected=true]:shadow-[0_0_15px_rgba(var(--primary),0.5)] data-[today=true]:border-2 data-[today=true]:border-primary data-[selected=false]:data-[today=true]:text-primary rounded-md transition-all",
              }}
            />
          </div>

          <div className="bg-card/40 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-2xl min-h-[150px]">
            <h3 className="text-lg font-bold text-white capitalize mb-4 border-b border-white/10 pb-4 flex items-center gap-2">
              <CalendarIcon className="text-primary" size={20} />
              Eventos de {formattedFocusedMonth}
            </h3>

            {eventsInFocusedMonth.length > 0 ? (
              <div className="space-y-3 max-h-[400px] overflow-y-auto scrollbar-hide pr-1">
                {eventsInFocusedMonth.map((event) => {
                  const styles = getCategoryStyles(event.category);
                  const isSelectedEvent =
                    selectedDate.toString() === event.date;

                  return (
                    <div
                      key={`month-detail-${event.id}`}
                      onClick={() => handleDateChange(parseDate(event.date))}
                      className={`cursor-pointer p-4 rounded-2xl border transition-all duration-300 flex flex-col gap-2
                        ${isSelectedEvent ? "bg-primary/10 border-primary/30" : "bg-black/20 border-white/5 hover:bg-white/5"}
                      `}
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span
                            className={`w-2.5 h-2.5 rounded-full ${styles.dot}`}
                          ></span>
                          <span
                            className={`text-[10px] font-bold uppercase tracking-wider ${styles.text}`}
                          >
                            {event.category}
                          </span>
                        </div>
                        <span className="text-xs font-bold text-white/50">
                          {event.displayDate}
                        </span>
                      </div>
                      <h4
                        className={`font-bold ${isSelectedEvent ? "text-primary" : "text-white"}`}
                      >
                        {event.title}
                      </h4>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-white/40 py-8 opacity-70">
                <Clock size={40} className="mb-3" />
                <p className="text-sm italic text-center">
                  Mes libre.
                  <br />
                  ¡Aprovecha para descansar!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
