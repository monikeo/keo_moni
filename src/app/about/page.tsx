"use client";
import React from "react";
import Link from "next/link";
import { useContent } from "@/context/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AboutPage() {
  const { content: t } = useContent();
  useScrollReveal();

  if (!t) return null;

  return (
    <div className="page-container">
      <header className="page-header pt-xl pb-md">
        <div className="container">
          <span className="mono-label reveal-on-scroll">The Profile</span>
          <h1 className="page-title reveal-on-scroll delay-100" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", textTransform: "uppercase" }}>{t.about.title}</h1>
        </div>
      </header>

      <section className="section">
        <div className="container grid-bio">
          
          <div className="bio-visual reveal-on-scroll">
            <div className="portrait-frame" style={{ aspectRatio: "3/4", background: "var(--bg-secondary)", border: "1px solid var(--border-color)", position: "relative" }}>
               <div className="placeholder-img" style={{ width: "100%", height: "100%", background: "#222", opacity: 0.2 }}></div>
            </div>
            <div className="tech-stats mt-md">
               <div className="stat-row" style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--border-color)", padding: "1rem 0", fontFamily: "'Inter', monospace", fontSize: "0.9rem" }}>
                 <span style={{ color: "var(--text-secondary)" }}>PROFESSION</span>
                 <strong>{t.stats.profession}</strong>
               </div>
               <div className="stat-row" style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--border-color)", padding: "1rem 0", fontFamily: "'Inter', monospace", fontSize: "0.9rem" }}>
                 <span style={{ color: "var(--text-secondary)" }}>LANGUAGES</span>
                 <strong>{t.stats.languages}</strong>
               </div>
               <div className="mt-md" style={{ marginTop: "2rem" }}>
                  <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="btn-sharp secondary w-full" style={{ width: "100%", textAlign: "center", display: "block" }}>{t.stats.cv || "Download CV"}</a>
               </div>
            </div>
          </div>

          <div className="bio-content reveal-on-scroll delay-100">
            <h3 className="story-head" style={{ marginBottom: "1rem", fontSize: "1.5rem" }}>Start of the Journey</h3>
            <p className="story-text" style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>{t.about.summary}</p>
            
            <div className="divider" style={{ height: "1px", background: "var(--border-color)", margin: "3rem 0" }}></div>

            <h3 className="story-head" style={{ marginBottom: "1rem", fontSize: "1.5rem" }}>{t.vision.title}</h3>
            <ul className="vision-list" style={{ listStyle: "none", padding: 0 }}>
              {t.vision.items.map((v: string, i: number) => (
                <li key={i} style={{ marginBottom: "1rem", display: "flex", gap: "1rem", color: "var(--text-secondary)" }}>
                  <span className="bullet" style={{ color: "var(--accent-blue)" }}>►</span> {v}
                </li>
              ))}
            </ul>

            <div className="mt-lg" style={{ marginTop: "4rem" }}>
               <Link href="/contact" className="btn-sharp primary">Work With Me</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-soft border-top" style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border-color)" }}>
        <div className="container">
          <h2 className="section-title mb-lg reveal-on-scroll" style={{ marginBottom: "4rem", fontSize: "2rem" }}>EXPERTISE</h2>
          <div className="expertise-grid">
             {t.expertise.map((skill: string, i: number) => (
               <div key={i} className={`skill-card reveal-on-scroll delay-${Math.min(i*50, 500)}`} style={{ background: "var(--bg-primary)", padding: "2rem", transition: "0.2s" }}>
                 <span className="skill-num" style={{ fontFamily: "'Inter', monospace", color: "var(--accent-blue)", display: "block", marginBottom: "0.5rem" }}>0{i+1}</span>
                 <h4>{skill}</h4>
               </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
}
