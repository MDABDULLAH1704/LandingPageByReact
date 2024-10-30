import React, { useEffect, useState } from 'react'
import './RespNav.css'
import gymLogo from '../../assets/gymLogo.png'
import { FaBars } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa'
import RespNavList from '../respNavList/RespNavList';

const RespNav = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    // handleMenuToggle function
    const handleMenuToggle = () => {
        setShowMenu(!showMenu);
    }

    // scroll logic
    const handleScroll = () => {
        if (window.scrollY > window.innerHeight) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // scrollToTop function
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <div className={`respNav ${scrolling ? 'scrolled' : ''}`}>
                <div onClick={scrollToTop} className='respNavLeft'>
                    <img src={gymLogo} alt="Gym Logo" width="140" height="70" />
                </div>

                <div
                    className={`respNavRight ${showMenu ? 'active' : 'faded'}`}
                    onClick={handleMenuToggle}>
                    {showMenu ? <FaTimes /> : <FaBars />}
                </div>
            </div>

            {showMenu && <RespNavList closeMenu={handleMenuToggle} />}
        </>
    )
}

export default RespNav
