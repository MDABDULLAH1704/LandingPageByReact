import React from 'react'
import './Contact.css'
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';


const Contact = () => {
    return (
        <section className='section-contact' id='section-contact'>
            <div className='contact'>
                <h2>Contact Us </h2>

                <div className="contact-div">
                    <p><span><FaMapMarkerAlt /></span> 321 Steel City Way, Lafayette, CA 94549</p>
                    <p><span><FaPhone /></span> (925) 555-0011</p>
                    <p><span><FaEnvelope /></span>  inquiries@fitnessgym.com</p>
                </div>
            </div>
        </section>
    )
}

export default Contact
