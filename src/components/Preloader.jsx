import React, { useState, useEffect } from 'react';
import logoPreta from '../assets/logo-preta.png';
import '../styles/Preloader.css';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const duration = 1500; // 1.5 seconds
    const intervalTime = 15; // update every 15ms
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const currentProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
      setProgress(currentProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        // Start fading out shortly after reaching 100%
        setTimeout(() => {
          setIsFadingOut(true);
          // Tell parent it's done after fade transition completes
          setTimeout(() => {
            onComplete();
          }, 500); // 0.5s fade out duration
        }, 200);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className={`preloader-overlay ${isFadingOut ? 'fade-out' : ''}`}>
      <div className="preloader-content">
        <img src={logoPreta} alt="Carregando i9Hub" className="preloader-logo" />
        <div className="preloader-progress">{progress}%</div>
      </div>
    </div>
  );
};

export default Preloader;
