import React, { useState } from 'react';
import icone from '../assets/icone.png';
import { Menu, X, Mail } from 'lucide-react';

const Header = ({ lang, setLang, t, onOpenContact }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header" style={{ fontFamily: "'Montserrat', sans-serif" }}>

      <div className="header-left">
        <div className="social-icons" style={{ color: '#333' }}>
          {/* Instagram SVG */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
          {/* LinkedIn SVG */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
          {/* Email SVG */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </div>
      </div>

      <div className="header-center">
        <div className="logo-container">
          <img src={icone} alt="i9Hub Ícone" className="logo" />
        </div>
        
        {/* Mobile Menu Toggle Button */}
        <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} color="#fff" /> : <Menu size={28} color="#000" />}
        </button>

        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <a href="#home" onClick={() => setIsMenuOpen(false)}>{t.nav.home}</a>
          <a href="#stories" onClick={() => setIsMenuOpen(false)}>{t.nav.stories}</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>{t.nav.about}</a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)}>{t.nav.projects}</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>{t.nav.contact}</a>
        </nav>
      </div>

      <div className="header-right">
        <div className="status-indicator" onClick={onOpenContact} style={{ cursor: 'pointer' }}>
          <span className="dot"></span>
          <span className="status-text">{t.header.status}</span>
        </div>
        <div className="email-box">
          <Mail size={20} />
          <span className="email-text">contato@i9hub.com</span>
        </div>
        <div className="lang-toggle">
          <span className={lang === 'pt' ? 'active' : ''} onClick={() => setLang('pt')}>PT</span>
          <span className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</span>
        </div>
      </div>

    </header>
  );
};

export default Header;
