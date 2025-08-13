import React from "react";

export default function AccountFaq() {
  return (
    <>
      <section id="account-faq" className="at-section container fade-in">
        <h2 className="section__title">Account FAQs</h2>
        <div className="accordion">
          <div className="accordion__item">
            <button className="accordion__trigger"><span className="accordion__title">Which account is best for me?</span><span className="accordion__icon">+</span></button>
            <div className="accordion__content"><p>If you’re new, choose <strong>Standard</strong>. For scalping/EAs, pick <strong>ECN</strong>. Prefer tighter spreads without commission? Go <strong>Pro</strong>.</p></div>
          </div>
          <div className="accordion__item">
            <button className="accordion__trigger"><span className="accordion__title">Can I upgrade my account later?</span><span className="accordion__icon">+</span></button>
            <div className="accordion__content"><p>Yes. You can request an upgrade anytime once you meet the requirements.</p></div>
          </div>
          <div className="accordion__item">
            <button className="accordion__trigger"><span className="accordion__title">How are ECN commissions calculated?</span><span className="accordion__icon">+</span></button>
            <div className="accordion__content"><p>Charged per lot traded. Rates vary by instrument and volume.</p></div>
          </div>
        </div>
      </section>
      
    </>
  );
}
