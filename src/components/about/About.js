import React, { useEffect, useState } from 'react'
import './About.css'
import gymVideo from '../../assets/gym_video.mp4'
import gymVideo768 from '../../assets/gym_video768.mp4'
import gymVideo480 from '../../assets/gym_video480.mp4'

const About = () => {
    const [videoSource, setVideoSource] = useState(gymVideo);

    const handleResize = () => {
        if (window.innerWidth <= 480) {
            setVideoSource(gymVideo480);
        } else if (window.innerWidth <= 768) {
            setVideoSource(gymVideo768);
        } else {
            setVideoSource(gymVideo);
        }
    };

    useEffect(() => {
        handleResize(); // Set the initial video source
        window.addEventListener('resize', handleResize); // Add event listener for window resize

        return () => {
            window.removeEventListener('resize', handleResize); // Cleanup the event listener
        };
    }, []);


    return (
        <section className='section-about' id='section-about'>
            <div className='about'>
                <div className="aboutLeft">
                    <video
                        className='aboutVideo'
                        src={videoSource}
                        autoPlay
                        loop
                        muted
                    />
                </div>

                <div className="aboutRight">
                     About 
                </div>
            </div>
        </section>
    )
}

export default About
