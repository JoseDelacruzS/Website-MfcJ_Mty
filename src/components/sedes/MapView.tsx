"use client";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

export interface Sede {
  id: number;
  parroquia: string;
  sector: string;
  direccion: string;
  coordinadores: string;
  telefono: string;
  coords: [number, number];
  colors?: string[];
}

const createCustomIcon = (colors?: string[]) => {
  const color1 = colors?.[0] || "#ea580c";
  const color2 = colors?.[1] || color1;
  const gradientId = `grad-${Math.random().toString(36).substring(7)}`;

  const svgIcon = `
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${color1}" />
          <stop offset="100%" stop-color="${color2}" />
        </linearGradient>
        <filter id="shadow">
          <feDropShadow dx="0" dy="6" stdDeviation="1" flood-color="#000" flood-opacity="0.2"/>
        </filter>
      </defs>
      <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z" fill="url(#${gradientId})" filter="url(#shadow)"/>
      <path d="M12 6v7m-2.5-4h5" stroke="white" stroke-width="2" stroke-linecap="round"/>
    </svg>
  `;

  return L.divIcon({
    className: "bg-transparent border-none",
    html: svgIcon,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -35],
  });
};

function MapController({
  sedes,
  activeSede,
}: {
  sedes: Sede[];
  activeSede: number | null;
}) {
  const map = useMap();

  useEffect(() => {
    if (activeSede !== null) {
      const sede = sedes.find((s) => s.id === activeSede);

      if (
        sede &&
        sede.coords &&
        sede.coords.length === 2 &&
        !isNaN(Number(sede.coords[0])) &&
        !isNaN(Number(sede.coords[1]))
      ) {
        const lat = Number(sede.coords[0]);
        const lng = Number(sede.coords[1]);

        map.flyTo([lat, lng], 14, { duration: 1.5 });
      } else {
        console.warn(`Coordenadas inválidas para la sede ID: ${activeSede}`);
      }
    }
  }, [activeSede, sedes, map]);

  return null;
}

export default function MapView({
  sedes,
  activeSede,
  onMarkerClick,
}: {
  sedes: Sede[];
  activeSede: number | null;
  onMarkerClick?: (id: number) => void;
}) {
  const center: [number, number] = [25.6866, -100.3161];

  return (
    <div className="h-full w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative z-0">
      <MapContainer
        center={center}
        zoom={11}
        style={{ height: "100%", width: "100%", background: "#f8f9fa" }}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
          className="brightness-[0.9]"
        />

        <MapController sedes={sedes} activeSede={activeSede} />

        {sedes.map((sede) => (
          <Marker
            key={sede.id}
            position={sede.coords}
            icon={createCustomIcon(sede.colors)}
            eventHandlers={{
              click: () => {
                if (onMarkerClick) onMarkerClick(sede.id);
              },
            }}
          >
            <Popup className="rounded-xl overflow-hidden">
              <div className="text-center p-1">
                <strong className="text-gray-900 text-sm block mb-1">
                  {sede.parroquia}
                </strong>
                <span className="text-gray-500 text-xs uppercase font-bold tracking-wider">
                  {sede.sector}
                </span>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
