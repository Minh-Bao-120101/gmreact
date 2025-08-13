import React, { useState, useEffect } from 'react';
import Header from "../sections/global/header";
import Footer from "../sections/global/footer";
import WhyPartner from "../sections/partner-detail/why-partner";
import HowToStart from "../sections/partner-detail/how-to-start";
import OurSupport from "../sections/partner-detail/our-support";
import PaymentStructure from "../sections/partner-detail/payment-structure";
import CareerGrowth from "../sections/partner-detail/career-growth";
import CompeteProfessional from "../sections/partner-detail/compete-professional";
import PartnerDetailCTA from "../sections/partner-detail/partner-detail-cta";
import RegisterModal from "../sections/modals/register-modal";
import CTAEndSection from "../sections/cta-end-section";

export default function PartnerDetail() {

  return (
    <>
     

      <WhyPartner />
      <HowToStart />
      <OurSupport />
      <PaymentStructure />
      <CareerGrowth />
      <CompeteProfessional />
      <PartnerDetailCTA />

      <RegisterModal />
      <CTAEndSection />

    
    </>
  );
}
