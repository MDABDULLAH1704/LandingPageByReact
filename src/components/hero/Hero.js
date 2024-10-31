import React, { useEffect } from 'react'
import './Hero.css'
import heroImg from '../../assets/heroImg.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Hero = () => {
    // scrollToAbout function
    const scrollToAbout = () => {
        const aboutSection = document.getElementById('section-about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // For AOS Animation
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <div className='hero' id='section-hero'>
            <div className="heroLeft">
                <h1 data-aos="fade-up" data-aos-delay="500">Transform You into a <span>Warrior!</span> </h1>
                <p data-aos="flip-up" data-aos-delay="800">A fitness gym is a dedicated space for physical training, offering equipment and classes to improve strength, endurance, and overall health. It fosters community, motivation, and personal growth.</p>
                <button onClick={scrollToAbout} className='start-btn'>Get Started</button>
            </div>

            <div className="heroRight">
                <img src={heroImg} alt="Image" data-aos="zoom-in" data-aos-delay="300" />
            </div>
        </div>
    )
}

export default Hero
