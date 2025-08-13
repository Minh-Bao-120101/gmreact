import React from "react";

export default function ZeroCommissionWeek() {
  return (
    <>
      
          <header data-include="/sections/global/header.html"></header>
      
          <main id="article-detail" className="section fade-in">
            <div className="container article__container">
              <nav className="breadcrumb">
                <a href="/pages/news-promotions.html" data-back-to-list="">← Back to News &amp; Promotions</a>
              </nav>
      
              
              <section id="article-hero" className="article-hero" data-hero="/assets/news/new-images-02.png" data-title="15% Bonus for New Accounts" data-excerpt="Get a 15% first-deposit bonus — terms and conditions apply." data-category="promotions" data-date="2025-07-15" data-id="bonus-30-new-accounts">
                <div className="article-hero__bg"></div>
                <div className="article-hero__overlay"></div>
                <div className="article-hero__inner">
                  <h1 className="article-hero__title"></h1>
                  <p className="article-hero__excerpt"></p>
                  <div className="article-hero__meta">
                    <span className="gm-pill gm-pill--promo">Promotions</span>
                    <time></time>
                  </div>
                </div>
              </section>
      
              
              <article className="article" style="margin-top: 24px">
                <div className="article__content">
                  <h2>Eligibility &amp; Terms</h2>
                  <ul>
                    <li>Available for new accounts opened on or after 15 July 2025.</li>
                    <li>A minimum first deposit of USD 100 is required to qualify.</li>
                    <li>Bonus funds are non-withdrawable and may be used for trading only.</li>
                  </ul>
      
                  <h2>How to Participate</h2>
                  <ol>
                    <li>
                      Register for an account at
                      <a href="/pages/account-types.html">GrandMarkets</a>.
                    </li>
                    <li>Complete KYC verification.</li>
                    <li>Make a deposit and the bonus will be credited automatically.</li>
                  </ol>
      
                  <p>
                    <strong>Note:</strong> This promotion may be modified or withdrawn at any time without prior notice.
                  </p>
                </div>
      
                <footer className="article__footer">
                  <a href="/pages/news-promotions.html" className="btn btn-outline" data-back-to-list="">← Back to List</a>
                  <div className="article__tools">
                    <button className="article__tool-btn" data-copy-link="">
                      Copy link
                    </button>
                  </div>
                </footer>
              </article>
      
              
              <section id="related" className="related" aria-labelledby="related-title" data-source="/assets/data/news.json">
                <div className="related__head">
                  <h2 id="related-title" className="related__title">
                    You may also be interested
                  </h2>
                </div>
                <div className="related__grid"></div>
              </section>
            </div>
          </main>
      
          <footer data-include="/sections/global/footer.html"></footer>
          
        
      
      
    </>
  );
}
