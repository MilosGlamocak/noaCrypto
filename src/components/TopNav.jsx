import React, { useRef, useState, useEffect } from 'react';
import '../styles/TopNav.scss';
import MenuIcon from '@mui/icons-material/Menu';
import NavWindowMobile from './NavWindowMobile';

function TopNav() {
    const [open, setOpen] = useState(false);
    const [topStyle, setTopStyle] = useState('0rem');
    const navRef = useRef(null);
    const lastScrollTop = useRef(0);
    const tolerance = 1; // Tolerance threshold in pixels
    const viewThreshold = window.innerHeight * 0.3; // 30vh in pixels

    const handleOpen = () => {
        if (open) {
            navRef.current.style.animation = '0.2s closeNav forwards ease';
            setTimeout(() => {
                setOpen(!open);
                document.body.style.overflow = '';
            }, 200);
        } else {
            setOpen(!open);
            document.body.style.overflow = 'hidden';
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (currentScrollTop <= viewThreshold) {
                // Always visible if within the first 30vh
                setTopStyle('0rem');
            } else if (currentScrollTop > lastScrollTop.current + tolerance) {
                // Scrolling down
                setTopStyle('-10rem');
            } else if (currentScrollTop < lastScrollTop.current - tolerance) {
                // Scrolling up
                setTopStyle('0rem');
            }

            lastScrollTop.current = currentScrollTop <= 0 ? 0 : currentScrollTop;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className='topNavCont' ref={navRef} style={{ top: topStyle }}>
                <div className='logoCont'>
                    <img src='/images/noa/NOA3.svg' alt='logoSmall' className='topNavLogo' />
                </div>
                <div className='topNavRight'>
                    <MenuIcon className='menuIcon' onClick={handleOpen} />
                </div>
            </div>
            {open && <NavWindowMobile handleOpen={handleOpen} ref={navRef} />}
        </>
    );
}

export default TopNav;
