import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Vinicius Freitas | Desenvolvedor de Software",
  description:
    "Especializado em automação de processos, integrações complexas e desenvolvimento de agentes de IA para transformar ideias em soluções escaláveis.",
  keywords: [
    "desenvolvedor",
    "software",
    "automação",
    "integrações",
    "agentes de IA",
    "fullstack",
    "React",
    "Next.js",
  ],
  openGraph: {
    title: "Vinicius Freitas | Desenvolvedor de Software",
    description:
      "Especializado em automação de processos, integrações complexas e desenvolvimento de agentes de IA.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
