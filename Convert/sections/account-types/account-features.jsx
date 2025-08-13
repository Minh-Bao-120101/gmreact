import React from "react";

export default function AccountFeatures() {
  return (
    <>
      <section id="account-features" className="at-section container fade-in">
        <h2 className="section__title">What You Get with Every Account</h2>
      
        <div className="at-grid-3">
          <div className="at-card glow-card">
            <h3>Secure &amp; Regulated</h3>
            <p>
              Trade with confidence on a reliable infrastructure with robust fund
              protection.
            </p>
          </div>
      
          <div className="at-card glow-card">
            <h3>Ultra-Fast Execution</h3>
            <p>Low-latency trading with optimized routing for minimal slippage.</p>
          </div>
      
          <div className="at-card glow-card">
            <h3>Real-Time Analytics</h3>
            <p>
              Track your performance and trading metrics with transparent reporting.
            </p>
          </div>
        </div>
      </section>
      
    </>
  );
}
