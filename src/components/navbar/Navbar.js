import React from 'react'
import './Navbar.css'
import gymLogo from '../../assets/gymLogo.png'

const Navbar = () => {

    return (
        <div className='navbar'>
            <div className="navbarLeft">
                <img src={gymLogo} alt="Gym Logo" width="160" height="80" />
            </div>

            <div className="navbarRight ${menuActive ? 'active' : ''}">
                <div>HOME</div>
                <div>ABOUT</div>
                <div>TRAINING</div>
                <div>GALLERY</div>
                <div>TESTIMONIALS</div>
                <div>CONTACT</div>
            </div>
        </div>
    )
}

export default Navbar
