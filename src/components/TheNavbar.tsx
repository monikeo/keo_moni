"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { useContent } from "@/context/LanguageContext";
import { usePathname } from "next/navigation";

export default function TheNavbar() {
  const { theme, toggleTheme } = useTheme();
  const { locale, setLocale, content } = useContent();
  const pathname = usePathname();
  const t = content;

  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  const links = [
    { path: "/about", label: t.nav.about },
    { path: "/taekwondo", label: t.nav.taekwondo },
    { path: "/media", label: t.nav.media },
    { path: "/projects", label: t.nav.projects },
    { path: "/blog", label: t.nav.blog },
    { path: "/contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(e.target as Node)) {
        setIsLangOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const switchLang = (lang: "en" | "km" | "zh") => {
    setLocale(lang);
    setIsLangOpen(false);
  };

  return (
    <header className={`header glass ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-content">
        <Link href="/" className="logo">
          KEO MONI<span className="dot">.</span>
        </Link>
        <nav className="nav-desktop">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`nav-link ${pathname === link.path ? "router-link-active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="actions">
          <div className="lang-dropdown" ref={langDropdownRef}>
            <button onClick={() => setIsLangOpen(!isLangOpen)} className="btn-icon">
              <span className="current-lang">{locale.toUpperCase()}</span>
              <span className="arrow-icon">▼</span>
            </button>
            {isLangOpen && (
              <div className="dropdown-menu glass" style={{ display: "flex", flexDirection: "column" }}>
                <button onClick={() => switchLang("en")} className={locale === "en" ? "active" : ""}>English</button>
                <button onClick={() => switchLang("km")} className={locale === "km" ? "active" : ""}>ខ្មែរ</button>
                <button onClick={() => switchLang("zh")} className={locale === "zh" ? "active" : ""}>中文</button>
              </div>
            )}
          </div>
          <button onClick={toggleTheme} className="btn-icon theme-btn">
            {theme === "light" ? <span>☀</span> : <span>☾</span>}
          </button>
          <button className="menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <span className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}></span>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="mobile-menu glass">
          <nav className="mobile-nav">
            {links.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className="mobile-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
