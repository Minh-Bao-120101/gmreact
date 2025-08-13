import React from "react";
import logo from "../../assets/logo/gm-logo.png"
export default function Footer() {
  return (
    <footer className="gm-footer dark-mode" role="contentinfo">
      <div className="container">
        {/* Top bar: logo + social + phone */}
        <div className="ft-topbar">
          <a href="/" className="brand" aria-label="GrandMarkets homepage">
            <img
              src={logo}
              alt="GrandMarkets Logo"
              className="brand-logo"
            />
            <span className="brand-text"></span>
          </a>

          <div className="social-wrap">
            <a href="#" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>

        <hr className="ft-sep" />

        {/* Main content */}
        <div className="ft-main">
          {/* Company info */}
          <div className="company">
            <p>
              <b>Grand Market </b>
            </p>
            <p style={{ fontSize: "10pt" }}>
              Limited is registered under company number 15998 in the Union of
              Comoros.
            </p>
            
          </div>

          {/* About */}
          <div className="col">
            <h4>Policies</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Risk Disclosure</a></li>
              <li><a href="#">User Agreement</a></li>
              <li><a href="#">AML Policy</a></li>
            </ul>
          </div>

          {/* Customers */}
          <div className="col">
            <h4>Company</h4>
            <ul>
              <li><a href="#">Company Info</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Regulation</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>

          {/* Trading Platforms */}
          <div className="col trading-col">
            <h4>Platforms</h4>
            <a
              href="https://download.mql5.com/cdn/mobile/mt4/ios?server=GrandMarkets-Demo,GrandMarkets-Live1"
              className="app-link"
              aria-label="App Store"
            >
              <img
                src="https://www.epidemicsound.com/staticfiles/public-pages/_next/static/media/appStore.6af61d9c.svg"
                alt="App Store"
              />
            </a>
            <a
              href="https://download.mql5.com/cdn/mobile/mt4/android?server=GrandMarkets-Demo,GrandMarkets-Live1"
              className="app-link"
              aria-label="Google Play"
            >
              <img
                src="https://www.epidemicsound.com/staticfiles/public-pages/_next/static/media/googlePlay.e59e43ea.svg"
                alt="Google Play"
              />
            </a>
          </div>
        </div>

        <hr className="ft-sep" />

        {/* Bottom */}
        <div className="ft-bottom">
          {/* <p>© 2025 GrandMarkets. All rights reserved.</p> */}
          <p>
            <b>Risk Warning: </b>
          </p>
          <p style={{ fontSize: "10pt" }}>
            This website offers general information and does not consider your
            personal financial situation. Assess your goals before trading.
            Services are not available in restricted regions, including the US,
            UK, Canada, and others.
          </p>
          <p>
            <b>Disclaimer: </b>
          </p>
          <p style={{ fontSize: "10pt" }}>
            Trading CFDs and forex carries high risk and may lead to significant
            losses. You don’t own the underlying assets. Not suitable for all
            investors—consult a financial advisor before trading.
          </p>
        </div>
      </div>
    </footer>
  );
}
