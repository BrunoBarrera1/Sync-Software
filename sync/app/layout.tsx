import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SYNC SOFTWARE | Transformamos Ideas en Experiencias Digitales",
  description: "Desarrollo web profesional con tecnología de vanguardia. Desde landing pages hasta aplicaciones enterprise que impulsan tu negocio.",
  keywords: ["desarrollo web", "software", "aplicaciones", "landing pages", "tecnología"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}