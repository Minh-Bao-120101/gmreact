import React from "react";

export default function PlatformFaq() {
  return (
    <>
      <section id="pl-faq" className="at-section container fade-in">
        <h2 className="section__title">Platform FAQs</h2>
        <div className="gm-accordion" data-accordion="" style={{ textAlign: 'left', maxWidth: '960px', margin: 'var(--space-xl) auto 0' }}>
         
          <div className="accordion__item">
            <button className="accordion__trigger">
              <span className="accordion__title"> Which platform should I choose?</span>
              <span className="accordion__icon">+</span>
            </button>
            <div className="accordion__content">
             <p>
                Desktop for advanced tools and EAs, WebTrader for convenience, Mobile
                for monitoring &amp; quick actions.
              </p>
            </div>
          </div>
          
           <div className="accordion__item">
            <button className="accordion__trigger">
              <span className="accordion__title">  I can’t log in — what can I do?</span>
              <span className="accordion__icon">+</span>
            </button>
            <div className="accordion__content">
              <p>
                Check the server name, reset your password, and ensure your internet
                connection is stable.
              </p>
            </div>
          </div>
         
        </div>
      </section>
      
    </>
  );
}
