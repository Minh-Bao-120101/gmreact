import React from "react";
import video from "../assets/videos/partner.mp4"

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section fade-in glow-on-scroll">
      {/* Video Background */}
      <div className="hero-overlay">
       <video autoPlay muted loop playsInline>
  <source src={video} type="video/mp4" />
</video>
      </div>

      {/* Content */}
      <div className="hero-content container">
        <h1 className="hero-heading glow">
          THIS IS THE DARK MODE REVIEW INTERFACE
        </h1>

        <p className="hero-subtext">
          The content, images, and layout are subject to change.<br />
          The sub-menu is intended solely for testing page content. Once the
          interface is finalized, the sub-menu will be placed in the footer
          menu.
        </p>

        <div className="btn-group">
          <a href="../pages/register.html" className="btn btn-primary glow">
            Start Trading
          </a>
          <a href="../pages/partner.html" className="btn btn-outline">
            Become a Partner
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
