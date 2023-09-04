import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
