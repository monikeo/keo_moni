"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useContent } from "@/context/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function BlogPage() {
  const { content: t } = useContent();
  useScrollReveal();

  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("ALL");

  if (!t) return null;

  const allPosts = t.blog.items || [];
  const categories = ["ALL", ...Array.from(new Set(allPosts.map((p: any) => p.category))) as string[]];

  const filteredPosts = allPosts.filter((post: any) => {
    const sQ = searchQuery?.toLowerCase() || "";
    const matchesSearch = (post.title?.toLowerCase() || "").includes(sQ) || 
                          (post.excerpt?.toLowerCase() || "").includes(sQ);
    const matchesCategory = activeCategory === "ALL" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="page-container">
      <div className="bg-grid"></div>

      <header className="page-header pt-xl pb-md">
        <div className="container text-center">
          <span className="mono-label reveal-on-scroll">Insights & Updates</span>
          <h1 className="page-title reveal-on-scroll delay-100" style={{ fontSize: "clamp(3rem, 8vw, 7rem)", textTransform: "uppercase" }}>
            {t.nav.blog}
          </h1>
        </div>
      </header>

      <section className="section">
        <div className="container">
          
          {/* Controls */}
          <div className="blog-controls reveal-on-scroll delay-200" style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "space-between", alignItems: "center", marginBottom: "4rem", paddingBottom: "2rem", borderBottom: "1px solid var(--border-color)" }}>
            <div className="search-box" style={{ flex: "1 1 300px", position: "relative" }}>
              <input 
                type="text" 
                placeholder="Search articles..." 
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                style={{ width: "100%", padding: "1rem 1rem 1rem 3rem", background: "var(--bg-secondary)", border: "1px solid var(--border-color)", color: "var(--text-primary)", fontFamily: "'Inter', sans-serif", fontSize: "1rem", outline: "none", transition: "border-color 0.3s" }}
              />
              <span style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)", color: "var(--text-secondary)" }}>⌕</span>
            </div>
            
            <div className="filter-tags" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
               {categories.map((cat: string) => (
                 <button 
                   key={cat}
                   className={activeCategory === cat ? "active" : ""}
                   onClick={() => setActiveCategory(cat)}
                   style={{ background: activeCategory === cat ? "var(--accent-blue)" : "transparent", color: activeCategory === cat ? "#000" : "var(--text-secondary)", border: "1px solid", borderColor: activeCategory === cat ? "var(--accent-blue)" : "var(--border-color)", padding: "0.5rem 1rem", fontFamily: "'Inter', monospace", fontSize: "0.8rem", cursor: "pointer", transition: "all 0.2s" }}
                 >
                   {cat}
                 </button>
               ))}
            </div>
          </div>

          {/* Grid */}
          <div className="blog-masonry">
             {filteredPosts.length > 0 ? filteredPosts.map((post: any, i: number) => (
                <article key={post.id} className="blog-card reveal-on-scroll" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", display: "flex", flexDirection: "column", transition: "transform 0.3s" }}>
                  <div className="blog-thumb" style={{ width: "100%", aspectRatio: "16/9", background: "linear-gradient(135deg, #111, #333)", overflow: "hidden", position: "relative" }}>
                     <span style={{ position: "absolute", top: "1rem", right: "1rem", background: "rgba(0,0,0,0.8)", padding: "0.2rem 0.5rem", fontFamily: "'Inter', monospace", fontSize: "0.7rem", color: "var(--accent-blue)" }}>{post.category}</span>
                  </div>
                  <div className="blog-meta" style={{ padding: "2rem", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem", color: "var(--text-secondary)", fontFamily: "'Inter', monospace", fontSize: "0.8rem" }}>
                       <span>{post.date}</span>
                       <span>{post.readTime} min read</span>
                    </div>
                    <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem", lineHeight: 1.4 }}>{post.title}</h3>
                    <p style={{ color: "var(--text-secondary)", marginBottom: "2rem", flexGrow: 1 }}>{post.excerpt}</p>
                    <Link href={`/blog/${post.id}`} className="read-more" style={{ color: "var(--accent-blue)", textDecoration: "none", fontWeight: 600, fontFamily: "'Inter', monospace", fontSize: "0.9rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                       READ ARTICLE
                    </Link>
                  </div>
                </article>
             )) : (
                <div className="empty-state" style={{ gridColumn: "1 / -1", textAlign: "center", padding: "4rem 0", color: "var(--text-secondary)" }}>
                   <p style={{ fontFamily: "'Inter', monospace", fontSize: "1.2rem", marginBottom: "1rem" }}>NO MATCHING RECORDS</p>
                   <p>Try adjusting your search query or filters.</p>
                </div>
             )}
          </div>

        </div>
      </section>
    </div>
  );
}
