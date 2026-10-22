import type { Metadata, Viewport } from "next";
import { Fraunces, Hanken_Grotesk } from "next/font/google";
import { siteUrl } from "@/lib/restaurant";
import "./globals.css";

const display = Fraunces({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const text = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-text", display: "swap" });

const description =
  "Azumy Sushi Bar, restaurante japonês no centro de Itatiba, SP. Rodízio/festival japonês e à la carte. Veja como chegar.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl ?? "http://localhost:3000"),
  title: "Azumy Sushi Bar | Restaurante japonês em Itatiba",
  description,
  openGraph: { title: "Azumy Sushi Bar | Itatiba", description, locale: "pt_BR", type: "website" },
};

export const viewport: Viewport = { themeColor: "#f3efe7", viewportFit: "cover" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${text.variable}`}>
      <body>
        <a className="skip" href="#conteudo">Pular para o conteúdo</a>
        {children}
      </body>
    </html>
  );
}
