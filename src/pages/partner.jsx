import React, { useState, useEffect } from 'react';
import Header from "../sections/global/header";
import RegisterModal from "../sections/modals/register-modal";
import PartnerMainSection from "../sections/partner-detail/partner-main-section";
import CTAEndSection from "../sections/cta-end-section";

export default function Partner() {
  
  return (
    <>
     

      <RegisterModal />

      <PartnerMainSection />

      <CTAEndSection />

      <button className="btn btn-primary" data-open-modal="">
        Open Account
      </button>
    </>
  );
}
