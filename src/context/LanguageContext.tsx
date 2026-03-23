"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import commonData from "@/data/content/common.json";
import homeData from "@/data/content/home.json";
import aboutData from "@/data/content/about.json";
import projectsData from "@/data/content/projects.json";
import blogData from "@/data/content/blog.json";

type Locale = "en" | "km" | "zh";

type LanguageContextType = {
  locale: Locale;
  setLocale: (loc: Locale) => void;
  content: any;
};

const profileData = {
  en: { ...commonData.en, ...homeData.en, ...aboutData.en, ...projectsData.en, ...blogData.en },
  km: { ...commonData.km, ...homeData.km, ...aboutData.km, ...projectsData.km, ...blogData.km },
  zh: { ...commonData.zh, ...homeData.zh, ...aboutData.zh, ...projectsData.zh, ...blogData.zh },
};

// @ts-ignore
const LanguageContext = createContext<LanguageContextType>({
  locale: "en",
  setLocale: () => {},
  content: (profileData as any).en
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("locale") as Locale;
    if (saved && ["en", "km", "zh"].includes(saved)) {
      setLocaleState(saved);
    }
  }, []);

  const setLocale = (loc: Locale) => {
    setLocaleState(loc);
    localStorage.setItem("locale", loc);
  };

  // Avoid hydration mismatch by rendering default english on server, then swapping on client if needed.
  const content = (profileData as any)[locale];

  return (
    <LanguageContext.Provider value={{ locale, setLocale, content }}>
      <div style={{ visibility: !mounted ? 'hidden' : 'visible'}}>
         {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useContent = () => useContext(LanguageContext);
