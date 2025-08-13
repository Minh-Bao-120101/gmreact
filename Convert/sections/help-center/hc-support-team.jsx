import React from "react";

export default function HcSupportTeam() {
  return (
    <>
      <section id="hc-support-team" className="at-section container fade-in">
        <h2 className="section__title">Support Team</h2>
        <p className="section__desc">Get help from our experts 24/5.</p>
      
        <div className="at-grid-3" style="margin-top: var(--space-xl); text-align: left">
          
          <article className="at-card">
            <h3>Support Hotline</h3>
            <p>Call us for urgent inquiries.</p>
            <p style="font-weight: 700; font-size: 1.125rem; margin-top: 0.5rem">
              +84 124245
            </p>
            <div className="btn-group" style="--btn-gap: 1rem; margin-top: 1rem">
              <a className="btn btn-primary" href="tel:+84124245">Call now</a>
            </div>
          </article>
      
          
          <article className="at-card">
            <h3>Submit a Ticket</h3>
            <p>Describe your issue and our team will get back shortly.</p>
            <div className="btn-group" style="--btn-gap: 1rem; margin-top: 1rem">
              <a className="btn btn-primary" data-open-modal="register-modal">Open Form</a>
              <a className="btn btn-outline" href="/pages/help-center.html#ticket">How it works</a>
            </div>
          </article>
      
          
          <article className="at-card">
            <h3>Live Chat</h3>
            <p>Chat with us in real-time during market hours.</p>
            <div className="btn-group" style="--btn-gap: 1rem; margin-top: 1rem">
              <button className="btn btn-primary" id="hc-livechat-btn" type="button">
                Start chat
              </button>
              <a className="btn btn-outline" href="/pages/help-center.html#chat">Chat availability</a>
            </div>
            
            
          </article>
        </div>
      </section>
      
    </>
  );
}
