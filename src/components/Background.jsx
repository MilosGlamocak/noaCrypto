import React, { useEffect } from 'react';
import '../styles/Background.scss';

function Background() {
  useEffect(() => {
    // Set the --vh custom property to the current window height
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    
    // Initial setting of the vh
    setVh();
    
    // Update on resize
    window.addEventListener('resize', setVh);
    
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', setVh);
    };
  }, []);

  return <div className="bgCont"></div>;
}

export default Background;
