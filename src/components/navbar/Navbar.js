import React from 'react'
import './Navbar.css'
import gymLogo from '../../assets/gymLogo.png'

const Navbar = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToAbout = () => {
        const aboutSection = document.getElementById('section-about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='navbar'>
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
