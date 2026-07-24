import React from 'react';
import '../styles/VideoPlaceholder.css';
import videoThumb from '../assets/imagens_i9/DSC03930.webp'; // Placeholder background

const VideoPlaceholder = ({ t }) => {
  return (
    <section className="video-placeholder-section">
      <div className="video-container">
        <img src={videoThumb} alt="Video Thumbnail" className="video-background" />
        <div className="video-overlay">
          <h2 className="video-title">{t.video.title}</h2>
          <button className="video-button">{t.video.button}</button>
        </div>
      </div>
    </section>
  );
};

export default VideoPlaceholder;
