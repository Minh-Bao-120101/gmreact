import gmIcon from "../assets/logo/gm-icon-original.png";
// rồi dùng: <img src={gmIcon} ... />
import React from "react";

const AccountSection = () => {
  return (
    <section id="account" className="account-section glow-on-scroll">
      <div className="container">
        {/* Section Heading */}
        <div className="section-heading">
          <h2 className="section-heading__title">Power Your Trading</h2>
          <p className="section-heading__subtext">
            Discover account types that match your style and elevate your trading to
            a professional standard.
          </p>
        </div>

        {/* Account Grid */}
        <div className="account-grid">
          {/* ECN Account */}
          <div className="account-card">
            <img
               src={gmIcon}
              alt="ECN Icon"
              className="account-card__icon"
            />
            <h3 className="account-card__heading">ECN Account</h3>
            <p className="account-card__subtext">
              Ultra-fast execution, raw spreads, low commissions
            </p>
            <ul className="account-card__info-list">
              <li><strong>Min Deposit:</strong> $10</li>
              <li><strong>Spread:</strong> From 0.0 pip</li>
              <li><strong>Commission:</strong> $3/lot/side</li>
            </ul>
            <a href="../pages/register.html" className="btn btn-outline">Open Account</a>
          </div>

          {/* Standard Account */}
          <div className="account-card">
            <img
               src={gmIcon}
              alt="Standard Icon"
              className="account-card__icon"
            />
            <h3 className="account-card__heading">Standard Account</h3>
            <p className="account-card__subtext">
              Flexible trading with zero commission
            </p>
            <ul className="account-card__info-list">
              <li><strong>Min Deposit:</strong> $10</li>
              <li><strong>Spread:</strong> From 1.2 pip</li>
              <li><strong>Commission:</strong> None</li>
            </ul>
            <a href="../pages/register.html" className="btn btn-outline">Open Account</a>
          </div>

          {/* Cent Account */}
          <div className="account-card">
            <img
              src={gmIcon}
              alt="Cent Icon"
              className="account-card__icon"
            />
            <h3 className="account-card__heading">Cent Account</h3>
            <p className="account-card__subtext">
              Ideal for micro traders and EA testing
            </p>
            <ul className="account-card__info-list">
              <li><strong>Min Deposit:</strong> $5</li>
              <li><strong>Spread:</strong> From 1.8 pip</li>
              <li><strong>Commission:</strong> None</li>
            </ul>
            <a href="../pages/register.html" className="btn btn-outline">Open Account</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountSection;
