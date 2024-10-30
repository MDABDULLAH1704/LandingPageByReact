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

    // scrollToAbout function
    const scrollToTraining = () => {
        const aboutSection = document.getElementById('section-training');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // scrollToAbout function
    const scrollToGallery = () => {
        const aboutSection = document.getElementById('section-gallery');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // scrollToAbout function
    const scrollToTestimonials = () => {
        const aboutSection = document.getElementById('section-testimonials');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // scrollToAbout function
    const scrollToContact = () => {
        const aboutSection = document.getElementById('section-contact');
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
                <div onClick={scrollToTraining}>TRAINING</div>
                <div onClick={scrollToGallery}>GALLERY</div>
                <div onClick={scrollToTestimonials}>TESTIMONIALS</div>
                <div onClick={scrollToContact}>CONTACT</div>
            </div>
        </div>
    )
}

export default Navbar
