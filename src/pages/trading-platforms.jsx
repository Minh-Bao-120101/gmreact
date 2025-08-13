import React, { useState, useEffect } from 'react';
import Header from "../sections/global/header";
import Footer from "../sections/global/footer";
import Intro from "../sections/platforms/intro";
import PlatformCards from "../sections/platforms/platform-cards";
import Downloads from "../sections/platforms/downloads";
import SetupGuides from "../sections/platforms/setup-guides";
import MobileApps from "../sections/platforms/mobile-apps";
import PlatformFAQ from "../sections/platforms/platform-faq";
import CTAEndSection from "../sections/cta-end-section";

export default function TradingPlatforms() {

  return (
    <>
     

    
        <Intro />
        <PlatformCards />
        <Downloads />
        <SetupGuides />
        <MobileApps />
        <PlatformFAQ />
        <CTAEndSection />
     

   
    </>
  );
}
