import React, { useEffect } from 'react'
import './Contact.css'
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import AOS from 'aos'
import 'aos/dist/aos.css'


const Contact = () => {
    // For AOS Animation
    useEffect(() => {
        AOS.init({
            duration: 800,
        });
    }, []);

    return (
        <>
            <div className='contact' id='section-contact'>
                <h2> Contact Us </h2>

                <div className="contact-div" data-aos="zoom-in">
                    <p><span><FaMapMarkerAlt /></span> 321 Steel City Way, Lafayette</p>
                    <p><span><FaPhone /></span> (925) 555-0011</p>
                    <p><span><FaEnvelope /></span>  inquiries@fitnessgym.com</p>
                </div>
            </div>

            <hr />
        </>
    )
}

export default Contact