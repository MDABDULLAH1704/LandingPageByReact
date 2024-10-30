import React, { useEffect, useState } from 'react'
import './About.css'
import gymVideo from '../../assets/gym_video.mp4'
import gymVideo768 from '../../assets/gym_video768.mp4'
import gymVideo480 from '../../assets/gym_video480.mp4'

const About = () => {
    const [videoSource, setVideoSource] = useState(gymVideo);

    // handleResize function
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

                    <div className="aboutRight">
                        <h2>Welcome to Fitness GYM</h2>
                        <p>At Fitness GYM, we're all about empowering you to reach your fitness goals in a supportive and motivating environment.</p>

                        <h2>Our Mission</h2>
                        <p>We believe fitness should be accessible to everyone. Our mission is to inspire and help you live a healthier, happier life.</p>

                        <h2>Who We Are</h2>
                        <p>Founded in 2022, our passionate team of certified trainers is dedicated to providing personalized support for all fitness levels. Whether you're just starting or looking to elevate your game, we're here for you!</p>

                        <h2>Our Space</h2>
                        <p>Located in Motihari Bihar, our modern facility features top-notch equipment and a variety of classes to keep your workouts fresh and exciting.</p>

                        <h2>Join Us!</h2>
                        <p>Become part of our vibrant community and let's achieve your fitness goals together! Ready to get started? Sign up today!</p>

                        <button className='signUp-btn'>Sign Up</button>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default About
