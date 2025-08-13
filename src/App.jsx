import { useState, useEffect } from 'react';
import Header from './sections/global/header';
import Footer from './sections/global/footer';
import HeroSection from './sections/hero-section';
import AccountSection from './sections/account-section';
import MarketLive from './sections/market-section';
import PartnerSection from './sections/partner-section';
import Deposit from './sections/deposit-section';
import CTA from './sections/cta-end-section';
import AccType from './pages/account-types';

function App() {
  const [count, setCount] = useState(0);

  // Nếu main.js chứa các DOM manipulation thuần JS, bạn nên dùng useEffect
  useEffect(() => {
    // import dynamic để chạy main.js chỉ trên client
    import('./js/main.js').then((module) => {
      if (module.init) module.init(); // giả sử main.js export function init()
    });
  }, []);

  return (
    <>
      <Header />
      {/* Uncomment các section khi cần hiển thị */}
      {/* <HeroSection /> */}
      {/* <AccountSection /> */}
      {/* <MarketLive /> */}
      {/* <PartnerSection /> */}
      {/* <Deposit /> */}
      <AccType />
      {/* <CTA /> */}
      <Footer />
    </>
  );
}

export default App;
