import React from "react";

export default function CareerGrowth() {
  return (
    <>
      <section id="career-growth" className="pd-section container fade-in">
        <h2 className="section__title">From Introducing Broker to Industry Leader</h2>
        <p className="section__desc">Your partnership is the beginning of a bigger journey.</p>
      
        <div className="pd-steps slide-up">
          <div className="pd-step glow-card">
            <h3>Level 1: Introducing Broker (IB)</h3>
            <p>Start by building your client base and establish your presence.</p>
          </div>
          <div className="pd-step glow-card">
            <h3>Level 2: Agency Partner</h3>
            <p>Manage sub-partners and unlock higher revenue streams.</p>
          </div>
          <div className="pd-step glow-card">
            <h3>Level 3: Regional Leader</h3>
            <p>Lead large networks and gain exclusive incentives and events.</p>
          </div>
        </div>
      </section>
      
    </>
  );
}
