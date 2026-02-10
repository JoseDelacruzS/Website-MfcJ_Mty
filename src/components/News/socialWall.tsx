import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, ArrowUpRight } from "lucide-react";
import { getLatestPosts } from "@/lib/social-api";

export const SocialWall = async () => {
  // 1. Obtenemos los datos desde el servidor
  const posts = await getLatestPosts();

  if (posts.length === 0) return null;

  return (
    <section className="py-24 bg-background ">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
           <div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary dark:text-white">
                 Síguenos en <span className="text-[#1877F2]">Redes</span>
              </h2>
              <p className="text-muted-foreground mt-2">
                 Lo que está pasando ahorita en el MFCJ.
              </p>
           </div>
           <Link 
             href="https://www.facebook.com/MFCJMonterrey?locale=es_LA" 
             target="_blank"
             className="hidden md:flex items-center gap-2 text-sm font-bold text-primary hover:underline"
           >
             Ver todo el feed <ArrowUpRight size={16}/>
           </Link>
        </div>

        {/* Grid Bento Dinámico */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:h-[500px]">
           {posts.map((post, index) => (
             <Link 
               key={post.id}
               href={post.permalink_url}
               target="_blank"
               className={`group relative overflow-hidden rounded-3xl border border-border bg-card transition-all hover:shadow-xl hover:-translate-y-1 block h-64 md:h-auto
                 ${index === 0 ? "md:col-span-2 md:row-span-2" : "md:col-span-1 md:row-span-1"}
               `}
             >
                {/* Imagen de Fondo */}
                <Image 
                  src={post.image} 
                  alt="Post MFCJ" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes={index === 0 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Contenido Texto */}
                <div className="absolute bottom-0 left-0 p-6 w-full text-white z-10">
                   <div className="flex justify-between items-center mb-2">
                      <div className="bg-[#1877F2] p-1.5 rounded-full">
                         <Facebook size={14} className="text-white" />
                      </div>
                      <span className="text-[10px] uppercase font-bold tracking-widest opacity-80">
                         {post.created_time}
                      </span>
                   </div>
                   
                   <p className={`font-medium leading-snug text-white/90 line-clamp-2 ${index === 0 ? "text-xl" : "text-sm"}`}>
                      {post.message}
                   </p>
                </div>
             </Link>
           ))}
        </div>

      </div>
    </section>
  );
};