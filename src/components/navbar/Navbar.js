import React, { useEffect, useState } from 'react'
import './Navbar.css'
import gymLogo from '../../assets/gymLogo.png'

const Navbar = () => {
    const [scrolling, setScrolling] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > window.innerHeight) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // scrollToTop function
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // scrollToAbout function
    const scrollToAbout = () => {
        const aboutSection = document.getElementById('section-about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={`navbar ${scrolling ? 'scrolled' : ''}`}>
            <div className="navbarLeft" onClick={scrollToTop}>
                <img src={gymLogo} alt="Gym Logo" width="160" height="80" />
            </div>

            <div className="navbarRight ${menuActive ? 'active' : ''}">
                <div onClick={scrollToTop}>HOME</div>
                <div onClick={scrollToAbout}>ABOUT</div>
                <div>TRAINING</div>
                <div>GALLERY</div>
                <div>TESTIMONIALS</div>
                <div>CONTACT</div>
            </div>
        </div>
    )
}

export default Navbar
