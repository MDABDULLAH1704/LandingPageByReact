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

    // scrollToAbout function
    const scrollToTraining = () => {
        const aboutSection = document.getElementById('section-training');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
            closeMenu(); // Close menu when ABOUT is clicked
        }
    };

    // scrollToAbout function
    const scrollToGallery = () => {
        const aboutSection = document.getElementById('section-gallery');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
            closeMenu(); // Close menu when ABOUT is clicked
        }
    };

    // scrollToAbout function
    const scrollToTestimonials = () => {
        const aboutSection = document.getElementById('section-testimonials');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
            closeMenu(); // Close menu when ABOUT is clicked
        }
    };

    // scrollToAbout function
    const scrollToContact = () => {
        const aboutSection = document.getElementById('section-contact');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
            closeMenu(); // Close menu when ABOUT is clicked
        }
    };


    return (
        <div className='respNavList'>
            <div onClick={scrollToTop} className='respNavList-div'>HOME</div>
            <div onClick={scrollToAbout} className='respNavList-div'>ABOUT</div>
            <div onClick={scrollToTraining} className='respNavList-div'>TRAINING</div>
            <div onClick={scrollToGallery} className='respNavList-div'>GALLERY</div>
            <div onClick={scrollToTestimonials} className='respNavList-div'>TESTIMONIALS</div>
            <div onClick={scrollToContact} className='respNavList-div'>CONTACT</div>
        </div>
    )
}

export default RespNavList
