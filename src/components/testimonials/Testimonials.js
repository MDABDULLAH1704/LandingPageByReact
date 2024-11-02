import React, { useEffect } from 'react'
import './Testimonials.css'
import testimonials1 from '../../assets/testimonials1.jpg'
import testimonials2 from '../../assets/testimonials2.jpg'
import testimonials3 from '../../assets/testimonials3.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Testimonials = () => {
    // For AOS Animation
    useEffect(() => {
        AOS.init({
            duration: 800,
        });
    }, []);

    return (
        <div className='testimonials' id='section-testimonials'>
            <h2>Customer Feedback</h2> 

            <div className="testimonials-div" data-aos="zoom-in">
                <div data-aos="fade" data-aos-delay="300">
                    <p>"Joining Fitness GYM was one of the best decisions I've made! The trainers are incredibly supportive and have tailored a program for me. I love the variety of classes offered, and I've never felt more motivated. This place feels like a community, and everyone lifts each other up!"</p>
                    <h3>Riya <img src={testimonials1} /></h3>
                </div>

                <div data-aos="fade" data-aos-delay="300">
                    <p>"As someone  who was new to fitness, I was nervous about starting my journey. But the team at Fitness GYM made it easy and enjoyable. The environment is welcoming, and I appreciate how the trainers focus on individual needs. I've seen amazing progress in just a few months!"</p>
                    <h3>David <img src={testimonials2} /></h3>
                </div>

                <div data-aos="fade" data-aos-delay="300">
                    <p>"Fitness GYM has changed my life! The state-of-the-art equipment and diverse classes keep my workouts exciting. The trainers are knowledgeable and genuinely care about my progress. I'm not just reaching my fitness goals; I'm having fun while doing it!"</p>
                    <h3>Tara <img src={testimonials3} /></h3>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
