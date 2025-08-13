import React from "react";

export default function SetupGuides() {
  return (
    <>
      <section id="pl-setup" className="at-section container slide-up">
        <h2 className="section__title">Setup Guides</h2>
        <div className="gm-accordion" data-accordion="" style={{ textAlign: 'left', maxWidth: '960px', margin: 'var(--space-xl) auto 0' }}>
          <div className="accordion__item">
            <button className="accordion__trigger">
              <span className="accordion__title"> Install &amp; Login (Desktop)</span>
              <span className="accordion__icon">+</span>
            </button>
            <div className="accordion__content">
             <ul className="hc-faq-list">
                 <li>Download the installer and run it.</li>
                <li>Open MT5 → File → Login to Trade Account.</li>
                <li>Enter login, password, and select the correct server.</li>
              </ul>
            </div>
          </div>
          
          
          <div className="accordion__item">
            <button className="accordion__trigger">
              <span className="accordion__title">  WebTrader Quick Start</span>
              <span className="accordion__icon">+</span>
            </button>
            <div className="accordion__content">
             <ul className="hc-faq-list">
                 <li>Open WebTrader in a modern browser.</li>
                <li>Login with your trading account.</li>
                <li>Customize watchlist and layouts.</li>
              </ul>
            </div>
          </div>
      
         <div className="accordion__item">
            <button className="accordion__trigger">
              <span className="accordion__title">  Mobile App Setup</span>
              <span className="accordion__icon">+</span>
            </button>
            <div className="accordion__content">
             <ul className="hc-faq-list">
                   <li>Install the MT5 app from your store.</li>
                <li>Add a new account and search for our server name.</li>
                <li>Enable push notifications for trade alerts.</li>
              </ul>
            </div>
          </div>
      
        
        </div>
      </section>
      
    </>
  );
}
