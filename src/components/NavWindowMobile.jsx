import React, { forwardRef } from 'react';
import '../styles/NavWindowMobile.scss';
import CloseIcon from '@mui/icons-material/Close';

const NavWindowMobile = forwardRef(({ handleOpen }, ref) => {
  return (
    <div className='navWindowCont' ref={ref}>
      <a href="#about" onClick={handleOpen}>about</a>
      <a href="#work">our work</a>
      <a href="#services">services</a>
      <CloseIcon className='closeIcon' onClick={handleOpen}/>
    </div>
  );
});

export default NavWindowMobile;
