import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CompaniesCarousel from './components/CompaniesCarousel';
import AboutUs from './components/AboutUs';
import VideoPlaceholder from './components/VideoPlaceholder';
import ClientsCarousel from './components/ClientsCarousel';
import FeaturedProject from './components/FeaturedProject';
import Footer from './components/Footer';
import ContactSidebar from './components/ContactSidebar';
import Preloader from './components/Preloader';
import { translations } from './translations';
import './App.css';

import imgViacast from './assets/viacastpeople.png';
import imgJpca from './assets/jpca-people.png';

function App() {
  const [lang, setLang] = useState('pt');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);
  const t = translations[lang];

  return (
    <div className="app-container">
      {showPreloader && <Preloader onComplete={() => setShowPreloader(false)} />}
      <Header lang={lang} setLang={setLang} t={t} onOpenContact={() => setIsContactOpen(true)} />
      <ContactSidebar isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <main>
        <Hero t={t} />
        <CompaniesCarousel t={t} />
        <AboutUs t={t} />
        <VideoPlaceholder t={t} />
        <ClientsCarousel t={t} />
        <div id="stories">
          <FeaturedProject 
            variant="company"
            title="Viacast Soluções" 
            director="Paulo Feres" 
            description={t.featured.viacastDesc}
            isReverse={false}
            t={t}
            image={imgViacast}
            link="https://viacast.tv/"
            btnText={t.featured.viacastBtn}
          />
          <FeaturedProject 
            variant="company"
            title="JPCA" 
            directorLabel="CEO/FOUNDER"
            director="João Paulo Cruz Araújo" 
            description={t.featured.jpcaDesc}
            isReverse={true}
            t={t}
            image={imgJpca}
            link="http://jpca.tv.br/"
            btnText={t.featured.jpcaBtn}
          />
        </div>
      </main>
      <Footer t={t} />
    </div>
  );
}

export default App;
