import type { Metadata } from "next";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";
import TheNavbar from "@/components/TheNavbar";
import TheFooter from "@/components/TheFooter";

import "@/styles/variables.css";
import "@/styles/main.css";
import "@/styles/animations.css";
import "@/styles/components.css";

export const metadata: Metadata = {
  title: "Keo Moni - Portfolio",
  description: "Taekwondo Freestyle Poomsae Athlete, Coach, Founder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        <ThemeProvider>
          <LanguageProvider>
            <TheNavbar />
            <main className="page-transition">
              {children}
            </main>
            <TheFooter />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
