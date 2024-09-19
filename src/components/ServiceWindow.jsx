import React, { useEffect, useRef } from 'react';
import '../styles/ServiceWindow.scss'


function ServiceWindow({header, text, icon}) {

  const serviceWindowRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target); // Stop observing after animation
        }
      });
    }, { threshold: 0.1 });

    if (serviceWindowRef.current) {
      observer.observe(serviceWindowRef.current);
    }

    return () => {
      if (serviceWindowRef.current) {
        observer.unobserve(serviceWindowRef.current);
      }
    };
  }, []);

  return (
    <div className='serviceWindowCont' ref={serviceWindowRef}>
        <div className='icon'>
            {icon}
        </div>
        <div className='text'>
            <h3>{header}</h3>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default ServiceWindow