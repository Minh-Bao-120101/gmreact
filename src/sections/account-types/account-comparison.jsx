import React from "react";

export default function AccountComparison() {
  return (
    <>
      <section id="account-comparison-cards" className="at-section container fade-in">
        <h2 className="section__title">Account Comparison</h2>
      
        <div className="at-grid-3" style={{ marginTop: "var(--space-xl)" }}>
          
          <article className="at-card">
            <h3>Standard</h3>
            <dl className="specs">
              <div>
                <dt>Typical Spread</dt>
                <dd>From 1.2 pips</dd>
              </div>
              <div>
                <dt>Commission</dt>
                <dd>No</dd>
              </div>
              <div>
                <dt>Minimum Deposit</dt>
                <dd>$10</dd>
              </div>
              <div>
                <dt>Leverage</dt>
                <dd>Up to 1:1000</dd>
              </div>
              <div>
                <dt>Execution</dt>
                <dd>Market</dd>
              </div>
              <div>
                <dt>Best For</dt>
                <dd>Beginners &amp; casual traders</dd>
              </div>
            </dl>
          </article>
      
          
          <article className="at-card">
            <h3>ECN</h3>
            <dl className="specs">
              <div>
                <dt>Typical Spread</dt>
                <dd>From 0.0 pips + commission</dd>
              </div>
              <div>
                <dt>Commission</dt>
                <dd>Yes</dd>
              </div>
              <div>
                <dt>Minimum Deposit</dt>
                <dd>$200</dd>
              </div>
              <div>
                <dt>Leverage</dt>
                <dd>Up to 1:1000</dd>
              </div>
              <div>
                <dt>Execution</dt>
                <dd>ECN</dd>
              </div>
              <div>
                <dt>Best For</dt>
                <dd>Scalpers &amp; algorithmic traders</dd>
              </div>
            </dl>
          </article>
      
          
          <article className="at-card">
            <h3>Cent</h3>
            <dl className="specs">
              <div>
                <dt>Typical Spread</dt>
                <dd>From 1.2 pips</dd>
              </div>
              <div>
                <dt>Commission</dt>
                <dd>No</dd>
              </div>
              <div>
                <dt>Minimum Deposit</dt>
                <dd>$10</dd>
              </div>
              <div>
                <dt>Leverage</dt>
                <dd>Up to 1:1000</dd>
              </div>
              <div>
                <dt>Execution</dt>
                <dd>Market</dd>
              </div>
              <div>
                <dt>Best For</dt>
                <dd>Experienced discretionary traders</dd>
              </div>
            </dl>
          </article>
        </div>
      </section>
      
    </>
  );
}
