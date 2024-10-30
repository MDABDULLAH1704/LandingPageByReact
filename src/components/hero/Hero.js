import React from 'react'
import './Hero.css'
import heroImg from '../../assets/heroImg.png'

const Hero = () => {
    return (
        <section className='section-hero' id='section-hero'>
            <div className='hero'>
                <div className="heroLeft">
                    <h1>Transform You into a <span>Warrior!</span></h1>
                    <p>A fitness gym is a dedicated space for physical training, offering equipment and classes to improve strength, endurance, and overall health. It fosters community, motivation, and personal growth.</p>
                </div>

                <div className="heroRight">
                    <img src={heroImg} alt="Image" />
                </div>
            </div>
        </section>
    )
}

export default Hero
