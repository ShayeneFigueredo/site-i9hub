import React from 'react';
import '../styles/CompaniesCarousel.css';

// Import logos
import logoEng from '../assets/empresas/engenharia-rf.png';
import logoJpca from '../assets/empresas/jpca.png';
import logoViacast from '../assets/empresas/viacast.png';
import logoSlats from '../assets/empresas/slats.png';
import logoViasoft from '../assets/empresas/viasoft.png';

const CompaniesCarousel = ({ t }) => {
  // Duplicating logos to create a seamless infinite loop
  const logos = [
    { src: logoEng, alt: "Engenharia RF", link: "https://engenhariarf.com/" },
    { src: logoJpca, alt: "JPCA", link: "http://jpca.tv.br/" },
    { src: logoViacast, alt: "Viacast", link: "https://viacast.tv/" },
    { src: logoSlats, alt: "Slats", link: "" },
    { src: logoViasoft, alt: "Viasoft", link: "https://www.viasoft.tv/" },
    { src: logoEng, alt: "Engenharia RF 2", link: "https://engenhariarf.com/" },
    { src: logoJpca, alt: "JPCA 2", link: "http://jpca.tv.br/" },
    { src: logoViacast, alt: "Viacast 2", link: "https://viacast.tv/" },
    { src: logoSlats, alt: "Slats 2", link: "" },
    { src: logoViasoft, alt: "Viasoft 2", link: "https://www.viasoft.tv/" }
  ];

  const renderLogo = (logo) => {
    const imgElement = (
      <img 
        src={logo.src} 
        alt={logo.alt} 
        className="company-logo" 
        style={{
          height: logo.alt.includes('Viacast') ? '70px' : logo.alt.includes('Slats') ? '70px' : ''
        }}
      />
    );

    if (logo.link) {
      return (
        <a href={logo.link} target="_blank" rel="noopener noreferrer">
          {imgElement}
        </a>
      );
    }
    
    return imgElement;
  };

  return (
    <section className="companies-section">
      <h3 className="companies-title">{t.companies.title}</h3>
      <div className="carousel-container">
        <div className="carousel-track">
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div className="carousel-slide" key={`set1-${index}`}>
              {renderLogo(logo)}
            </div>
          ))}
          {/* Second set of logos for infinite seamless loop */}
          {logos.map((logo, index) => (
            <div className="carousel-slide" key={`set2-${index}`}>
              {renderLogo(logo)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompaniesCarousel;
