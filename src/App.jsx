import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './sections/global/header';
import Footer from './sections/global/footer.jsx';
import HeroSection from './sections/hero-section.jsx';
import AccountSection from './sections/account-section.jsx';
import MarketLive from './sections/market-section.jsx';
import PartnerSection from './sections/partner-section.jsx';
import Deposit from './sections/deposit-section.jsx'
import CTA from './sections/cta-end-section.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <HeroSection></HeroSection>
      <AccountSection></AccountSection>
      <MarketLive></MarketLive>
      <PartnerSection></PartnerSection>
      <Deposit></Deposit>
      <CTA></CTA>
   <Footer></Footer>
  
      
    
   
    </>
  )
}

export default App
