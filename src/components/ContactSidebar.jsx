import React from 'react';
import icone from '../assets/icone.png';
import '../styles/ContactSidebar.css';

const ContactSidebar = ({ isOpen, onClose }) => {
  return (
    <>
      <div className={`sidebar-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}></div>
      <aside className={`contact-sidebar ${isOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="sidebar-content">
          <img src={icone} alt="i9Hub Ícone" className="sidebar-logo" />
          
          <h2 className="sidebar-title">
            nos conte<br/>sua história!
          </h2>

          <div className="sidebar-info">
            <a href="mailto:contato@i9hub.com" className="sidebar-email">contato@i9hub.com</a>
            <p className="sidebar-address">
              Av. Afonso Pena, 4798 - Umuarama,<br/>
              Uberlândia - MG
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default ContactSidebar;
