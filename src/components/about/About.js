import React from 'react'
import './About.css'
import gymVideo from '../../assets/gym_video.mp4'

const About = () => {
    return (
        <section className='section-about' id='section-about'>
            <div className='about'>
                <div className="aboutLeft">
                    <video
                        className='aboutVideo'
                        src={gymVideo}
                        autoPlay
                        loop
                        muted
                    />
                </div>

                <div className="aboutRight"></div>
            </div>
        </section>
    )
}

export default About
