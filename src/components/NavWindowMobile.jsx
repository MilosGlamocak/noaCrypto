import React, { forwardRef } from 'react';
import '../styles/NavWindowMobile.scss';
import CloseIcon from '@mui/icons-material/Close';

const NavWindowMobile = forwardRef(({ handleOpen }, ref) => {
  return (
    <div className='navWindowCont' ref={ref}>
      <a href="#about" onClick={handleOpen}>About</a>
      <a href="#work">Our work</a>
      <a href="#services">Services</a>
      <CloseIcon className='closeIcon' onClick={handleOpen}/>
    </div>
  );
});

export default NavWindowMobile;
