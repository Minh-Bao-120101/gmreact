import React from "react";

export default function MobileApps() {
  return (
    <section id="pl-mobile" className="at-section container fade-in">
      <h2 className="section__title">Trade on Mobile</h2>
      <p className="section__desc">iOS &amp; Android apps with sync across devices.</p>

      <div
        className="at-grid-3"
        style={{ marginTop: 'var(--space-xl)', textAlign: 'left' }}
      >
        <article className="at-card">
          <h3>iOS</h3>
          <p>Get notifications and manage orders on the go.</p>
          <div
            className="btn-group"
            style={{ '--btn-gap': '1rem', marginTop: '1rem' }}
          >
            <a className="btn btn-primary" href="#">Get iOS</a>
            <a className="btn btn-outline" href="/pages/trading-platforms.html#ios">Guide</a>
          </div>
        </article>

        <article className="at-card">
          <h3>Android</h3>
          <p>All the essentials with powerful charting.</p>
          <div
            className="btn-group"
            style={{ '--btn-gap': '1rem', marginTop: '1rem' }}
          >
            <a className="btn btn-primary" href="#">Get Android</a>
            <a className="btn btn-outline" href="/pages/trading-platforms.html#android">Guide</a>
          </div>
        </article>

        <article className="at-card">
          <h3>Push Alerts</h3>
          <p>Enable trade, margin, and price alerts directly on your phone.</p>
          <div
            className="btn-group"
            style={{ '--btn-gap': '1rem', marginTop: '1rem' }}
          >
            <a className="btn btn-outline" href="/pages/trading-platforms.html#alerts">
              How to enable
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
