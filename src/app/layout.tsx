import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

// Configure Serif Font (Headings)
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["700", "800", "900"],
});

// Configure Sans-Serif Font (Body/Subtitles)
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Estetico Estate | Inversión Inmobiliaria Premium en Dubái",
  description: "Descubre oportunidades exclusivas de inversión inmobiliaria en Dubái. Proyectos verificados, alta rentabilidad y asesoría personalizada.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased font-sans text-gray-900 bg-white`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
