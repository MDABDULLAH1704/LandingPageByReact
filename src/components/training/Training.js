import React, { useEffect } from 'react'
import './Training.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Training = () => {
    // For AOS Animation
    useEffect(() => {
        AOS.init({
            duration: 800,
        });
    }, []);

    return (
        <div className='training' id='section-training' data-aos="zoom-in" data-aos-delay="100">
            <h2 data-aos="fade" data-aos-delay="300">Welcome to Fitness GYM Training!</h2>
            <p data-aos="fade" data-aos-delay="300">At Fitness GYM, we empower you to reach your fitness goals with personalized training options. Whether you want to build strength, boost endurance, or improve your health, we've got you covered!</p>

            <h2 data-aos="fade" data-aos-delay="400">Personal Training</h2>
            <p data-aos="fade" data-aos-delay="400">Work one-on-one with our certified trainers to create a custom workout plan tailored to your needs.</p>

            <h2 data-aos="fade" data-aos-delay="500">Specialized Programs</h2>
            <p data-aos="fade" data-aos-delay="500">From weight loss to muscle gain, our targeted programs include training and nutrition plans to help you succeed.</p>

            <h2 data-aos="fade" data-aos-delay="600">Meet Our Trainers</h2>
            <p data-aos="fade" data-aos-delay="600">Our passionate trainers bring expertise and dedication to help you on your fitness journey.</p>

            <h2 data-aos="fade" data-aos-delay="700">Success Stories</h2>
            <p data-aos="fade" data-aos-delay="700">Discover how our members transformed their lives through our training programs!</p>

            <h2 data-aos="fade" data-aos-delay="800">Join Us Today!</h2>
            <p data-aos="fade" data-aos-delay="800">Explore our membership options and find the perfect fit for you. Contact us for a free consultation or to sign up for your first class!</p>
        </div>
    )
}

export default Training
