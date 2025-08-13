import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import Header from './sections/global/header';
import Footer from './sections/global/footer';
import Index from './pages/index.jsx';
import NewsPromotions from './pages/news-promotions.jsx';
import AccType from './pages/account-types';
import HelpCenter from './pages/help-center.jsx';
import Partner from './pages/partner.jsx';
import PartnerD from './pages/partner-detail.jsx';
import TradingPlatforms from './pages/trading-platforms.jsx';
import MainJSLoader from './sections/global/MainJSLoader.jsx';
function App() {
 
  return (
    <>
      <Header />
<MainJSLoader></MainJSLoader>
      <Routes>
        <Route path="/" element={<Index />} />                    
        <Route path="/account-types" element={<AccType />} />
        <Route path="/news-promotions" element={<NewsPromotions />} /> 
        <Route path="/partner" element={<Partner />} />        
        <Route path="/partner-detail" element={<PartnerD />} />
        <Route path="/trading-platforms" element={<TradingPlatforms />} />
        <Route path="/help-center" element={<HelpCenter />} />   
      </Routes>

      <Footer />
    </>
  );
}

export default App;
