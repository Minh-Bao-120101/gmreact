import React from 'react';
import gmLogo from '../assets/logo/gm-logo.png';

export default function PartnerSection() {
  return (
    <section id="partner" className="partner-section fade-in">
      <div className="container">
        <h2 className="heading__title fade-in">Become Our Partner</h2>
        <p className="section__desc">
          Join our global partnership network and unlock lifetime earning
          opportunities with flexible programs tailored to your business style.
        </p>

        <div className="partner__cards">
          <div className="partner__card glow-on-scroll">
            <img
              src={gmLogo}
              alt="IB Icon"
              className="partner__icon"
            />
            <h3 className="partner__title">Introducing Broker</h3>
            <p className="partner__bonus">$1,000 Commission Bonus</p>
            <p className="partner__desc">
              Get instant rebates with full transparency, easy onboarding, and
              marketing tools to help you grow fast.
            </p>
            <a href="/pages/partner-detail" className="btn btn-outline">
              Learn More
            </a>
          </div>

          <div className="partner__card glow-on-scroll">
            <img
              src={gmLogo}
              alt="Agency Icon"
              className="partner__icon"
            />
            <h3 className="partner__title">Agency Partner</h3>
            <p className="partner__bonus">Earn up to 50% Commission</p>
            <p className="partner__desc">
              Manage large teams with a flexible revenue model, personal account
              support, and scalable infrastructure.
            </p>
            <a href="/pages/partner-detail" className="btn btn-outline">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
