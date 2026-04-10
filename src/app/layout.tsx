import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Beliving Property | Inversión Inmobiliaria Premium en Dubái",
  description: "Descubre oportunidades exclusivas de inversión inmobiliaria en Dubái. Proyectos verificados, alta rentabilidad y asesoría personalizada.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${montserrat.variable} antialiased font-sans text-gray-900 bg-white`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
