import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans, JetBrains_Mono } from "next/font/google";
import "../styles/globals.css";
import { Loading } from "../components/Loading";
import { Cursor } from "../components/Cursor";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const dmSans = DM_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-dmsans",
});

const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Vinicius Freitas | Frontend Developer & UI/UX",
  description: "Transformo complexidade em simplicidade. Frontend Developer & UI/UX Designer.",
  keywords: ["desenvolvedor", "frontend", "UI/UX", "React", "Next.js", "TypeScript"],
  openGraph: {
    title: "Vinicius Freitas | Frontend Developer & UI/UX",
    description: "Transformo complexidade em simplicidade.",
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
    <html
      lang="pt-BR"
      className={`${bebasNeue.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased">
        <Loading />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
