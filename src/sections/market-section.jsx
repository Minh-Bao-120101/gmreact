import React, { useEffect } from 'react';
import { initMarketLive, setMarketTheme } from '../js/components/marketLive';

export default function MarketLiveSection() {
  useEffect(() => {
    initMarketLive({
      symbol: 'BINANCE:BTCUSDT',
      interval: '60',
      theme: 'dark'
    });
  }, []);

  return (
    <section id="market-live" className="market-live-section">
      <div className="market-card glow-on-scroll">
        <div id="tv_chart_container" style={{ height: '560px' }}></div>
      </div>
    </section>
  );
}
