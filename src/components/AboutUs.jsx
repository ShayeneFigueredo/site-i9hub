import React, { useState } from 'react';
import { Rocket, Handshake, TrendingUp } from 'lucide-react';
import '../styles/AboutUs.css';

import img1 from '../assets/imagens_i9/DSC03852.webp';
import img2 from '../assets/imagens_i9/DSC03860.webp';
import img3 from '../assets/imagens_i9/DSC03889.webp';
import img4 from '../assets/imagens_i9/DSC03909.webp';

const cards = [
  {
    id: 1,
    img: img1,
    title: 'Lorem Ipsum 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
  },
  {
    id: 2,
    img: img2,
    title: 'Lorem Ipsum 2',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 3,
    img: img3,
    title: 'Lorem Ipsum 3',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    id: 4,
    img: img4,
    title: 'Lorem Ipsum 4',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  }
];

const AboutUs = ({ t }) => {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <section id="about" className="about-section">
      <div className="about-content-new">
        {/* Left Side: Text */}
        <div className="about-text-column">
          <div className="about-title-wrapper">
            <h2 className="about-title">{t.about.title}</h2>
          </div>
          
          <h3 className="about-subtitle">
            {t.about.subtitle}
          </h3>
          
          <p className="about-description">
            {t.about.description}<strong>{t.about.descriptionHighlight}</strong>
          </p>

          <div className="about-stats-vertical">
            <div className="stat-item-row">
              <div className="stat-icon-wrapper"><Rocket size={28} className="stat-icon-lucide" /></div>
              <div className="stat-text-wrapper">
                <h4 className="stat-number">+100</h4>
                <p className="stat-label">{t.about.stats.products}</p>
              </div>
            </div>
            
            <div className="stat-item-row">
              <div className="stat-icon-wrapper"><Handshake size={28} className="stat-icon-lucide" /></div>
              <div className="stat-text-wrapper">
                <h4 className="stat-number">+500</h4>
                <p className="stat-label">{t.about.stats.clients}</p>
              </div>
            </div>
            
            <div className="stat-item-row">
              <div className="stat-icon-wrapper"><TrendingUp size={28} className="stat-icon-lucide" /></div>
              <div className="stat-text-wrapper">
                <h4 className="stat-number">+ R$ 3 milhões</h4>
                <p className="stat-label">{t.about.stats.funds}</p>
              </div>
            </div>
          </div>

          <div className="about-quote-container-new">
            <p className="about-quote-new">{t.about.quote}</p>
          </div>
        </div>

        {/* Right Side: Accordion Cards */}
        <div className="about-accordion-column">
          <div className="accordion-container">
            {cards.map((card, index) => (
              <div 
                key={card.id} 
                className={`accordion-card ${activeCard === index ? 'active' : ''}`}
                onMouseEnter={() => setActiveCard(index)}
                onClick={() => setActiveCard(index)}
              >
                <div className="accordion-bg">
                  <img src={card.img} alt={card.title} />
                  <div className="accordion-overlay"></div>
                </div>
                <div className="accordion-content">
                  <h4 className="accordion-title">{card.title}</h4>
                  <p className="accordion-desc">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
