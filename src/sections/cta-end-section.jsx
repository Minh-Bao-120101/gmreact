import React from 'react';

export default function CtaEndSection() {
  return (
    <section id="cta-end" className="cta-end-section fade-in">
      <div className="container">
        <div className="cta-end__content">
          <h2 className="cta-end__heading">Ready to Elevate Your Trading?</h2>
          <p className="cta-end__subtext">
            Start your journey with a broker built for professionals.
          </p>
          <div className="btn-group">
            <a href="/pages/register.html" className="btn btn-primary">
              Open Live Account
            </a>
            <a href="/pages/help-center.html" className="btn btn-outline">
              Talk to Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
