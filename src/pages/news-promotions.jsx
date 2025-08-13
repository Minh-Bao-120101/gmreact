import React, { useState, useEffect } from 'react';

export default function NewsPromotions() {


  return (
    <>
      <header data-include="/sections/global/header.html"></header>

      <section id="np-hero" className="np-hero" hidden>
        <div className="np-hero__bg"></div>
        <div className="np-hero__overlay"></div>
        <div className="np-hero__inner">
          <div className="np-hero__topline">
            <span className="gm-pill np-hero__pill">Campaign</span>
            <span className="np-hero__countdown" aria-live="polite"></span>
          </div>
          <h2 className="np-hero__title"></h2>
          <p className="np-hero__excerpt"></p>
          <div className="btn-group" style={{ '--btn-gap': '1rem' }}>
            <a href="#" className="btn btn-primary np-hero__cta">Explore</a>
            <a href="/pages/news-promotions.html?cat=promotions" className="btn btn-outline">
              View other offers
            </a>
          </div>
        </div>
      </section>

      <main id="news-promotions" className="section fade-in" aria-labelledby="np-title">
        <div className="container">
          <div className="np__head">
            <h1 id="np-title" className="section__title">News &amp; Promotions</h1>
            <p className="section__subtitle">
              News, platform updates, and offers for traders.
            </p>
          </div>

          <div className="np__controls" role="region" aria-label="Filters and search">
            <div className="np__search">
              <label htmlFor="np-search" className="sr-only">Search</label>
              <input
                id="np-search"
                type="search"
                placeholder="Search by title, content…"
                autoComplete="off"
              />
            </div>

            <div className="np__filters" role="tablist" aria-label="Categories">
              <button className="np__pill is-active" data-cat="all" role="tab" aria-selected="true">
                All
              </button>
              <button className="np__pill" data-cat="news" role="tab" aria-selected="false">
                News
              </button>
              <button className="np__pill" data-cat="promotions" role="tab" aria-selected="false">
                Promotions
              </button>
              <button className="np__pill" data-cat="platform" role="tab" aria-selected="false">
                Platform Update
              </button>
            </div>

            <div className="np__sort">
              <label htmlFor="np-sort" className="sr-only">Sort</label>
              <select id="np-sort">
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="alpha">A → Z</option>
              </select>
            </div>
          </div>

          <div id="np-grid" className="np__grid" aria-live="polite" data-source="/assets/data/news.json"></div>

          <div id="np-empty" className="np__empty" hidden>
            No results found. Try a different keyword.
          </div>

          <nav className="np__pagination" aria-label="Pagination">
            <button className="np__page-btn" data-page="prev" disabled>Previous</button>
            <span className="np__page-info" aria-live="polite">Page 1</span>
            <button className="np__page-btn" data-page="next">Next</button>
          </nav>
        </div>
      </main>

      <footer data-include="/sections/global/footer.html"></footer>

      <noscript>
        Please enable JavaScript to use the filtering, search, and pagination features.
      </noscript>
    </>
  );
}
