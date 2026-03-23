"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
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
          <h2 className="section-title mb-lg reveal-on-scroll" style={{ marginBottom: "4rem", fontSize: "2rem" }}>{t.education?.title || "EXPERTISE"}</h2>
          
          <div className="expertise-grid mb-xl" style={{ marginBottom: "6rem" }}>
             {t.expertise.map((skill: string, i: number) => (
               <div key={i} className={`skill-card reveal-on-scroll delay-${Math.min(i*50, 500)}`} style={{ background: "var(--bg-primary)", padding: "2rem", transition: "0.2s" }}>
                 <span className="skill-num" style={{ fontFamily: "'Inter', monospace", color: "var(--accent-blue)", display: "block", marginBottom: "0.5rem" }}>0{i+1}</span>
                 <h4>{skill}</h4>
               </div>
             ))}
          </div>

          <h2 className="section-title mb-lg reveal-on-scroll text-center" style={{ marginBottom: "4rem", fontSize: "2rem", textAlign: "center" }}>{t.education?.title || "EDUCATION"}</h2>
          
          <style dangerouslySetInnerHTML={{__html: `
            .edu-timeline {
              position: relative;
              max-width: 800px;
              margin: 0 auto;
              padding: 2rem 0;
            }
            .edu-timeline::before {
              content: '';
              position: absolute;
              top: 0;
              bottom: 0;
              left: 50%;
              width: 2px;
              background: var(--border-color);
              transform: translateX(-50%);
            }
            .edu-item {
              display: flex;
              justify-content: flex-end;
              padding-right: 50%;
              position: relative;
              margin-bottom: 2rem;
              width: 100%;
            }
            .edu-item:nth-child(even) {
              justify-content: flex-start;
              padding-right: 0;
              padding-left: 50%;
            }
            .edu-content {
              width: 90%;
              padding: 1.5rem;
              background: var(--bg-primary);
              border: 1px solid var(--border-color);
              position: relative;
            }
            .edu-item:nth-child(odd) .edu-content {
              text-align: right;
            }
            .edu-marker {
              position: absolute;
              top: 50%;
              right: -13px;
              transform: translateY(-50%);
              width: 24px;
              height: 24px;
              background: var(--bg-primary);
              border: 2px solid var(--accent-blue);
              border-radius: 50%;
              z-index: 1;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .edu-item:nth-child(even) .edu-marker {
               left: -13px;
               right: auto;
            }
            .edu-marker::before {
               content: '';
               width: 10px;
               height: 10px;
               background: var(--accent-blue);
               border-radius: 50%;
            }
            @media (max-width: 768px) {
              .edu-timeline::before {
                left: 0;
              }
              .edu-item, .edu-item:nth-child(even) {
                justify-content: flex-start;
                padding-left: 2rem;
                padding-right: 0;
              }
              .edu-content {
                width: 100%;
              }
              .edu-item:nth-child(odd) .edu-content {
                text-align: left;
              }
              .edu-marker, .edu-item:nth-child(even) .edu-marker {
                left: -12px;
                right: auto;
              }
            }
          `}} />

          <div className="edu-timeline">
            {t.education?.items.map((edu: any, i: number) => (
              <motion.div 
                key={i} 
                className="edu-item"
                initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
              >
                 <div className="edu-content">
                    <div className="edu-marker"></div>
                    <span className="mono-label" style={{ color: "var(--accent-blue)", marginBottom: "0.5rem", display: "block" }}>{edu.year}</span>
                    <h3 style={{ fontSize: "1.3rem", marginBottom: "0.2rem", color: "var(--text-primary)" }}>{edu.school}</h3>
                    <p style={{ color: "var(--text-secondary)", margin: 0 }}>{edu.degree}</p>
                 </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
