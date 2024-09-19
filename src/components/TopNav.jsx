import React, { useRef, useState, useEffect } from 'react';
import '../styles/TopNav.scss';
import MenuIcon from '@mui/icons-material/Menu';
import NavWindowMobile from './NavWindowMobile';

function TopNav() {
    const [open, setOpen] = useState(false);
    const [transformStyle, setTransformStyle] = useState('translateY(0)');
    const [bgColor, setBgColor] = useState('rgba(0, 0, 0, 0.0)');
    const navRef = useRef(null);
    const lastScrollTop = useRef(0);
    const tolerance = 5; // Tolerance threshold in pixels
    const viewThreshold = window.innerHeight * 0.15; // 30vh in pixels

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
                setTransformStyle('translateY(0)');
                setBgColor('rgba(0, 0, 0, 0.0)');
            } else if (currentScrollTop > lastScrollTop.current + tolerance) {
                setTransformStyle('translateY(-100%)');
                setBgColor('rgba(0, 0, 0, 0.2)');
            } else if (currentScrollTop < lastScrollTop.current - tolerance) {
                setTransformStyle('translateY(0)');
                setBgColor('rgba(0, 0, 0, 0.2)');
            }

            lastScrollTop.current = currentScrollTop <= 0 ? 0 : currentScrollTop;
        };

        // Use requestAnimationFrame for smoother updates
        const handleScrollRAF = () => {
            requestAnimationFrame(handleScroll);
        };
        window.addEventListener('scroll', handleScrollRAF);

        return () => {
            window.removeEventListener('scroll', handleScrollRAF);
        };
    }, []);

    return (
        <>
            <div className='topNavCont' ref={navRef} style={{ transform: transformStyle, backgroundColor: bgColor }}>
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
