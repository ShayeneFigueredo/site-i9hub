import React from 'react';

const Footer = ({ t }) => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-content">
        <h2>{t.footer.title}</h2>
        <p>{t.footer.subtitle}</p>
        <a href="mailto:contato@i9hub.com" className="btn-primary" style={{ display: 'inline-block', marginTop: '1rem' }}>
          {t.footer.button}
        </a>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} i9Hub. {t.footer.rights}</p>
      </div>
    </footer>
  );
};

export default Footer;
