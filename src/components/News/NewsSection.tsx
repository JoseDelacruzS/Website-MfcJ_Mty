"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Facebook, Instagram, FileText, Download } from "lucide-react";
import { Button } from "@heroui/react";
import Link from "next/link";
import Image from "next/image";

// --- DATOS MOCK ---
const newsItems = [
  {
    id: 1,
    tag: "Aviso Importante",
    title: "Se abren inscripciones para el Ciclo 2026-2027",
    date: "Hace 2 días",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
    link: "/blog/inscripciones", 
    size: "large", 
  },
  {
    id: 2,
    tag: "Evento",
    title: "Resultados del Torneo de Fútbol Inter-sectores",
    date: "10 Feb 2026",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80&w=800",
    link: "/blog/torneo",
    size: "normal",
  },
];

export const NewsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background" id="prensa">
      
      {/* Fondo decorativo (Usa tu color Secondary con opacidad) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl pointer-events-none mix-blend-multiply dark:mix-blend-screen" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Encabezado */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-primary font-bold tracking-widest uppercase text-sm">
              Actualidad
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary dark:text-white mt-2">
              Sala de <span className="text-primary">Prensa</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl text-lg">
              Entérate de lo último que está pasando en la comunidad. Noticias, avisos y vida social.
            </p>
          </div>
          
          <Button 
            variant="bordered" 
            className="border-secondary text-secondary font-semibold hover:bg-secondary hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-secondary transition-all"
            radius="full"
            endContent={<ArrowUpRight size={18} />}
          >
            Ver todas las noticias
          </Button>
        </div>

        {/* --- GRID BENTO --- */}
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 md:h-[600px]">
          
          {/* 1. NOTICIA PRINCIPAL (Grande) */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="md:col-span-2 md:row-span-2 relative group rounded-3xl overflow-hidden shadow-xl border border-border"
          >
            <Link href={newsItems[0].link} className="block h-full w-full">
                <Image 
                    src={newsItems[0].image} 
                    alt={newsItems[0].title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                    <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block shadow-lg shadow-primary/20">
                        {newsItems[0].tag}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
                        {newsItems[0].title}
                    </h3>
                    <p className="text-white/80 text-sm font-medium">{newsItems[0].date}</p>
                </div>
            </Link>
          </motion.div>

          {/* 2. NOTICIA SECUNDARIA (Pequeña arriba) */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-1 md:row-span-1 bg-card rounded-3xl p-6 border border-border shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
          >
             <div>
                <div className="flex justify-between items-start mb-4">
                    <span className="text-primary text-xs font-bold uppercase tracking-wider">{newsItems[1].tag}</span>
                    <span className="text-muted-foreground text-xs">{newsItems[1].date}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground leading-snug line-clamp-3">
                    {newsItems[1].title}
                </h3>
             </div>
             <Link href={newsItems[1].link} className="text-primary text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all mt-4">
                Leer más <ArrowUpRight size={16} />
             </Link>
          </motion.div>

          {/* 3. SOCIAL CARD (Facebook) */}
          <motion.a
            href="https://www.facebook.com/MFCJMonterrey?locale=es_LA" 
            target="_blank"
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="md:col-span-1 md:row-span-1 bg-[#1877F2] rounded-3xl p-6 flex flex-col justify-between text-white shadow-lg relative overflow-hidden group border border-blue-600"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl group-hover:bg-white/20 transition-all" />
            
            <Facebook size={32} className="relative z-10" />
            
            <div className="relative z-10">
                <p className="text-white/80 text-sm mb-1 font-medium">Síguenos en Facebook</p>
                <h3 className="text-xl font-bold">@MFCJ_Mty</h3>
                <div className="mt-4 bg-white/20 backdrop-blur-sm py-2 px-4 rounded-full text-xs font-bold inline-flex items-center gap-2 group-hover:bg-white group-hover:text-[#1877F2] transition-colors">
                    Ver fotos <ArrowUpRight size={12} />
                </div>
            </div>
          </motion.a>

          {/* 4. RECURSOS / DESCARGAS (Abajo centro) */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="md:col-span-1 md:row-span-1 bg-muted/50 dark:bg-card rounded-3xl p-6 border border-border flex flex-col justify-center items-center text-center gap-4 group cursor-pointer"
          >
             <div className="w-14 h-14 bg-background rounded-full flex items-center justify-center text-secondary border border-border shadow-sm group-hover:scale-110 transition-transform">
                <FileText size={24} />
             </div>
             <div>
                <h3 className="font-bold text-foreground text-lg">Circulares</h3>
                <p className="text-xs text-muted-foreground mt-1 px-4">Descarga el calendario oficial y permisos.</p>
             </div>
             <Button size="sm" className="bg-secondary text-white font-bold shadow-md shadow-secondary/20 group-hover:bg-primary transition-colors">
                <Download size={16} /> Descargar PDF
             </Button>
          </motion.div>

          {/* 5. INSTAGRAM CARD (Abajo derecha) */}
          <motion.a
            href="https://www.instagram.com/mfcjmonterrey/"
            target="_blank"
            whileHover={{ scale: 1.05, rotate: -2 }}
            className="md:col-span-1 md:row-span-1 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-3xl p-6 flex flex-col justify-between text-white shadow-lg relative overflow-hidden group border border-pink-500/50"
          >
             <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
             <Instagram size={32} className="relative z-10" />
             <div className="relative z-10">
                <p className="text-white/80 text-sm mb-1 font-medium">Instagram</p>
                <h3 className="text-xl font-bold">Stories Diarias</h3>
                <p className="text-xs text-white/60 mt-2">¡Etiquétanos!</p>
             </div>
          </motion.a>

        </div>
      </div>
    </section>
  );
};