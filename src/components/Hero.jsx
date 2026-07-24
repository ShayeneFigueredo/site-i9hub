import React from 'react';
import i9Banner from '../assets/i9-banner.png';

const Hero = ({ t }) => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <img 
          src={i9Banner} 
          alt="i9Hub Banner" 
          className="hero-banner-image" 
          style={{ width: '100%', maxWidth: '800px', height: 'auto', marginBottom: '2rem' }}
        />
        <p className="hero-subtitle" style={{ fontSize: '1.5rem', fontWeight: '500', marginBottom: '1rem', color: '#111' }}>
          {t.hero.subtitle}
        </p>
        <p className="hero-subtitle-small" style={{ fontSize: '1rem', fontWeight: '400', color: '#666', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
          {t.hero.subtitleSmall}
        </p>
        
        {/* VIDEO PLACEHOLDER WIDE/THIN (SOCIAL COVER PROPORTION) */}
        <div style={{ 
          width: '100vw', 
          marginLeft: 'calc(-50vw + 50%)', /* Break out of container padding */
          aspectRatio: '21/9', /* Proporção mais fina, tipo capa */
          backgroundColor: '#e6e6e6', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          color: '#888',
          position: 'relative'
        }}>
          <span>[ Vídeo Capa: Insira seu vídeo aqui ]</span>
          {/* Pode substituir o span por uma tag <video> posteriormente */}
        </div>

      </div>
    </section>
  );
};

export default Hero;
