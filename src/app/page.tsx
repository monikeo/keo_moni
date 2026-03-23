"use client";
import React from "react";
import Link from "next/link";
import { useContent } from "@/context/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function HomePage() {
  const { content: t } = useContent();
  useScrollReveal();

  if (!t) return null;

  return (
    <div className="page-container">
      <div className="bg-grid"></div>

      <section className="hero-section" style={{ minHeight: "90vh", display: "flex", alignItems: "center" }}>
        <div className="container">
          <div className="hero-split">
             <div className="hero-content reveal-on-scroll">
                <span className="mono-label" style={{ display: "block", marginBottom: "1rem" }}>ARCHITECT OF MOVEMENT</span>
                <h1 className="hero-title" style={{ fontSize: "clamp(3rem, 7vw, 6rem)", textTransform: "uppercase", lineHeight: 1.1, marginBottom: "1rem", letterSpacing: "-2px" }}>
                  {t.hero.title}
                </h1>
                <p className="hero-subtitle" style={{ fontSize: "1.2rem", color: "var(--text-secondary)", marginBottom: "2rem", maxWidth: "450px" }}>
                  {t.hero.subtitle}
                </p>
                <div className="hero-actions mt-md" style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                   <Link href="/about" className="btn-sharp primary">{t.hero.cta}</Link>
                   <Link href="/contact" className="btn-link" style={{ background: "none", border: "none", color: "var(--accent-blue)", fontWeight: 600, textTransform: "uppercase", textDecoration: "none" }}>
                     Initiate Contact [↗]
                   </Link>
                </div>
             </div>
             
             <div className="hero-visual reveal-on-scroll delay-200" style={{ position: "relative" }}>
                <div className="tech-frame" style={{ aspectRatio: "4/5", background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "var(--radius-md)" }}>
                   <div className="frame-overlay" style={{ position: "absolute", bottom: "1rem", left: "1rem", background: "rgba(0,0,0,0.8)", padding: "0.5rem 1rem", border: "1px solid var(--border-color)" }}>
                      <span className="meta" style={{ fontFamily: "'Inter', monospace", fontSize: "0.75rem", color: "var(--accent-blue)" }}>TYPE: FOUNDER // STATUS: ACTIVE</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Startup Showcase */}
      <section className="section bg-soft border-top" style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border-color)" }}>
         <div className="container">
            <h2 className="section-title reveal-on-scroll" style={{ fontSize: "3rem", textTransform: "uppercase" }}>{t.gravzero.title}</h2>
            <p className="text-secondary reveal-on-scroll delay-100" style={{ color: "var(--text-secondary)", marginBottom: "4rem" }}>{t.gravzero.p1}</p>
            
            <div className="blueprint-grid">
               {t.gravzero.structures.map((st: any, i: number) => (
                 <div key={i} className={`blueprint-card reveal-on-scroll delay-${Math.min(i*100 + 200, 500)}`} style={{ padding: "1.5rem", border: "1px solid var(--border-color)", background: "var(--bg-primary)", borderRadius: "var(--radius-sm)" }}>
                    <span className="blueprint-role" style={{ display: "block", fontFamily: "'Inter', monospace", fontSize: "0.8rem", color: "var(--accent-blue)", marginBottom: "1rem" }}>{st.role}</span>
                    <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem", textTransform: "uppercase" }}>{st.title}</h3>
                    <p style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>{st.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Coaching Philosophy & Mindset */}
      <section className="section">
         <div className="container">
            <h2 className="section-title reveal-on-scroll" style={{ fontSize: "2.5rem", textTransform: "uppercase", marginBottom: "3rem" }}>{t.philosophy?.title || 'Philosophy'}</h2>
            <div className="mindset-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
               {t.philosophy?.items?.map((p: any, i: number) => (
                  <div key={i} className={`mindset-card reveal-on-scroll delay-${Math.min(i*100, 500)}`} style={{ paddingLeft: "1.5rem", borderLeft: "2px solid var(--accent-blue)" }}>
                     <h3 style={{ fontSize: "1.25rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>{p.title}</h3>
                     <p style={{ color: "var(--text-secondary)" }}>{p.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Cooperation / Partnerships */}
      <section className="section bg-soft border-top" style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border-color)" }}>
         <div className="container">
            <h2 className="section-title reveal-on-scroll text-center" style={{ fontSize: "3rem", textTransform: "uppercase", marginBottom: "1rem" }}>{t.contact.title}</h2>
            <p className="reveal-on-scroll text-center" style={{ color: "var(--text-secondary)", marginBottom: "4rem", maxWidth: "600px", margin: "0 auto 4rem" }}>Aligning visions to create high-impact products, performances, and digital experiences.</p>
            <div className="coop-grid blueprint-grid">
               {t.contact.openTo.map((item: string, i: number) => (
                  <div key={i} className={`coop-card hover-lift reveal-on-scroll delay-${Math.min(i*100, 500)}`} style={{ padding: "2rem 1.5rem", border: "1px solid var(--border-color)", background: "var(--bg-primary)", textAlign: "center", borderRadius: "var(--radius-sm)" }}>
                     <h3 style={{ fontSize: "1.2rem", letterSpacing: "1px", textTransform: "uppercase" }}>{item}</h3>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Achievements / Hall of Fame */}
      <section className="section border-top" style={{ borderTop: "1px solid var(--border-color)" }}>
         <div className="container">
            <h2 className="section-title reveal-on-scroll" style={{ fontSize: "3rem", textTransform: "uppercase", marginBottom: "4rem" }}>{t.achievements.title}</h2>
            <div className="hof-grid">
               {t.achievements.items.map((item: any, i: number) => (
                  <div key={i} className={`hof-card reveal-on-scroll delay-${Math.min(i*100, 500)}`}>
                     <div className="hof-year" style={{ fontFamily: "'Inter', monospace", fontSize: "1.5rem", color: "var(--accent-blue)", fontWeight: 700 }}>{item.year}</div>
                     <div>
                       <h4 style={{ fontSize: "1.25rem", textTransform: "uppercase", marginBottom: "0.25rem" }}>{item.title}</h4>
                       <p style={{ color: "var(--text-secondary)" }}>{item.desc}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Big Footer CTA */}
      <div className="large-cta border-top text-center" style={{ padding: "var(--space-xl) 0", background: "var(--bg-secondary)", borderTop: "1px solid var(--border-color)" }}>
         <h2 className="reveal-on-scroll" style={{ fontSize: "clamp(3rem, 6vw, 5rem)", textTransform: "uppercase", margin: 0 }}>READY TO BUILD?</h2>
         <div className="reveal-on-scroll delay-200" style={{ marginTop: "2rem" }}>
           <Link href="/contact" className="btn-sharp primary" style={{ fontSize: "1.2rem", padding: "1rem 2.5rem" }}>START A PROJECT</Link>
         </div>
      </div>
    </div>
  );
}
