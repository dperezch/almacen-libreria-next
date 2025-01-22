import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Almacén La Familia",
  description:
    "Almacén y Librería La Familia, abarrotes, congelados, bebidas, servicios de impresión.",
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
