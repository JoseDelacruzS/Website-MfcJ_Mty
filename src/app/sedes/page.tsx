"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Card, CardBody, Button, Chip } from "@heroui/react";
import { MapPin, Phone, User, Navigation } from "lucide-react";
import sedesData from "@/data/sedes.json";
import { Sede } from "@/components/sedes/MapView"; // Asegúrate de tener este import

const MapView = dynamic(() => import("@/components/sedes/MapView"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-white/5 animate-pulse rounded-2xl flex items-center justify-center text-white/50">
      Cargando mapa...
    </div>
  ),
});

export default function SedesPage() {
  const [activeSede, setActiveSede] = useState<number | null>(null);

  // NUEVA FUNCIÓN: Maneja la selección bidireccional
  const handleSedeSelection = (id: number, fromMap: boolean = false) => {
    setActiveSede(id); // Esto hará que el mapa "vuele" a la sede (si diste clic en la lista)

    // Si el clic vino del MAPA, scrolleamos la lista de la izquierda hacia la tarjeta
    if (fromMap) {
      const element = document.getElementById(`tarjeta-sede-${id}`);
      if (element) {
        // block: "center" asegura que la tarjeta quede en medio de la pantalla
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  };

  const openWhatsApp = (phone: string) => {
    window.open(
      `https://wa.me/52${phone}?text=Hola!%20Me%20gustaría%20información%20del%20MFCJ`,
      "_blank",
    );
  };

  const openGoogleMaps = (lat: number, lng: number) => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`,
      "_blank",
    );
  };

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col h-screen overflow-hidden">
      {/* Mantenemos el mismo contenedor, ajustando el padding lateral un poco en móviles */}
      <div className="flex-1 flex flex-col md:flex-row h-[calc(100vh-64px)] overflow-hidden pt-20 px-4 md:px-6">
        {/* PANEL IZQUIERDO (Lista) 
            - En Desktop: Se queda exactamente igual a tu versión (w-1/3, h-full, border-r).
            - En Celular: order-last (pasa abajo) y toma el espacio restante (flex-1).
        */}
        <div className="w-full flex-1 md:h-full md:flex-none md:w-1/3 lg:w-[400px] overflow-y-auto p-4 md:p-6 scrollbar-hide border-white/10 z-10 md:border-r border-t md:border-t-0 order-last md:order-first">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">
              Nuestras Sedes
            </h1>
            <p className="text-white/60 text-sm">
              Encuentra el sector del MFCJ más cercano a ti y contáctanos.
            </p>
          </div>

          <div className="flex flex-col gap-4 pb-12">
            {sedesData.map((sede) => (
              <Card
                key={sede.id}
                id={`tarjeta-sede-${sede.id}`} // <-- LE AGREGAMOS EL ID A LA TARJETA
                className={`bg-card/50 border transition-all ${
                  activeSede === sede.id
                    ? "border-primary shadow-[0_0_15px_rgba(var(--primary),0.3)]"
                    : "border-white/5 hover:border-white/20"
                }`}
              >
                <div
                  // Usamos nuestra nueva función, fromMap en false porque el clic vino de la lista
                  onClick={() => handleSedeSelection(sede.id, false)}
                  className="cursor-pointer h-full w-full"
                >
                  <CardBody className="p-5 gap-3">
                    <div>
                      <Chip
                        size="sm"
                        color="primary"
                        variant="flat"
                        className="mb-2 uppercase text-[10px] font-bold"
                      >
                        {sede.sector}
                      </Chip>
                      <h3 className="text-lg font-bold text-white leading-tight">
                        {sede.parroquia}
                      </h3>
                      <p className="text-sm text-white/60 flex items-start gap-1 mt-1">
                        <MapPin
                          size={14}
                          className="mt-1 shrink-0 text-primary"
                        />
                        {sede.direccion}
                      </p>
                    </div>

                    <div className="bg-black/20 p-3 rounded-lg border border-white/5 mt-2">
                      <p className="text-xs text-white/50 mb-1 flex items-center gap-1">
                        <User size={12} /> Joven en Coordinación
                      </p>
                      <p className="text-sm font-semibold text-white">
                        {sede.coordinadores}
                      </p>
                    </div>

                    <div className="flex gap-2 mt-2">
                      <Button
                        size="sm"
                        color="success"
                        variant="flat"
                        className="flex-1 font-bold"
                        onClick={(e) => {
                          e.stopPropagation();
                          openWhatsApp(sede.telefono);
                        }}
                        startContent={<Phone size={14} />}
                      >
                        WhatsApp
                      </Button>
                      <Button
                        size="sm"
                        color="default"
                        variant="faded"
                        className="flex-1 font-bold"
                        onClick={(e) => {
                          e.stopPropagation();
                          openGoogleMaps(sede.coords[0], sede.coords[1]);
                        }}
                        startContent={<Navigation size={14} />}
                      >
                        Cómo llegar
                      </Button>
                    </div>
                  </CardBody>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* LADO DERECHO: Mapa
            - En Desktop: Se queda exactamente igual (flex-1, h-full, p-4).
            - En Celular: Le quitamos el "hidden", pasa arriba (order-first) y le damos una altura de 35% (h-[35vh]).
        */}
        <div className="w-full h-[35vh] md:h-full md:flex-1 p-2 md:p-4 relative order-first md:order-last z-0">
          <MapView
            sedes={sedesData as unknown as Sede[]}
            activeSede={activeSede}
            // Pasamos la función con fromMap en true, para que haga el scroll en la lista
            onMarkerClick={(id) => handleSedeSelection(id, true)}
          />
        </div>
      </div>
    </main>
  );
}
