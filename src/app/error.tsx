"use client";
import React, { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service natively
    console.error("Application Render Fault:", error);
  }, [error]);

  return (
    <div className="page-container flex-col-center h-screen" style={{ textAlign: "center", padding: "2rem" }}>
      <div className="bg-grid"></div>
      <div className="error-card glass" style={{ padding: "4rem", maxWidth: "600px", margin: "0 auto", borderRadius: "0px", border: "1px solid var(--accent-red)" }}>
         <span className="mono-label" style={{ color: "var(--accent-red)", marginBottom: "1rem", display: "block", fontSize: "1rem" }}>SYSTEM EXCEPTION // 500</span>
         <h1 className="mega-headline" style={{ fontSize: "clamp(2rem, 5vw, 4rem)", textTransform: "uppercase", marginBottom: "1rem" }}>Thread Collapsed.</h1>
         <p style={{ color: "var(--text-secondary)", marginBottom: "3rem", fontSize: "1.2rem" }}>
            A critical rendering fault has been intercepted by the application boundaries. The thread has been suspended to prevent memory leakage.
         </p>
         <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
            <button onClick={() => reset()} className="btn-sharp primary" style={{ background: "var(--text-primary)", color: "var(--bg-primary)" }}>
              REBOOT THREAD
            </button>
            <Link href="/" className="btn-sharp secondary">
              RETURN TO ORIGIN
            </Link>
         </div>
      </div>
    </div>
  );
}
