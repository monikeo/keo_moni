"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useContent } from "@/context/LanguageContext";

export default function BlogPost({ params }: { params: { id: string } }) {
  const { content: t } = useContent();
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    if (t?.blog?.items) {
      const found = t.blog.items.find((p: any) => String(p.id) === params.id);
      setPost(found);
    }
  }, [t, params.id]);

  if (!t || !post) return (
    <div className="page-container h-screen flex-col-center">
      <div className="mono-label" style={{ color: "var(--text-secondary)" }}>ACCESSING ARCHIVE...</div>
    </div>
  );

  return (
    <div className="page-container">
       <div className="bg-grid"></div>
       <article className="section" style={{ paddingTop: "120px" }}>
          <div className="container" style={{ maxWidth: "800px" }}>
             <Link href="/blog" className="mono-label" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", textDecoration: "none", color: "var(--accent-blue)", marginBottom: "3rem" }}>
                <span>←</span> BACK TO INDEX
             </Link>
             
             <header style={{ marginBottom: "3rem" }}>
                <span className="mono-label" style={{ color: "var(--text-secondary)" }}>{post.category} // {post.date}</span>
                <h1 className="page-title" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", textTransform: "uppercase", lineHeight: 1.1, marginBottom: "1rem" }}>{post.title}</h1>
                <p style={{ fontSize: "1.2rem", color: "var(--text-secondary)" }}>{post.excerpt}</p>
             </header>

             <div className="hero-visual" style={{ width: "100%", aspectRatio: "16/9", background: "var(--bg-secondary)", border: "1px solid var(--border-color)", marginBottom: "4rem" }}></div>

             <div className="article-content" style={{ color: "var(--text-primary)", fontSize: "1.1rem", lineHeight: 1.8 }}>
                <p style={{ marginBottom: "2rem" }}>
                   This is a simulated secure databank entry. The full text content for vector <strong>[{params.id}]</strong> is currently restricted or awaiting synchronization from the primary author nodes.
                </p>
                <div style={{ padding: "2rem", borderLeft: "2px solid var(--accent-blue)", background: "var(--bg-secondary)", marginBottom: "2rem" }}>
                   <strong style={{ fontFamily: "'Inter', monospace", color: "var(--accent-blue)", textTransform: "uppercase" }}>ARCHIVE NOTE:</strong>
                   <p style={{ marginTop: "0.5rem", fontSize: "1rem" }}>Implementation detail: As the localized content expands, full MDX or HTML blocks can be passed dynamically here to hydrate the layout.</p>
                </div>
                <p>
                   End of secure transmission.
                </p>
             </div>
          </div>
       </article>
    </div>
  );
}
