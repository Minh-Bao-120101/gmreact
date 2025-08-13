import Header from "../sections/global/header";
import AccountIntro from "../sections/account-types/account-intro";
import AccountComparison from "../sections/account-types/account-comparison";
import AccountTypesTabs from "../sections/tables/account-types-tabs";
import AccountFeatures from "../sections/account-types/account-features";
import AccountFaq from "../sections/account-types/account-faq";
import AccountCta from "../sections/account-types/account-cta";
import RegisterModal from "../sections/modals/register-modal";
import Footer from "../sections/global/footer";
import React, { useState, useEffect } from 'react';

export default function AccountTypesPage() {

  return (
    <>
      {/* <Header /> */}
      <AccountIntro />
      <AccountComparison />
      <AccountTypesTabs />
      {/* {/* <AccountFeatures /> */}
      <AccountFaq />
      <AccountCta />
      <RegisterModal />
      {/* <Footer /> */}
    </>
  );
}
