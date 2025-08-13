import React from "react";

export default function Downloads() {
  return (
    <section id="pl-downloads" className="at-section container fade-in">
      <h2 className="section__title">Downloads</h2>
      <div
        className="at-grid-3"
        style={{ marginTop: 'var(--space-xl)', textAlign: 'left' }}
      >
        <article className="at-card">
          <h3>Windows</h3>
          <p>Native installer with auto-updates.</p>
          <div
            className="btn-group"
            style={{ '--btn-gap': '1rem', marginTop: '1rem' }}
          >
            <a className="btn btn-primary" href="/assets/downloads/mt5-setup.exe">
              Download
            </a>
            <a className="btn btn-outline" href="/pages/trading-platforms.html#windows-req">
              Requirements
            </a>
          </div>
        </article>

        <article className="at-card">
          <h3>macOS</h3>
          <p>Run via native package or compatibility layer.</p>
          <div
            className="btn-group"
            style={{ '--btn-gap': '1rem', marginTop: '1rem' }}
          >
            <a className="btn btn-primary" href="/assets/downloads/mt5-macos.dmg">
              Download
            </a>
            <a className="btn btn-outline" href="/pages/trading-platforms.html#mac-req">
              Requirements
            </a>
          </div>
        </article>

        <article className="at-card">
          <h3>WebTrader</h3>
          <p>No download. Works in your browser.</p>
          <div
            className="btn-group"
            style={{ '--btn-gap': '1rem', marginTop: '1rem' }}
          >
            <a className="btn btn-primary" href="/webtrader">
              Launch
            </a>
            <a className="btn btn-outline" href="/pages/trading-platforms.html#web-compat">
              Compatibility
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
