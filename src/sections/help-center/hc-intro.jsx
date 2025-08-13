import React from "react";

export default function HcIntro() {
  return (
    <>
      <section id="hc-intro" className="at-section container fade-in">
        <h1 className="section__title">Help Center</h1>
        <p className="section__desc" style={{ maxWidth: '760px', margin: '0 auto' }}>
          Find quick answers, step-by-step guides, and ways to contact our support
          team.
        </p>
      
        
        <form className="hc-search" role="search" aria-label="Help Center Search" style={{ maxWidth: '720px', margin: 'var(--space-xl) auto 0', display: 'flex', gap: '12px' }}>
          <input type="search" name="q" placeholder="Search guides, FAQs, topics…" style={{ flex: '1', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '14px 16px' }} />
          <button className="btn btn-primary" type="button">Search</button>
        </form>
      </section>
      
    </>
  );
}
