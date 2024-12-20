import React from 'react'
import './Footer.css'
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    // openInNewTab function
    const openInNewTab = (url) => { 
        const win = window.open(url, '_blank');
        win.focus();
    };

    return (
        <div className='footer'>
            <div className="footerOne">
                <div className='footerOne-linkedin' onClick={() => openInNewTab('https://www.linkedin.com/in/md-abdullah123/')}><FaLinkedin size={30} /></div>

                <div className='footerOne-github' onClick={() => openInNewTab('https://github.com/MDABDULLAH1704/LandingPageByReact')}><FaGithub size={30} /></div>

                <div className='footerOne-youtube' onClick={() => openInNewTab('https://www.youtube.com/@CodeWithInnovation')}><FaYoutube size={30} /></div>

                <div className='footerOne-instagram' onClick={() => openInNewTab('https://www.instagram.com/codewithinnovation/profilecard/?igsh=MTVsMjFpNWcwMGgxdQ%3D%3D')}><FaInstagram size={30} /></div>
            </div>

            <div className="footerTwo">
                <p>Fitness GYM - {currentYear}  |  ALL RIGHTS RESERVED &copy;</p>
            </div>
        </div >
    )
}

export default Footer
