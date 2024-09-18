import React, { useRef, useState } from 'react'
import '../styles/TopNav.scss'
import MenuIcon from '@mui/icons-material/Menu';
import NavWindowMobile from './NavWindowMobile';


function TopNav() {
    let [open, setOpen] = useState(false);
    const navRef = useRef(null);

    const handleOpen = () => {
        if (open) {
            navRef.current.style.animation = '0.2s closeNav forwards ease';
            setTimeout(() => {
                setOpen(!open);
                document.body.style.overflow = ''; // Restore scrolling
            }, 200);
        } else {
            setOpen(!open);
            document.body.style.overflow = 'hidden'; // Disable scrolling
        }
    };
    
    
    return (
        <>
        <div className='topNavCont'>
            <div className='logoCont'>
            <img src='/images/noa/NOA3.svg' alt='logoSmall' className='topNavLogo' />
            </div>
            <div className='topNavRight'>
                <MenuIcon className='menuIcon' onClick={handleOpen}/>
            </div>
        </div>
        {
            open ? <NavWindowMobile handleOpen={handleOpen} ref={navRef}/> : <></>
        }
        
        </>
      
    );
  }
  
  export default TopNav;
  