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
import imgI9hub from './assets/i9hub-people.png';
import imgViasoft from './assets/viasoftpeople.png';
import imgSlats from './assets/slatspeople.png';

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
            title="i9Hub"
            directorLabel="COWORK"
            director="Inovação e Negócios"
            description={t.featured.i9hubDesc}
            isReverse={false}
            t={t}
            image={imgI9hub}
            link="#"
            btnText={t.featured.i9hubBtn}
          />
          <FeaturedProject
            variant="company"
            title="Viacast Soluções"
            director="Paulo Feres"
            description={t.featured.viacastDesc}
            isReverse={true}
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
            isReverse={false}
            t={t}
            image={imgJpca}
            link="http://jpca.tv.br/"
            btnText={t.featured.jpcaBtn}
          />
          <FeaturedProject
            variant="company"
            title="Viasoft"
            directorLabel="CEO/Founder"
            director="Lucas Medeiros"
            description={t.featured.viasoftDesc}
            isReverse={true}
            t={t}
            image={imgViasoft}
            link="#"
            btnText={t.featured.viasoftBtn}
          />
          <FeaturedProject
            variant="company"
            title="Slats"
            directorLabel="Founders"
            director="Paola Araújo, João Paulo Cruz Araújo"
            description={t.featured.slatsDesc}
            isReverse={false}
            t={t}
            image={imgSlats}
            link="#"
            btnText={t.featured.slatsBtn}
          />
        </div>
      </main>
      <Footer t={t} />
    </div>
  );
}

export default App;
