import React from 'react';
import gmIcon from '../assets/logo/gm-icon-original.png';

export default function DepositSection() {
  return (
    <section id="deposit" className="deposit-section glow-on-scroll">
      <div className="deposit-section wide">
        <div className="container">
          <div className="section__heading">
            <h2 className="heading__title fade-in">Multiple Deposit Methods</h2>
            <p className="heading__subtext fade-in">
              Flexible, fast and secure funding options for every trader
            </p>
          </div>

          <div className="deposit__methods">
            <div className="deposit-card">
              <img
                src={gmIcon}
                alt="Bank Transfer"
                className="deposit-icon"
              />
              <h3>Bank Transfer</h3>
              <p>Reliable funding through your local bank</p>
            </div>

            <div className="deposit-card">
              <img
                src={gmIcon}
                alt="Crypto Wallet"
                className="deposit-icon"
              />
              <h3>Crypto Wallet</h3>
              <p>Deposit via USDT, BTC, ETH and more</p>
            </div>

            <div className="deposit-card">
              <img
                src={gmIcon}
                alt="Visa  MasterCard"
                className="deposit-icon"
              />
              <h3>Credit / Debit Card</h3>
              <p>Instant payment with Visa & Mastercard</p>
            </div>

            <div className="deposit-card">
              <img
                src={gmIcon}
                alt="Visa  MasterCard"
                className="deposit-icon"
              />
              <h3>Credit / Debit Card</h3>
              <p>Instant payment with Visa & Mastercard</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
