import React, { useEffect } from 'react';
import '../styles/Background.scss';

function Background() {
  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    // Set initial vh value
    setVh();

    // Update on resize
    window.addEventListener('resize', setVh);

    return () => {
      window.removeEventListener('resize', setVh);
    };
  }, []);

  return <div className="bgCont"></div>;
}

export default Background;
