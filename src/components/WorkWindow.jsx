import React, { useEffect, useRef } from 'react';
import '../styles/WorkWindow.scss';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

function WorkWindow({ header, img, url }) {
  const workWindowRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target); // Stop observing after animation
        }
      });
    }, { threshold: 0.1 });

    if (workWindowRef.current) {
      observer.observe(workWindowRef.current);
    }

    return () => {
      if (workWindowRef.current) {
        observer.unobserve(workWindowRef.current);
      }
    };
  }, []);

  return (
    <a className='workWindowCont' href={url} target='_blank' ref={workWindowRef}>
      <div className='text'>
        <h3>{header}</h3>
        <OpenInNewIcon className='urlIcon' />
      </div>
      {/* Uncomment this if you want to use the img */}
      {/* <div className='imgCont'>
          <img src={img} alt="" />
      </div> */}
    </a>
  );
}

export default WorkWindow;
