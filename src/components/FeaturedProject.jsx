import React from 'react';

const FeaturedProject = ({ title, director, directorLabel = "CEO", format, description, isReverse, t, image, link, btnText, variant }) => {
  const isCompany = variant === 'company';
  
  return (
    <section className={`featured-projects ${isCompany ? 'company-variant' : ''}`}>
      {isCompany && <div className="company-side-border"></div>}
      <div className={`project-slide ${isReverse ? 'reverse' : ''} ${isCompany ? 'company-slide' : ''}`}>
        <div className={`project-info ${isCompany ? 'company-info' : ''}`}>
          <h2 className="project-title">{title}</h2>
          <div className="project-meta">
            {director && (
              <div className="meta-item">
                <span className="meta-label">{directorLabel}</span>
                <span className="meta-value">{director}</span>
              </div>
            )}
            {format && (
              <div className="meta-item">
                <span className="meta-label">{t.projects.format}</span>
                <span className="meta-value">{format}</span>
              </div>
            )}
          </div>
          <p className="project-description">{description}</p>
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer">
              <button className="btn-outline">{btnText || t.projects.btnWatch}</button>
            </a>
          ) : (
            <button className="btn-outline">{btnText || t.projects.btnWatch}</button>
          )}
        </div>

        <div className={isCompany ? "company-image-container" : "video-container"}>
          {image ? (
            <img src={image} alt={title} className={`project-image ${isCompany ? 'no-border' : ''}`} />
          ) : (
            <div className="video-placeholder">
              <p>[ Espaço para o seu vídeo: {title} ]</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
