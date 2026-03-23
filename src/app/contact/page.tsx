"use client";
import React from "react";
import { useContent } from "@/context/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ContactPage() {
  const { content: t } = useContent();
  useScrollReveal();

  if (!t) return null;

  return (
    <div className="page-container">
      <div className="bg-grid"></div>

      <header className="page-header pt-xl pb-md">
        <div className="container text-center">
          <span className="mono-label reveal-on-scroll">Connect</span>
          <h1 className="page-title reveal-on-scroll delay-100" style={{ fontSize: "clamp(3rem, 8vw, 7rem)", textTransform: "uppercase" }}>{t.nav.contact}</h1>
        </div>
      </header>

      <section className="section">
        <div className="container">
          
          <div className="dashboard-grid">
            
            <div className="dash-left reveal-on-scroll">
               <div className="dash-panel" style={{ padding: "2rem 1.25rem", background: "var(--bg-secondary)", border: "1px solid var(--border-color)" }}>
                  <span className="mono-label" style={{ color: "var(--accent-blue)", marginBottom: "1rem", display: "block" }}>DIRECT LINE</span>
                  <a href={`mailto:${t.contact.email}`} className="email-link" style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", textDecoration: "none", marginBottom: "2rem", display: "block", wordBreak: "break-all" }}>{t.contact.email}</a>
                  
                  <div className="divider" style={{ height: "1px", background: "var(--border-color)", margin: "2rem 0" }}></div>
                  
                  <span className="mono-label" style={{ color: "var(--accent-blue)", marginBottom: "1rem", display: "block" }}>SOCIAL NETWORKS</span>
                  <div className="social-links" style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                     {t.contact.socials && Object.entries(t.contact.socials).map(([platform, link]: any) => {
                        let Icon = () => <span style={{ textTransform: "uppercase", fontSize: "0.7rem", fontWeight: "bold" }}>{platform.slice(0,2)}</span>;
                        if (platform === 'facebook') Icon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
                        if (platform === 'instagram') Icon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
                        if (platform === 'tiktok') Icon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v3a8 8 0 0 1-5-1.5z"></path></svg>;
                        if (platform === 'telegram') Icon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>;
                        if (platform === 'linkedin') Icon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
                        if (platform === 'youtube') Icon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>;
                        
                        return (
                           <a key={platform} href={link} title={platform} target="_blank" rel="noopener noreferrer" className="hover-lift" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "60px", height: "60px", border: "1px solid var(--border-color)", background: "var(--bg-primary)", color: "var(--text-primary)", textDecoration: "none", transition: "0.3s", borderRadius: "12px" }}>
                             <Icon />
                           </a>
                        )
                     })}
                  </div>
               </div>
            </div>

            <div className="dash-right reveal-on-scroll delay-100">
               <div className="dash-panel" style={{ padding: "2rem 1.25rem", border: "1px solid var(--border-color)" }}>
                 <h2 style={{ fontSize: "2rem", marginBottom: "2rem", textTransform: "uppercase" }}>{t.contact.title}</h2>
                 <p style={{ color: "var(--text-secondary)", marginBottom: "3rem", fontSize: "1.1rem" }}>{t.contact.desc}</p>
                 
                 <div className="collab-scope" style={{ marginBottom: "3rem" }}>
                    <h3 className="mono-label" style={{ marginBottom: "1.5rem" }}>SCOPE OF COLLABORATION</h3>
                    <div className="scope-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                       <div className="scope-item" style={{ padding: "1rem", background: "var(--bg-secondary)", border: "1px solid var(--border-color)", display: "flex", alignItems: "center", gap: "1rem" }}><span style={{ color: "var(--accent-blue)" }}>[+]</span> Action Design</div>
                       <div className="scope-item" style={{ padding: "1rem", background: "var(--bg-secondary)", border: "1px solid var(--border-color)", display: "flex", alignItems: "center", gap: "1rem" }}><span style={{ color: "var(--accent-blue)" }}>[+]</span> Performance</div>
                       <div className="scope-item" style={{ padding: "1rem", background: "var(--bg-secondary)", border: "1px solid var(--border-color)", display: "flex", alignItems: "center", gap: "1rem" }}><span style={{ color: "var(--accent-blue)" }}>[+]</span> Seminar / Workshop</div>
                       <div className="scope-item" style={{ padding: "1rem", background: "var(--bg-secondary)", border: "1px solid var(--border-color)", display: "flex", alignItems: "center", gap: "1rem" }}><span style={{ color: "var(--accent-blue)" }}>[+]</span> Brand Partnership</div>
                    </div>
                 </div>

                 <a href={`mailto:${t.contact.email}?subject=Project Brief`} className="btn-sharp primary" style={{ width: "100%", justifyContent: "center", padding: "1.2rem" }}>SEND BRIEF</a>
               </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
