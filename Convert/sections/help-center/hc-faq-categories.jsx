import React from "react";

export default function HcFaqCategories() {
  return (
    <>
      <section id="hc-faq-categories" className="at-section container slide-up">
        <h2 className="section__title">FAQs</h2>
        <p className="section__desc">Quick answers by category.</p>
      
        
        <div className="gm-accordion" data-accordion="" style="text-align: left; max-width: 960px; margin: var(--space-xl) auto 0">
      
        
      
          
         <div className="accordion__item">
            <button className="accordion__trigger">
              <span className="accordion__title">Account Guide</span>
              <span className="accordion__icon">+</span>
            </button>
            <div className="accordion__content">
             <ul className="hc-faq-list">
                <li>
                  <a href="/pages/help-center.html#account-open">How to open an account</a>
                </li>
                <li>
                  <a href="/pages/help-center.html#account-types">Which account type should I choose?</a>
                </li>
                <li>
                  <a href="/pages/help-center.html#account-change">Can I change my account type later?</a>
                </li>
              </ul>
            </div>
          </div>
          
      <div className="accordion__item">
            <button className="accordion__trigger">
              <span className="accordion__title">  Registration Instructions</span>
              <span className="accordion__icon">+</span>
            </button>
            <div className="accordion__content">
            <ul className="hc-faq-list">
                <li><a href="/pages/help-center.html#signup">Sign-up steps</a></li>
                <li>
                  <a href="/pages/help-center.html#email-verify">Email verification not received</a>
                </li>
                <li>
                  <a href="/pages/help-center.html#password-reset">Resetting your password</a>
                </li>
              </ul>
            </div>
          </div>
      
      
         
      
          
           <div className="accordion__item">
            <button className="accordion__trigger">
              <span className="accordion__title">  Deposits &amp; Withdrawals</span>
              <span className="accordion__icon">+</span>
            </button>
            <div className="accordion__content">
             <ul className="hc-faq-list">
                <li>
                  <a href="/pages/help-center.html#deposit-methods">Available deposit methods &amp; fees</a>
                </li>
                <li>
                  <a href="/pages/help-center.html#withdrawal-time">Withdrawal processing times</a>
                </li>
                <li>
                  <a href="/pages/help-center.html#currency-support">Supported currencies</a>
                </li>
              </ul>
            </div>
          </div>
      
      
      
      
      
          
      
          <div className="accordion__item">
            <button className="accordion__trigger">
              <span className="accordion__title"> Verification Guide</span>
              <span className="accordion__icon">+</span>
            </button>
            <div className="accordion__content">
              <ul className="hc-faq-list">
                <li>
                  <a href="/pages/help-center.html#kyc-required">KYC requirements</a>
                </li>
                <li>
                  <a href="/pages/help-center.html#kyc-docs">Accepted documents</a>
                </li>
                <li>
                  <a href="/pages/help-center.html#kyc-status">Check verification status</a>
                </li>
              </ul>
            </div>
          </div>
      
        </div>
      </section>
      
    </>
  );
}
