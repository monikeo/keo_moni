"use client";
import React from "react";
import Link from "next/link";
import { useContent } from "@/context/LanguageContext";

export default function TheFooter() {
  const { content: t } = useContent();

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="brand-logo" style={{ color: 'var(--text-primary)', textDecoration: 'none', display: 'inline-block' }}>KEO MONI</Link>
            <p className="copyright">
              &copy; {new Date().getFullYear()} GravZero Ecosystem.<br />
              All rights reserved.
            </p>
          </div>
          <div className="footer-nav">
            <span className="col-head">Ecosystem</span>
            <a href="https://gravzero.com" className="f-link external" target="_blank" rel="noopener noreferrer">GravZero</a>
            <a href="https://studio.gravzero.com" className="f-link external" target="_blank" rel="noopener noreferrer">GravZero Studio</a>
            <a href="https://taekwondo.gravzero.com" className="f-link external" target="_blank" rel="noopener noreferrer">GravZero Taekwondo</a>
          </div>
          <div className="footer-socials">
            <span className="col-head">Connect</span>
            <div className="icon-row" style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
               {t?.contact?.socials && Object.entries(t.contact.socials).map(([platform, link]: any) => {
                  let Icon = () => <span style={{ textTransform: "uppercase", fontSize: "0.6rem", fontWeight: "bold" }}>{platform.slice(0,2)}</span>;
                  if (platform === 'facebook') Icon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
                  if (platform === 'instagram') Icon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
                  if (platform === 'tiktok') Icon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v3a8 8 0 0 1-5-1.5z"></path></svg>;
                  if (platform === 'telegram') Icon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>;
                  if (platform === 'linkedin') Icon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
                  if (platform === 'youtube') Icon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>;

                  return (
                     <a key={platform} href={link} title={platform} className="icon-btn" target="_blank" rel="noopener noreferrer">
                        <Icon />
                     </a>
                  )
               })}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
           <span className="mono-label" style={{ fontSize: "0.7rem", color: "var(--text-secondary)" }}>DESIGNED WITH PRECISION</span>
        </div>
      </div>
    </footer>
  );
}
