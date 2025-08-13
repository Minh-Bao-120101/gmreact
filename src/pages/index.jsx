import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import HeroSection from '../sections/hero-section';
import AccountSection from '../sections/account-section';
import MarketLive from '../sections/market-section';
import PartnerSection from '../sections/partner-section';
import Deposit from '../sections/deposit-section';
import CTA from '../sections/cta-end-section';


export default function Index() {
    
  
  return (
    <>
      <HeroSection />
      <AccountSection />
      <MarketLive />
      <PartnerSection />
      <Deposit />
      <CTA />
    </>
  );
}
