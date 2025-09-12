import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Almacén y Librería La Familia, Calama, Chile.",
  description:
    "Almacén y Librería La Familia, abarrotes, congelados, bebidas, artículos de oficina, artículos escolares, artículos de librería, servicios de impresión, servicios de escaneado, fotocopias, plastificado, anillado, certificados laborales.  Estamos ubicados en la ciudad de Calama, Chile.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <GoogleTagManager gtmId="G-NRJCB3M3W9" />
      <body className={"bg-slate-700"}>
        <main>{children}</main>
        <Toaster />
      </body>
      <GoogleAnalytics gaId="G-NRJCB3M3W9" />
    </html>
  );
}
