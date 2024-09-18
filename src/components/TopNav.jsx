import React from 'react'
import '../styles/TopNav.scss'
import MenuIcon from '@mui/icons-material/Menu';


function TopNav() {
    return (
      <div className='topNavCont'>
        <div className='logoCont'>
          <img src='/images/noa/NOA3.svg' alt='logoSmall' className='topNavLogo' />
        </div>
        <div className='topNavRight'>
            <MenuIcon className='menuIcon'/>
        </div>
      </div>
    );
  }
  
  export default TopNav;
  