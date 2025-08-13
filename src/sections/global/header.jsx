import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import logo from "../../assets/logo/gm-logo.png";
import logologin from "../../assets/icon/login-icon.svg";
import Index from '../../pages/index.jsx';
import NewsPromotions from '../../pages/news-promotions.jsx';
import AccType from '../../pages/account-types';
import HelpCenter from '../../pages/help-center.jsx';
import Partner from '../../pages/partner.jsx';
import PartnerD from '../../pages/partner-detail.jsx';
import TradingPlatforms from '../../pages/trading-platforms.jsx';
import MainJSLoader from '../../sections/global/MainJSLoader.jsx';
const Header = () => {

  return (
    <header className="header">
      <div className="header__inner">
        {/* LOGO */}
        <div
          className="header__logo"
          style={{ paddingRight: "var(--space-xl)" }}
        >
          <a href="/">
            <img src={logo} alt="GrandMarkets Logo" className="logo-img" />
          </a>
        </div>

        {/* MAIN MENU - PC ONLY */}
        <nav className="header__nav-wrapper desktop-only">
          <ul className="header__nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/account-types">Account Types</Link>
              <ul>
                <li>
                  <Link to="/account-types">ECN Account</Link>
                </li>
                <li>
                  <Link to="/account-types">Standard Account</Link>
                </li>
                <li>
                  <Link to="/account-types">Cent Account</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/">News & Promotions</Link>
            </li>
            <li>
              <Link to="/partner">Partnership</Link>
              <ul>
                <li>
                  <Link to="/partner-detail">IB Program</Link>
                </li>
                <li>
                  <Link to="/partner-detail">Agency</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/trading-platforms">Trading Platforms</Link>
              <ul>
                <li>
                  <Link to="/trading-platforms">Download MT4</Link>
                </li>
                <li>
                  <Link to="/trading-platforms">Download MT5</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/help-center">Help Center</Link>
              <ul>
                <li>
                  <Link to="#">FAQs</Link>
                  <ul>
                    <li>
                      <Link to="/help-center">Account Guide</Link>
                    </li>
                    <li>
                      <Link to="/help-center">Registration Instructions</Link>
                    </li>
                    <li>
                      <Link to="/help-center">Deposits & Withdrawals</Link>
                    </li>
                    <li>
                      <Link to="/help-center">Verification Guide</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/help-center">Support Team</Link>
                </li>
                <li>
                  <Link to="#">Copy Trading Help</Link>
                </li>
                <li>
                  <Link to="#">Platform Support</Link>
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
          <Link to="/login" className="auth-button auth-button--login">
            Sign In
          </Link>
          <Link to="/register" className="auth-button auth-button--signup">
            Sign Up
          </Link>
        </div>

        {/* MOBILE ICONS (Login Dropdown + Hamburger) */}
        <div className="header__mobile-toggle mobile-only">
          {/* Login icon with dropdown */}
          <div className="mobile-auth-toggle">
            <button id="loginToggleBtn" className="mobile-auth-icon">
              <img
                src={logologin}
                alt="Login"
                style={{ width: "20px", height: "20px" }}
              />
            </button>
            <div id="loginDropdown" className="mobile-login-dropdown">
              <Link to="/login" className="auth-button auth-button--login">
                Sign In
              </Link>
              <Link to="/register" className="auth-button auth-button--signup">
                Sign Up
              </Link>
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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/account-types">Account Types</Link>
            <ul>
              <li>
                <Link to="/account-types">ECN Account</Link>
              </li>
              <li>
                <Link to="/account-types">Standard Account</Link>
              </li>
              <li>
                <Link to="/account-types">Cent Account</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/news-promotions">News & Promotions</Link>
          </li>
          <li>
            <Link to="/partner">Partnership</Link>
            <ul>
              <li>
                <Link to="/partner-detail">IB Program</Link>
              </li>
              <li>
                <Link to="/partner-detail">Agency</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/trading-platforms">Trading Platforms</Link>
            <ul>
              <li>
                <Link to="/trading-platforms">Download MT4</Link>
              </li>
              <li>
                <Link to="/trading-platforms">Download MT5</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/help-center">Help Center</Link>
            <ul>
              <li>
                <Link to="#">FAQs</Link>
                <ul>
                  <li>
                    <Link to="/help-center">Account Guide</Link>
                  </li>
                  <li>
                    <Link to="/help-center">Registration Instructions</Link>
                  </li>
                  <li>
                    <Link to="/help-center">Deposits & Withdrawals</Link>
                  </li>
                  <li>
                    <Link to="/help-center">Verification Guide</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/help-center">Support Team</Link>
              </li>
              <li>
                <Link to="#">Copy Trading Help</Link>
              </li>
              <li>
                <Link to="#">Platform Support</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
