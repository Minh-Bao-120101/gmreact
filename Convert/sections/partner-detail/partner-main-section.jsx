import React from "react";

export default function PartnerMainSection() {
  return (
    <>
      <section id="partner-main" className="section container fade-in">
        
        <h1 className="section__title">Become a GrandMarkets Partner</h1>
        <p className="section__desc">
          Join our partnership program and grow your income with one of the most
          trusted brokers in the industry. Whether you're an Introducing Broker or an
          Agency Partner, we provide the tools, support, and commissions to help you
          succeed.
        </p>
      
        
        <div className="partner-main__benefit-block glow-on-scroll">
          <div className="partner-main__benefits">
            <div className="partner-main__card glow-card">
              <h3>High Commissions</h3>
              <p>
                Earn industry-leading commissions on every referred client with no
                limits.
              </p>
            </div>
            <div className="partner-main__card glow-card">
              <h3>Real-Time Tracking</h3>
              <p>
                Monitor performance and payouts with our transparent partner
                dashboard.
              </p>
            </div>
            <div className="partner-main__card glow-card">
              <h3>Dedicated Support</h3>
              <p>
                Our team is here to assist you and your clients every step of the way.
              </p>
            </div>
          </div>
        </div>
      
        
        <div className="partner-main__types slide-up">
          <h2 className="section__subtitle">Choose Your Partnership</h2>
          <div className="partner-main__type-grid">
            <div className="partner-main__type-card">
              <h3>Introducing Broker (IB)</h3>
              <p>
                Perfect for individuals or companies who refer traders to
                GrandMarkets. Get paid per lot traded.
              </p>
              <button className="btn btn-primary" data-open-modal="">Register as IB</button>
           
            </div>
            <div className="partner-main__type-card">
              <h3>Agency Partner</h3>
              <p>
                Ideal for businesses looking to monetize traffic and manage larger
                networks or sub-IBs.
              </p>
              <button className="btn btn-primary" data-open-modal="">Register as IB</button>
          
          </div>
        </div>
      
        
        <div className="partner-main__details accordion fade-in">
          <h2 className="section__subtitle">Compare Partnership Types</h2>
      
          
          <div className="accordion__item">
            <button className="accordion__trigger">
              <span className="accordion__title">Introducing Broker (IB)</span>
              <span className="accordion__icon">+</span>
            </button>
            <div className="accordion__content">
              <p>
                The IB model is ideal for individuals or teams who refer clients to
                GrandMarkets. You'll earn commissions based on your clients' trading
                volume, without needing technical setup.
              </p>
              <p>
                Real-time tracking and easy payout management available in your
                Partner Dashboard.
              </p>
            </div>
          </div>
      
          
          <div className="accordion__item">
            <button className="accordion__trigger">
              <span className="accordion__title">Agency Partner</span>
              <span className="accordion__icon">+</span>
            </button>
            <div className="accordion__content">
              <p>
                Designed for larger operations or affiliate businesses, Agency
                Partners can manage networks of sub-IBs with access to flexible
                commission structures.
              </p>
              <p>
                Enjoy priority onboarding, custom deals, and extended support through
                your partner dashboard.
              </p>
            </div>
          </div>
        </div>
      </div></section>
      
    </>
  );
}
