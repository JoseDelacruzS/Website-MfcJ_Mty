# website-mfcj-mty

## Descripción del Proyecto

Este proyecto es una plataforma web informativa y de gestión para la Pastoral Juvenil, desarrollada en Next.js con React y Tailwind CSS, desplegada en Vercel. Integra funcionalidades de landing page, CMS para noticias, conexión con Facebook, y módulos escalables para generación de PDFs y recopilación de datos mediante Google Sheets, todo sin base de datos ni servidores propios.

### Tecnologías principales
- Next.js (React)
- Tailwind CSS
- Aceternity
- HeroUI
- React Icons
- Vercel (deploy)

## Estructura de la Plataforma

### A. Home ("El Atrio Digital")
Ruta: `/`
Objetivo: Impacto visual y acceso rápido a lo urgente.

**Componentes:**
- Hero Section a pantalla completa con foto de fondo y lema del año.
- Botones de acción: "Soy Nuevo" y "Soy Promotor".
- Widget de actualidad: muestra los 3 últimos posts de Facebook (API Graph, diseño propio) y las 2 próximas noticias del CMS (Sanity).
- Sección Mística Express: 3 iconos con texto breve (Formación, Servicio, Espiritualidad).
- Banner de evento próximo con cuenta regresiva.

### B. Sala de Prensa
Ruta: `/noticias`
Pantalla combinada para avisos, reseñas y espiritualidad.

**Características:**
- Filtros tipo pills: Todos, Avisos Oficiales, Reseñas, Espiritualidad.
- Grid masonry con tarjetas de diferentes tamaños.
- Infinite scroll para cargar más notas.
- Detalle de noticia: título, fecha, autor, cuerpo rich text, galería de fotos (si aplica), relacionados.

### C. El Ciclo
Ruta: `/agenda`
Muestra la planeación y el calendario de eventos.

**Características:**
- Vista calendario visual (react-big-calendar o similar) con puntos de color por tipo de evento.
- Vista lista de próximos 3 meses.
- Botón para agregar evento a Google Calendar.

### D. Secretaría Virtual
Ruta: `/recursos`
Sistema de gestión y generador de formatos.

**Secciones:**
- Documentos estáticos: lista de PDFs descargables desde el CMS.
- Generador de formatos: acceso mediante login de claves de sector, con opción de modal o ruta `/recursos/generador`.

## Escalabilidad
El sistema está preparado para integrar generación de PDFs y recopilación de datos a través de cuentas de Google Sheets, sin requerir base de datos ni servidores dedicados.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
