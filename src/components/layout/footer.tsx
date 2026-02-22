"use client";

import React from "react";
import { Link } from "@heroui/react";
import { Facebook, Instagram, MapPin, Mail } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { email } from "@/utils/variables";
import { PrivacyModal } from "./PrivacyModal";
import { useDisclosure } from "@heroui/react";

export const Footer = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-secondary text-white pt-16 pb-8 border-t-4 border-accent">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* COLUMNA 1: MARCA */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tighter">
              MFCJ <span className="text-accent">Monterrey</span>
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Formando familias cristianas, transformando corazones jóvenes para
              el servicio de Dios y la comunidad.
            </p>
            <div className="flex gap-4 pt-2">
              <Link
                isExternal
                href="https://www.facebook.com/MFCJMonterrey?locale=es_LA"
                className="text-white hover:text-accent transition-colors"
              >
                <Facebook size={20} />
              </Link>
              <Link
                isExternal
                href="https://www.instagram.com/mfcjmonterrey/"
                className="text-white hover:text-accent transition-colors"
              >
                <Instagram size={20} />
              </Link>
              <Link
                isExternal
                href="https://www.tiktok.com/@mfcmonterrey"
                className="text-white hover:text-accent transition-colors"
              >
                <FaTiktok size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-accent">Explora</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link
                  href="/noticias"
                  className="text-gray-300 hover:text-white"
                >
                  Noticias Recientes
                </Link>
              </li>
              <li>
                <Link href="/agenda" className="text-gray-300 hover:text-white">
                  Calendario Diocesano
                </Link>
              </li>
              <li>
                <Link
                  href="/recursos"
                  className="text-gray-300 hover:text-white"
                >
                  Descargables
                </Link>
              </li>
              <li>
                <Link href="/sedes" className="text-gray-300 hover:text-white">
                  Sedes
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMNA 3: CONTACTO */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-accent">Contacto</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex gap-2 items-start">
                <MapPin size={18} className="text-accent shrink-0" />
                <span>Loma Redonda 216, Loma Larga, 64710 Monterrey, N.L.</span>
              </li>
              <li className="flex gap-2 items-center">
                <Mail size={18} className="text-accent shrink-0" />
                <a href={`mailto:${email}`} className="hover:text-white">
                  {email}
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMNA 4: LEGAL */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-accent">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <button
                  onClick={onOpen}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer text-left bg-transparent border-none p-0 m-0"
                >
                  Aviso de Privacidad
                </button>
              </li>
              {/* <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Reglamento Interno
                </Link>
              </li> */}
            </ul>
          </div>
        </div>

        {/* BARRA INFERIOR */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>
            © {currentYear} MFCJ Monterrey - Área I. Todos los derechos
            reservados.
          </p>
          <p className="mt-2 md:mt-0 flex items-center gap-1">
            Hecho con <span className="text-red-500 animate-pulse">💚</span> por
            el{" "}
            <Link
              href="https://www.instagram.com/jesus_delacruzs/"
              className="text-xs _flink"
            >
              {" "}
              Area 1
            </Link>
          </p>
        </div>
      </div>
      <PrivacyModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </footer>
  );
};
