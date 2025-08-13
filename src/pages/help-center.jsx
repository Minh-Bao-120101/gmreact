
import Header from "../sections/global/header";
import Footer from "../sections/global/footer";
import HcIntro from "../sections/help-center/hc-intro";
import HcFaqCategories from "../sections/help-center/hc-faq-categories";
import HcSupportTeam from "../sections/help-center/hc-support-team";
import HcCopyTrading from "../sections/help-center/hc-copy-trading";
import HcPlatformSupport from "../sections/help-center/hc-platform-support";
import CTAEndSection from "../sections/cta-end-section";
import React, { useState, useEffect } from 'react';

export default function HelpCenter() {

  return (
    <>
    
        <HcIntro />
        <HcFaqCategories />
        <HcSupportTeam />
        <HcCopyTrading />
        <HcPlatformSupport />
        <CTAEndSection />
     
      <a
        href="https://wa.me/84932886865"
        target="_blank"
        className="fixed-register-button"
        title="Register"
        rel="noopener noreferrer"
      >
        💬
      </a>
    </>
  );
}
