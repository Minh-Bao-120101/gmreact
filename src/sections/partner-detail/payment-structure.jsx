import React from "react";

export default function PaymentStructure() {
  return (
    <>
      <section id="payment-structure" className="pd-section container fade-in">
        <h2 className="section__title">Transparent &amp; On-Time Payments</h2>
        <p className="section__desc">Your hard work deserves fast and fair rewards.</p>
      
        <div className="pd-pay-grid slide-up">
          <div className="pd-card">
            <h3>Flexible Payouts</h3>
            <p>Choose weekly or monthly payment schedules to suit your cashflow.</p>
          </div>
          <div className="pd-card">
            <h3>Multiple Methods</h3>
            <p>Bank transfer, e-wallets, and cryptocurrency supported.</p>
          </div>
          <div className="pd-card">
            <h3>Performance Tiers</h3>
            <p>Increase your commission rate as your referrals grow.</p>
          </div>
          <div className="pd-card">
            <h3>No Hidden Fees</h3>
            <p>100% transparency on your earnings and reports.</p>
          </div>
        </div>
      
        <div className="pd-note">
          <em>Example:</em> Earn up to <strong>$50 per lot traded</strong> or <strong>revenue share up to 50%</strong> depending on your partnership type.
        </div>
      </section>
      
    </>
  );
}
