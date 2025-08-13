import React from "react";

export default function PlatformCards() {
  return (
    <section id="pl-cards" className="at-section container slide-up">
      <h2 className="section__title">Choose Your Platform</h2>

      <div
        className="at-grid-3"
        style={{ marginTop: 'var(--space-xl)', textAlign: 'left' }}
      >
        <article className="at-card">
          <h3>MT5 for Desktop</h3>
          <p>
            Full-featured terminal for advanced charting, EAs, and multi-asset
            trading.
          </p>
          <ul
            style={{ paddingLeft: '1.25rem', lineHeight: 1.8, marginTop: '0.5rem' }}
          >
            <li>Algorithmic trading (EAs)</li>
            <li>Dozens of indicators</li>
            <li>One-click trading</li>
          </ul>
          <div
            className="btn-group"
            style={{ '--btn-gap': '1rem', marginTop: '1rem' }}
          >
            <a className="btn btn-primary" href="/assets/downloads/mt5-setup.exe">
              Download Windows
            </a>
            <a className="btn btn-outline" href="/pages/trading-platforms.html#desktop">
              Learn more
            </a>
          </div>
        </article>

        <article className="at-card">
          <h3>WebTrader</h3>
          <p>Trade instantly from your browser — no installation required.</p>
          <ul
            style={{ paddingLeft: '1.25rem', lineHeight: 1.8, marginTop: '0.5rem' }}
          >
            <li>All modern browsers</li>
            <li>Syncs with your account</li>
            <li>Secure SSL</li>
          </ul>
          <div
            className="btn-group"
            style={{ '--btn-gap': '1rem', marginTop: '1rem' }}
          >
            <a className="btn btn-primary" href="/webtrader">Open WebTrader</a>
            <a className="btn btn-outline" href="/pages/trading-platforms.html#web">
              Learn more
            </a>
          </div>
        </article>

        <article className="at-card">
          <h3>MT5 Mobile</h3>
          <p>
            iOS &amp; Android apps with notifications, watchlists, and intuitive order
            tickets.
          </p>
          <ul
            style={{ paddingLeft: '1.25rem', lineHeight: 1.8, marginTop: '0.5rem' }}
          >
            <li>iOS &amp; Android support</li>
            <li>Push alerts</li>
            <li>Full charting</li>
          </ul>
          <div
            className="btn-group"
            style={{ '--btn-gap': '1rem', marginTop: '1rem' }}
          >
            <a className="btn btn-primary" href="#">Get iOS</a>
            <a className="btn btn-outline" href="#">Get Android</a>
          </div>
        </article>
      </div>
    </section>
  );
}
