import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: {
    default: "MFCJ Monterrey | Movimiento Familiar Cristiano Juvenil",
    template: "%s | MFCJ Monterrey",
  },
  description:
    "Grupo juvenil católico en Monterrey. Encuentra tu comunidad, asiste a nuestros retiros (La Pesca, Kerygma) y vive el servicio a través del MFC Juvenil.",
  keywords: [
    "MFCJ",
    "MFC Juvenil",
    "Movimiento Familiar Cristiano Juvenil",
    "Jóvenes católicos Monterrey",
    "Retiros juveniles Monterrey",
    "MFC Monterrey jóvenes",
  ],
  icons: {
    icon: "/logo-mfcj.ico",
  },
  openGraph: {
    title: "MFCJ Monterrey | Comunidad Juvenil",
    description: "Únete a la familia del MFC Juvenil en Monterrey.",
    url: "https://mfcj-mty.com",
    siteName: "MFCJ Monterrey",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <body className="antialiased min-h-screen flex flex-col">
        <Providers>
          <Navbar />
          <div className="grow">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
