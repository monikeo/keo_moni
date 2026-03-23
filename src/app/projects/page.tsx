"use client";
import React from "react";
import { useContent } from "@/context/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MoveRight, PlayCircle, Code2, Film } from "lucide-react";

export default function ProjectsPage() {
  const { content: t } = useContent();
  useScrollReveal();

  if (!t) return null;

  return (
    <div className="page-container" style={{ position: "relative", zIndex: 1 }}>
      <div className="bg-grid" style={{ opacity: 0.15 }}></div>

      <header className="page-header pt-xl pb-md">
        <div className="container text-center">
          <span className="mono-label reveal-on-scroll" style={{ color: "var(--accent-blue)", letterSpacing: "4px" }}>PORTFOLIO</span>
          <h1 className="page-title text-gradient reveal-on-scroll delay-100" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", textTransform: "uppercase", fontWeight: 800, letterSpacing: "-0.05em", marginBottom: "1rem" }}>
            {t.projects_page?.title || "Projects"}
          </h1>
        </div>
      </header>

      {t.projects_page?.categories?.map((cat: any, cIdx: number) => (
         <section key={cIdx} className="section" style={{ padding: "var(--space-lg) 0", position: "relative" }}>
            <div className="container">
               <div className="reveal-on-scroll" style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "3rem" }}>
                 {cIdx === 0 ? <Code2 style={{ color: "var(--accent-blue)" }} size={32} /> : <Film style={{ color: "var(--accent-blue)" }} size={32} />}
                 <h2 className="section-title" style={{ fontSize: "2rem", textTransform: "uppercase", margin: 0, fontWeight: 700 }}>{cat.title}</h2>
               </div>
               
               <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "2rem" }}>
                  {cat.items.map((item: any, i: number) => {
                     // Parse tech stack into array
                     const techArray = item.tech.split(',').map((t: string) => t.trim());
                     
                     return (
                     <div key={i} className={`hover-lift reveal-on-scroll delay-${Math.min(i*100, 500)}`} style={{ 
                        position: "relative",
                        padding: "2rem", 
                        border: "1px solid var(--border-color)", 
                        background: "var(--bg-glass)", 
                        borderRadius: "0px",
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",
                        display: "flex", 
                        flexDirection: "column",
                        overflow: "hidden"
                     }}>
                        {/* Huge faint background number */}
                        <div style={{ position: "absolute", top: "-10px", right: "20px", fontSize: "7rem", fontWeight: 900, color: "var(--text-primary)", opacity: 0.04, zIndex: 0, pointerEvents: "none", lineHeight: 1 }}>
                           {String(i + 1).padStart(2, '0')}
                        </div>

                        <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", height: "100%" }}>
                            <h3 style={{ fontSize: "1.4rem", marginBottom: "1rem", textTransform: "uppercase", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.3 }}>{item.name}</h3>
                            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "2rem", flexGrow: 1 }}>{item.desc}</p>
                            
                            {/* Tech Stack Pills */}
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2.5rem" }}>
                                {techArray.map((tech: string, tIdx: number) => (
                                    <span key={tIdx} style={{ fontSize: "0.75rem", padding: "0.35rem 0.85rem", background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "100px", color: "var(--text-primary)", fontWeight: 500, letterSpacing: "0.5px" }}>
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                            {item.link && (
                                <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "var(--text-primary)", color: "var(--bg-primary)", padding: "0.7rem 1.4rem", borderRadius: "0px", fontWeight: 700, textTransform: "uppercase", textDecoration: "none", fontSize: "0.80rem", transition: "all 0.3s ease" }}>
                                    Details <MoveRight size={16} />
                                </a>
                            )}
                            {item.demoLink && (
                                <a href={item.demoLink} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "transparent", border: "1px solid var(--border-color)", color: "var(--text-primary)", padding: "0.7rem 1.4rem", borderRadius: "0px", fontWeight: 700, textTransform: "uppercase", textDecoration: "none", fontSize: "0.80rem", transition: "all 0.3s ease" }}>
                                    Live Demo <PlayCircle size={16} />
                                </a>
                            )}
                            </div>
                        </div>
                     </div>
                  )})}
               </div>
            </div>
         </section>
      ))}

      {/* Internal Navigation CTA */}
      <section className="section text-center" style={{ padding: "var(--space-xl) 0", position: "relative" }}>
         <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "100%", height: "1px", background: "linear-gradient(90deg, transparent, var(--border-color), transparent)", zIndex: 0 }}></div>
         <div style={{ background: "var(--bg-primary)", display: "inline-block", padding: "0 3rem", position: "relative", zIndex: 1 }}>
            <h2 className="reveal-on-scroll" style={{ fontSize: "2rem", textTransform: "uppercase", marginBottom: "2rem", fontWeight: 800 }}>Ready To Build Something?</h2>
            <a href="/contact" className="btn-sharp primary reveal-on-scroll delay-100" style={{ padding: "1rem 3rem", fontSize: "1.1rem" }}>Initialize Contact</a>
         </div>
      </section>
    </div>
  );
}
