import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page-container flex-col-center h-screen" style={{ textAlign: "center", padding: "2rem" }}>
      <div className="bg-grid"></div>
      <div className="error-card glass" style={{ padding: "4rem", maxWidth: "600px", margin: "0 auto", borderRadius: "0px" }}>
         <span className="mono-label" style={{ color: "var(--accent-blue)", marginBottom: "1rem", display: "block", fontSize: "1rem" }}>NULL POINTER // 404</span>
         <h1 className="mega-headline" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", textTransform: "uppercase", marginBottom: "1rem" }}>Dead End.</h1>
         <p style={{ color: "var(--text-secondary)", marginBottom: "3rem", fontSize: "1.2rem" }}>
            The requested vector leads to an empty sector. The page you are attempting to locate does not exist in the current directory.
         </p>
         <Link href="/" className="btn-sharp primary">
            NAVIGATE TO ORIGIN
         </Link>
      </div>
    </div>
  );
}
