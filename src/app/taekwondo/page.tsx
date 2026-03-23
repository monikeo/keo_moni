"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useContent } from "@/context/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import tData from "@/data/content/taekwondo.json";

export default function TaekwondoPage() {
  const { locale, content } = useContent();
  useScrollReveal();

  const [tkd, setTkd] = useState<any>(null);

  useEffect(() => {
    if (tData && (tData as any)[locale]) {
      setTkd((tData as any)[locale]);
    }
  }, [locale]);

  if (!content || !tkd) return null;

  return (
    <div className="page-container">
      <div className="bg-grid"></div>

      <header className="page-header pt-xl pb-md">
        <div className="container text-center">
           <span className="mono-label reveal-on-scroll">LIFESTYLE // DISCIPLINE</span>
           <h1 className="page-title reveal-on-scroll delay-100" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", textTransform: "uppercase" }}>
              {tkd.header.title}
           </h1>
           <p className="reveal-on-scroll delay-200" style={{ color: "var(--text-secondary)", maxWidth: "700px", margin: "1rem auto 0", fontSize: "1.2rem" }}>
              {tkd.header.subtitle}
           </p>
        </div>
      </header>

      {/* Future 3D Canvas Placeholder */}
      <section className="section pb-lg">
         <div className="container">
            <div className="reveal-on-scroll glass" style={{ position: "relative", width: "100%", height: "60vh", minHeight: "500px", border: "1px solid var(--border-color)", borderBottom: "4px solid var(--accent-red)", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", overflow: "hidden" }}>
               
               {/* Sci-fi Overlay Graphics */}
               <div style={{ position: "absolute", top: "1rem", left: "1rem", color: "var(--accent-red)", fontSize: "0.8rem", fontFamily: "'Inter', monospace" }}>[ ENGINE: OFFLINE ]</div>
               <div style={{ position: "absolute", bottom: "1rem", right: "1rem", color: "var(--text-secondary)", fontSize: "0.8rem", fontFamily: "'Inter', monospace", textAlign: "right" }}>
                  H: {tkd.avatar.stats.height} <br/>
                  W: {tkd.avatar.stats.weight} <br/>
                  B: {tkd.avatar.stats.build} // {tkd.avatar.stats.core}
               </div>

               {/* Center Focus Target & 3D Hologram Image */}
               <div style={{ width: "350px", height: "450px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", perspective: "1000px" }}>
                  <div style={{ width: "2px", height: "40px", background: "var(--text-secondary)", position: "absolute", top: "-20px" }}></div>
                  <div style={{ width: "2px", height: "40px", background: "var(--text-secondary)", position: "absolute", bottom: "-20px" }}></div>
                  <div style={{ width: "40px", height: "2px", background: "var(--text-secondary)", position: "absolute", left: "-20px" }}></div>
                  <div style={{ width: "40px", height: "2px", background: "var(--text-secondary)", position: "absolute", right: "-20px" }}></div>
                  
                  {/* Floating Hologram 3D Effect */}
                  <motion.div 
                     animate={{ y: [0, -15, 0], scale: [1, 1.02, 1] }}
                     transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                     style={{ position: "relative", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", filter: "drop-shadow(0px 20px 30px rgba(0, 163, 255, 0.4))", transformStyle: "preserve-3d" }}
                  >
                     {/* The base image simulating a 3D hologram scan */}
                     <Image 
                        src="/images/3d-avatar.png" 
                        alt="Keo Moni 3D Avatar"
                        fill
                        style={{ objectFit: "contain", opacity: 0.95, filter: "contrast(1.1) brightness(1.2) saturate(1.1)" }}
                        priority
                     />
                     
                     {/* Holographic Scanline Overlay to enhance 3D feel */}
                     <motion.div 
                        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "4px", background: "rgba(0, 163, 255, 0.6)", boxShadow: "0px 0px 10px rgba(0, 163, 255, 0.8)", zIndex: 10 }}
                        animate={{ top: ["0%", "100%", "0%"] }}
                        transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                     ></motion.div>
                  </motion.div>
                  
                  <div style={{ position: "absolute", bottom: "-50px", textAlign: "center", width: "100%" }}>
                     <h3 style={{ fontSize: "1rem", color: "var(--text-primary)", textTransform: "uppercase", letterSpacing: "2px", margin: 0 }}>
                        {tkd.avatar.title.replace("PENDING", "INITIALIZED")}
                     </h3>
                     <span style={{ color: "var(--accent-blue)", fontSize: "0.8rem", fontFamily: "'Inter', monospace", marginTop: "0.5rem", display: "inline-block" }}>
                        [ ENGINE: ONLINE // RENDER ACTIVE ]
                     </span>
                  </div>
               </div>

            </div>
         </div>
      </section>

      {/* Deep Story Sections */}
      <section className="section bg-soft border-top" style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border-color)" }}>
         <div className="container">
            <div className="grid-bio" style={{ gap: "4rem" }}>
               
               <div className="reveal-on-scroll">
                  <h2 style={{ fontSize: "2.5rem", textTransform: "uppercase", marginBottom: "1.5rem", borderBottom: "1px solid var(--accent-red)", paddingBottom: "1rem" }}>{tkd.journey.title}</h2>
                  <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.8 }}>
                     {tkd.journey.text}
                  </p>
               </div>

               <div className="reveal-on-scroll delay-100">
                  <h2 style={{ fontSize: "2.5rem", textTransform: "uppercase", marginBottom: "1.5rem", borderBottom: "1px solid var(--accent-blue)", paddingBottom: "1rem" }}>{tkd.coaching.title}</h2>
                  <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.8 }}>
                     {tkd.coaching.text}
                  </p>
               </div>

            </div>
         </div>
      </section>

      {/* Fast Action Footer */}
      <div className="large-cta text-center" style={{ padding: "var(--space-xl) 0" }}>
         <h2 className="reveal-on-scroll" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", textTransform: "uppercase", margin: 0 }}>Step on the Mat</h2>
         <div className="reveal-on-scroll delay-200" style={{ marginTop: "2rem" }}>
           <a href="/contact" className="btn-sharp primary">JOIN GRAVZERO</a>
         </div>
      </div>

    </div>
  );
}
