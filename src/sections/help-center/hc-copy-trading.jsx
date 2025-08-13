import React from "react";

export default function HcCopyTrading() {
  return (
    <>
      <section id="hc-copy-trading" className="at-section container fade-in">
        <h2 className="section__title">Copy Trading Help</h2>
        <p className="section__desc">Follow pro traders or become a strategy provider.</p>
      
        <div className="at-grid-3" style={{ marginTop: 'var(--space-xl)', textAlign: 'left' }}>
          <article className="at-card">
            <h3>Getting Started</h3>
            <ol style={{ paddingLeft: '1.25rem', lineHeight: '1.8' }}>
              <li>Open a trading account.</li>
              <li>Verify your profile.</li>
              <li>Enable Copy Trading in your dashboard.</li>
            </ol>
          </article>
      
          <article className="at-card">
            <h3>Linking Accounts</h3>
            <p>
              Connect your investor account to a master strategy and set your risk
              multiplier.
            </p>
            <ul style={{ paddingLeft: '1.25rem', lineHeight: '1.8' }}>
              <li>Choose a strategy with proven stats.</li>
              <li>Set allocation or multiplier.</li>
              <li>Monitor performance in real time.</li>
            </ul>
          </article>
      
          <article className="at-card">
  <h3>Managing Risk</h3>
  <p>Use stop-copy, equity protection, and max-drawdown alerts.</p>
  <div
    className="btn-group"
    style={{ '--btn-gap': '1rem', marginTop: '1rem' }}
  >
    <a
      className="btn btn-outline"
      href="/pages/help-center.html#copy-risk"
    >
      Risk tips
    </a>
  </div>
</article>

        </div>
      </section>
      
    </>
  );
}
