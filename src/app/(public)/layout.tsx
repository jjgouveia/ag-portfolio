import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

import { Lora, Nunito } from "next/font/google";
import { Providers } from "../providers";

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
  variable: "--font-lora",
});

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "600", "700"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Anderson Gouveia",
  description:
    "Portfolio de Anderson Gouveia, representante comercial da área de odontologia.",
  authors: [
    {
      name: "Jr Gouveia",
      url: "https://juniorgouveia.me",
    },
  ],
  keywords: [
    "Anderson Gouveia",
    "Odonto",
    "Odontologia",
    "Dentista",
    "Dental",
    "consultório ondontológico",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${lora.variable} ${nunito.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
