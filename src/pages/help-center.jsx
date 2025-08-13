import React from "react";

export default function HelpCenter() {
  return (
    <>
      
          <header data-include="/sections/global/header.html"></header>
      
          <main>
            <section data-include="/sections/help-center/hc-intro.html"></section>
            <section data-include="/sections/help-center/hc-faq-categories.html"></section>
            <section data-include="/sections/help-center/hc-support-team.html"></section>
            <section data-include="/sections/help-center/hc-copy-trading.html"></section>
            <section data-include="/sections/help-center/hc-platform-support.html"></section>
      
            <section data-include="/sections/cta-end-section.html"></section>
          </main>
      <a href="https://wa.me/84932886865" target="_blank" className="fixed-register-button" title="Register">💬</a>
          <footer data-include="/sections/global/footer.html"></footer>
        
      
      
    </>
  );
}
