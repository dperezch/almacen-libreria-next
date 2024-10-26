import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Almacén Librería La Familia",
  description: "Almacén y Librería La Familia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"bg-slate-700 scroll-smooth"}>{children}</body>
    </html>
  );
}
