import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

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
      <body className={"bg-slate-700"}>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
