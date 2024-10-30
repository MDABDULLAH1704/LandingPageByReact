import React from 'react'
import './Hero.css'
import heroImg from '../../assets/heroImg.png'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="heroLeft">
                <h1>Transform You into a Warrior!</h1>
                <p>A fitness gym is a dedicated space for physical training, offering equipment and classes to improve strength, endurance, and overall health. It fosters community, motivation, and personal growth.</p>
            </div>

            <div className="heroRight">
                <img src={heroImg} alt="Image" />
            </div>
        </div>
    )
}

export default Hero
