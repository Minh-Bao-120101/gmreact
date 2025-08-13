import React from "react";

export default function HcPlatformSupport() {
  return (
    <section id="hc-platform-support" className="at-section container fade-in">
      <h2 className="section__title">Platform Support</h2>
      <p className="section__desc">Guides for MT4/MT5 and mobile apps.</p>

      <div
        className="at-grid-3"
        style={{ marginTop: 'var(--space-xl)', textAlign: 'left' }}
      >
        <article className="at-card">
          <h3>Install MT4/MT5</h3>
          <p>Download and set up the platform on Windows/macOS.</p>
          <div
            className="btn-group"
            style={{ '--btn-gap': '1rem', marginTop: '1rem' }}
          >
            <a className="btn btn-primary" href="/assets/downloads/mt5-setup.exe">
              Download MT5
            </a>
            <a className="btn btn-outline" href="/pages/help-center.html#mt-install">
              Read guide
            </a>
          </div>
        </article>

        <article className="at-card">
          <h3>Login &amp; Servers</h3>
          <p>
            Find the correct server name, reset passwords, and fix common login
            errors.
          </p>
          <div
            className="btn-group"
            style={{ '--btn-gap': '1rem', marginTop: '1rem' }}
          >
            <a className="btn btn-outline" href="/pages/help-center.html#servers">
              Server list
            </a>
          </div>
        </article>

        <article className="at-card">
          <h3>Mobile Apps</h3>
          <p>
            Trade on the go via iOS and Android. Sync accounts and push
            notifications.
          </p>
          <div
            className="btn-group"
            style={{ '--btn-gap': '1rem', marginTop: '1rem' }}
          >
            <a className="btn btn-primary" href="#">
              Get iOS
            </a>
            <a className="btn btn-outline" href="#">
              Get Android
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
