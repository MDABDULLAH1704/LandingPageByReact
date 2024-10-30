import React from 'react'
import './RespNavList.css'

const RespNavList = ({ closeMenu }) => {
    // scrollToTop function
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        closeMenu(); // Close menu when HOME is clicked
    };

    // scrollToAbout function
    const scrollToAbout = () => {
        const aboutSection = document.getElementById('section-about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
            closeMenu(); // Close menu when ABOUT is clicked
        }
    };

    return (
        <div className='respNavList'>
            <div onClick={scrollToTop} className='respNavList-div'>HOME</div>
            <div onClick={scrollToAbout} className='respNavList-div'>ABOUT</div>
            <div className='respNavList-div'>TRAINING</div>
            <div className='respNavList-div'>GALLERY</div>
            <div className='respNavList-div'>TESTIMONIALS</div>
            <div className='respNavList-div'>CONTACT</div>
        </div>
    )
}

export default RespNavList
