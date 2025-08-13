import React from "react";
import logo from "../../assets/logo/gm-logo.png"

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        {/* LOGO */}
        <div className="header__logo" style={{ paddingRight: "var(--space-xl)" }}>
          <a href="/">
            <img
              src={logo}
              
              alt="GrandMarkets Logo"
              className="logo-img"
            />
          </a>
        </div>

        {/* MAIN MENU - PC ONLY */}
        <nav className="header__nav-wrapper desktop-only">
          <ul className="header__nav">
            {/* menu content giữ nguyên như cũ */}
            <li>
              <a href="../../index.html">Home</a>
            </li>
            <li>
              <a href="../../pages/account-types.html">Account Types</a>
              <ul>
                <li>
                  <a href="../../pages/account-types.html">ECN Account</a>
                </li>
                <li>
                  <a href="../../pages/account-types.html">Standard Account</a>
                </li>
                <li>
                  <a href="../../pages/account-types.html">Cent Account</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="../../pages/news-promotions.html">News & Promotions</a>
            </li>
            <li>
              <a href="../../pages/partner.html">Partnership</a>
              <ul>
                <li>
                  <a href="../../pages/partner-detail.html">IB Program</a>
                </li>
                <li>
                  <a href="../../pages/partner-detail.html">Agency</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="../../pages/trading-platforms.html">Trading Platforms</a>
              <ul>
                <li>
                  <a href="../../pages/trading-platforms.html">Download MT4</a>
                </li>
                <li>
                  <a href="../../pages/trading-platforms.html">Download MT5</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="../../pages/help-center.html">Help Center</a>
              <ul>
                <li>
                  <a href="#">FAQs</a>
                  <ul>
                    <li>
                      <a href="../../pages/help-center.html">Account Guide</a>
                    </li>
                    <li>
                      <a href="../../pages/help-center.html">
                        Registration Instructions
                      </a>
                    </li>
                    <li>
                      <a href="../../pages/help-center.html">
                        Deposits & Withdrawals
                      </a>
                    </li>
                    <li>
                      <a href="../../pages/help-center.html">
                        Verification Guide
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="../../pages/help-center.html">Support Team</a>
                </li>
                <li>
                  <a href="#">Copy Trading Help</a>
                </li>
                <li>
                  <a href="#">Platform Support</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>

        {/* AUTH + MENU - PC ONLY */}
        <div
          className="header__auth desktop-only"
          style={{ paddingLeft: "var(--space-xl)" }}
        >
          <a
            href="../pages/login.html"
            className="auth-button auth-button--login"
          >
            Sign In
          </a>
          <a
            href="../pages/register.html"
            className="auth-button auth-button--signup"
          >
            Sign Up
          </a>
        </div>

        {/* MOBILE ICONS (Login Dropdown + Hamburger) */}
        <div className="header__mobile-toggle mobile-only">
          {/* Login icon with dropdown */}
          <div className="mobile-auth-toggle">
            <button id="loginToggleBtn" className="mobile-auth-icon">
              <img
                src="../../assets/icon/login-icon.svg"
                alt="Login"
                style={{ width: "20px", height: "20px" }}
              />
            </button>
            <div id="loginDropdown" className="mobile-login-dropdown">
              <a href="../pages/login.html" className="auth-button login">
                Sign In
              </a>
              <a href="../pages/register.html" className="auth-button signup">
                Sign Up
              </a>
            </div>
          </div>

          {/* Hamburger */}
          <button className="hamburger-btn" id="hamburgerBtn">
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <div className="mobile-menu" id="mobileMenu">
        <ul className="mobile-nav">
          <li>
            <a href="../../index.html">Home</a>
          </li>
          <li>
            <a href="../../pages/account-types.html">Account Types</a>
            <ul>
              <li>
                <a href="../../pages/account-types.html">ECN Account</a>
              </li>
              <li>
                <a href="../../pages/account-types.html">Standard Account</a>
              </li>
              <li>
                <a href="../../pages/account-types.html">Cent Account</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="../../pages/news-promotions.html">News & Promotions</a>
          </li>
          <li>
            <a href="../../pages/partner.html">Partnership</a>
            <ul>
              <li>
                <a href="../../pages/partner-detail.html">IB Program</a>
              </li>
              <li>
                <a href="../../pages/partner-detail.html">Agency</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="../../index.html">Trading Platforms</a>
            <ul>
              <li>
                <a href="../../index.html">Download MT4</a>
              </li>
              <li>
                <a href="../../index.html">Download MT5</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="../../pages/help-center.html">Help Center</a>
            <ul>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="../../pages/help-center.html">Support Team</a>
              </li>
              <li>
                <a href="../../pages/help-center.html">Copy Trading Help</a>
              </li>
              <li>
                <a href="../../pages/help-center.html">Platform Support</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
