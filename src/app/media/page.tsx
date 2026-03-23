"use client";
import React, { useState } from "react";
import { useContent } from "@/context/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function MediaPage() {
  const { content: t } = useContent();
  useScrollReveal();

  const [activeCategory, setActiveCategory] = useState('ALL');
  const [activeFormat, setActiveFormat] = useState('ALL');
  const [activeMedia, setActiveMedia] = useState<any>(null);

  const categories = ['ALL', 'PERFORMANCE', 'COMMERCIAL', 'TRAINING'];
  const formats = ['ALL', 'PHOTO', 'VIDEO', 'INSTAGRAM', 'TIKTOK'];

  // Example databank including Social Embed Structures
  const mediaItems = [
    { id: 1, title: 'SEA Games 2023', type: 'VIDEO', format: 'YOUTUBE', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', category: 'PERFORMANCE', wide: true, tall: false },
    { id: 2, title: 'Nike Commercial Spec', type: 'VIDEO', format: 'NATIVE', category: 'COMMERCIAL', wide: false, tall: false },
    { id: 3, title: 'Tricking Session', type: 'VIDEO', format: 'TIKTOK', embedUrl: 'https://www.tiktok.com/embed/v2/7123456789012345678', category: 'TRAINING', wide: false, tall: true },
    { id: 4, title: 'National Team Training', type: 'PHOTO', format: 'PHOTO', category: 'TRAINING', wide: false, tall: true },
    { id: 5, title: 'GZ Studio BTS', type: 'PHOTO', format: 'INSTAGRAM', embedUrl: 'https://www.instagram.com/p/C-12345/embed', category: 'COMMERCIAL', wide: false, tall: false },
    { id: 6, title: 'University Demo', type: 'VIDEO', format: 'NATIVE', category: 'PERFORMANCE', wide: false, tall: false }
  ];

  const filteredMedia = mediaItems.filter(item => {
    const matchCategory = activeCategory === 'ALL' || item.category === activeCategory;
    const matchFormat = activeFormat === 'ALL' || item.type === activeFormat || item.format === activeFormat;
    return matchCategory && matchFormat;
  });

  if (!t) return null;

  return (
    <div className="page-container">
      <div className="bg-grid"></div>

      <header className="page-header pt-xl pb-md">
        <div className="container text-center">
          <span className="mono-label reveal-on-scroll">Visual Archives</span>
          <h1 className="page-title reveal-on-scroll delay-100" style={{ fontSize: "clamp(3rem, 8vw, 7rem)", textTransform: "uppercase" }}>{t.nav.media}</h1>
        </div>
      </header>

      <div className="container section">
        
        {/* Showreel */}
        <div className="showreel-wrapper reveal-on-scroll delay-200" style={{ marginBottom: "4rem" }}>
          <div className="reel-frame" style={{ width: "100%", aspectRatio: "21/9", background: "linear-gradient(to bottom, #1a1a1a, #0a0a0a)", borderRadius: "var(--radius-lg)", position: "relative", overflow: "hidden", border: "1px solid var(--border-color)" }}>
             <div className="video-overlay" style={{ position: "absolute", top: "1.5rem", right: "2rem", display: "flex", alignItems: "center", gap: "0.5rem", fontFamily: "'Inter', monospace", color: "var(--accent-red)", fontSize: "0.8rem", letterSpacing: "1px" }}>
                <div className="rec-dot" style={{ width: "8px", height: "8px", background: "var(--accent-red)", borderRadius: "50%", boxShadow: "0 0 10px var(--accent-red)" }}></div>
                <span>REC • 00:02:45:12</span>
             </div>
             <div className="play-btn-lg" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "80px", height: "80px", border: "1px solid rgba(255,255,255,0.3)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", cursor: "pointer", background: "rgba(255,255,255,0.05)", backdropFilter: "blur(5px)" }}>
               <span className="play-icon">▶</span>
             </div>
          </div>
          <div className="reel-meta mt-sm" style={{ marginTop: "1rem" }}>
             <h3>2024 PERFORMANCE REEL</h3>
             <p className="mono-label">Action Design / Freestyle Poomsae</p>
          </div>
        </div>

        {/* Pinned Social Highlights */}
        <div className="pinned-highlights mt-xl reveal-on-scroll delay-200" style={{ marginTop: "4rem" }}>
           <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "2rem", borderBottom: "1px solid var(--border-color)", paddingBottom: "1rem" }}>
              <h3 style={{ fontSize: "1.5rem", textTransform: "uppercase", letterSpacing: "1px", margin: 0 }}>Social Highlights</h3>
              <span className="mono-label" style={{ color: "var(--accent-red)" }}>[ PINNED ]</span>
           </div>
           
           <div className="highlights-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
              
              {/* Instagram Highlight Card */}
              <div className="social-embed-card" style={{ background: "#050505", borderRadius: "var(--radius-md)", overflow: "hidden", border: "1px solid #222", aspectRatio: "9/16", display: "flex", flexDirection: "column" }}>
                 <div style={{ padding: "0.5rem 1rem", borderBottom: "1px solid #222", display: "flex", justifyContent: "space-between", fontSize: "0.8rem", color: "var(--text-secondary)", fontFamily: "'Inter', monospace" }}>
                    <span>INSTAGRAM</span>
                    <span>@keomoni</span>
                 </div>
                 {/* Provide your actual Instagram Embed URL below */}
                 <iframe src="https://www.instagram.com/p/C-12345/embed" width="100%" height="100%" frameBorder="0" scrolling="no" allowTransparency={true} loading="lazy" style={{ flex: 1, background: '#fff' }}></iframe>
              </div>

              {/* TikTok Highlight Card */}
              <div className="social-embed-card" style={{ background: "#050505", borderRadius: "var(--radius-md)", overflow: "hidden", border: "1px solid #222", aspectRatio: "9/16", display: "flex", flexDirection: "column" }}>
                 <div style={{ padding: "0.5rem 1rem", borderBottom: "1px solid #222", display: "flex", justifyContent: "space-between", fontSize: "0.8rem", color: "var(--text-secondary)", fontFamily: "'Inter', monospace" }}>
                    <span>TIKTOK</span>
                    <span>@keomoni</span>
                 </div>
                 {/* Provide your actual TikTok Embed V2 URL below */}
                 <iframe src="https://www.tiktok.com/embed/v2/7123456789012345678" width="100%" height="100%" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" loading="lazy" style={{ flex: 1 }}></iframe>
              </div>

           </div>
        </div>

        {/* Dual Filters */}
        <div className="filter-bars-container mt-lg reveal-on-scroll delay-300" style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "5rem", marginBottom: "3rem" }}>
           
           {/* Category Ribbon */}
           <div className="filter-bar" style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap", borderBottom: "1px solid var(--border-color)", paddingBottom: "1rem" }}>
              {categories.map(cat => (
                <button 
                  key={`cat-${cat}`}
                  className={`filter-tab ${activeCategory === cat ? "active" : ""}`}
                  onClick={() => setActiveCategory(cat)}
                  style={{ background: activeCategory === cat ? "var(--accent-blue)" : "transparent", color: activeCategory === cat ? "#fff" : "var(--text-secondary)", border: "1px solid", borderColor: activeCategory === cat ? "var(--accent-blue)" : "transparent", fontFamily: "'Inter', monospace", fontSize: "0.8rem", padding: "0.4rem 1rem", borderRadius: "var(--radius-sm)", cursor: "pointer", transition: "all 0.2s" }}
                >
                  {cat}
                </button>
              ))}
           </div>

           {/* Format Ribbon */}
           <div className="filter-bar" style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
              {formats.map(fmt => (
                <button 
                  key={`fmt-${fmt}`}
                  className={`filter-tab ${activeFormat === fmt ? "active" : ""}`}
                  onClick={() => setActiveFormat(fmt)}
                  style={{ background: "none", border: "none", color: activeFormat === fmt ? "var(--text-primary)" : "var(--text-secondary)", fontFamily: "'Inter', monospace", fontSize: "0.8rem", fontWeight: activeFormat === fmt ? "bold" : "normal", padding: "0.4rem 1rem", cursor: "pointer", transition: "all 0.2s" }}
                >
                  {fmt}
                </button>
              ))}
           </div>
        </div>

        {/* Masonry */}
        <div className="masonry-grid mt-md">
          {filteredMedia.map(item => (
            <div 
               key={item.id}
               className="media-card"
               onClick={() => setActiveMedia(item)}
               style={{ position: "relative", background: "var(--bg-secondary)", borderRadius: "var(--radius-md)", overflow: "hidden", border: "1px solid var(--border-color)", aspectRatio: item.tall ? "3/5" : (item.wide ? "16/9" : "4/3"), gridColumn: item.wide ? "span 2" : "auto", gridRow: item.tall ? "span 2" : "auto", cursor: "pointer" }}
            >
               <div className="media-content" style={{ width: "100%", height: "100%", position: "relative", transition: "transform 0.4s", background: "linear-gradient(135deg, var(--bg-secondary), #222)" }}>
                  <span className="media-type-badge" style={{ position: "absolute", top: "1rem", left: "1rem", fontFamily: "'Inter', monospace", fontSize: "0.7rem", background: "rgba(0,0,0,0.6)", color: "#fff", padding: "0.2rem 0.6rem", backdropFilter: "blur(4px)", borderRadius: "2px" }}>{item.type}</span>
                  <div className="media-hover" style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.4)", opacity: 0, transition: "opacity 0.3s", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px" }}>
                     <span>{item.title}</span>
                  </div>
               </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeMedia && (
        <div className="lightbox-overlay glass" style={{ position: "fixed", inset: 0, zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem", background: "rgba(0,0,0,0.9)", backdropFilter: "blur(15px)" }} onClick={() => setActiveMedia(null)}>
           <button style={{ position: "absolute", top: "2rem", right: "2rem", background: "none", border: "none", color: "#fff", fontSize: "2rem", cursor: "pointer" }} onClick={() => setActiveMedia(null)}>✕</button>
           
           <div className="lightbox-content" style={{ width: "100%", maxWidth: activeMedia.format === 'TIKTOK' || activeMedia.format === 'INSTAGRAM' ? "450px" : "1000px", aspectRatio: activeMedia.format === 'TIKTOK' || activeMedia.format === 'INSTAGRAM' || activeMedia.tall ? "9/16" : "16/9", background: "#050505", border: "1px solid #333", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", position: "relative", overflow: "hidden" }} onClick={e => e.stopPropagation()}>
              
              {/* Native Fallback logic */}
              {!['INSTAGRAM', 'TIKTOK', 'YOUTUBE'].includes(activeMedia.format) && (
                <div style={{ textAlign: "center", padding: "2rem" }}>
                   <span className="mono-label" style={{ color: "var(--text-secondary)", marginBottom: "1rem", display: "block" }}>{activeMedia.category} // {activeMedia.type}</span>
                   <h2 style={{ color: "#fff", fontSize: "2rem", textTransform: "uppercase", letterSpacing: "1px" }}>{activeMedia.title}</h2>
                   <div style={{ marginTop: "2rem", padding: "1rem", border: "1px solid var(--accent-red)", color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                      [MEDIA ASSET PENDING UPLOAD // LOCAL RENDER]
                   </div>
                </div>
              )}

              {/* Instagram Embed Engine */}
              {activeMedia.format === 'INSTAGRAM' && (
                 <iframe src={activeMedia.embedUrl} width="100%" height="100%" frameBorder="0" scrolling="no" allowTransparency={true} style={{ background: '#fff' }}></iframe>
              )}

              {/* TikTok Embed Engine */}
              {activeMedia.format === 'TIKTOK' && (
                 <iframe src={activeMedia.embedUrl} width="100%" height="100%" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
              )}

              {/* Youtube Embed Engine */}
              {activeMedia.format === 'YOUTUBE' && (
                 <iframe src={activeMedia.embedUrl} width="100%" height="100%" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              )}
           </div>
        </div>
      )}
    </div>
  );
}
