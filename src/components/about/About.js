import React, { useEffect, useState } from 'react'
import './About.css'
import gymVideo from '../../assets/gym_video.mp4'
import gym2Video from '../../assets/gym2_video.mp4'
import gym3Video from '../../assets/gym3_video.mp4'
import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {
    const [videoSource, setVideoSource] = useState(gymVideo);

    // handleResize function
    const handleResize = () => {
        if (window.innerWidth <= 480) {
            setVideoSource(gym3Video);
        } else if (window.innerWidth <= 768) {
            setVideoSource(gym2Video);
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

    // For AOS Animation
    useEffect(() => {
        AOS.init({
            duration: 800,
        });
    }, []);

    return (
        <div className='about' id='section-about'>
            <div className="aboutLeft">
                <video
                    className='aboutVideo'
                    src={videoSource}
                    autoPlay
                    loop
                    muted
                />

                <div className="aboutRight">
                    <h2 data-aos="zoom-in">Welcome to Fitness GYM</h2>
                    <p data-aos="zoom-in">At Fitness GYM, we're all about empowering you to reach your fitness goals in a supportive and motivating environment.</p>

                    <h2 data-aos="fade-up" data-aos-delay="300">Our Mission</h2>
                    <p data-aos="fade-up" data-aos-delay="300">We believe fitness should be accessible to everyone. Our mission is to inspire and help you live a healthier, happier life.</p>

                    <h2 data-aos="fade-up" data-aos-delay="500">Who We Are</h2>
                    <p data-aos="fade-up" data-aos-delay="500">Founded in 2022, our passionate team of certified trainers is dedicated to providing personalized support for all fitness levels. Whether you're just starting or looking to elevate your game, we're here for you!</p>

                    <h2 data-aos="fade-up" data-aos-delay="700">Our Space</h2>
                    <p data-aos="fade-up" data-aos-delay="700">Located in Motihari Bihar, our modern facility features top-notch equipment and a variety of classes to keep your workouts fresh and exciting.</p>

                    <h2 data-aos="fade-up" data-aos-delay="900">Join Us! </h2>
                    <p data-aos="fade-up" data-aos-delay="900">Become part of our vibrant community and let's achieve your fitness goals together! Ready to get started? Sign up today!</p>

                    <button className='signUp-btn'>Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default About
