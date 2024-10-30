import React, { useState } from 'react'
import './RespNav.css'
import gymLogo from '../../assets/gymLogo.png'
import { FaBars } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa'
import RespNavList from '../respNavList/RespNavList';

const RespNav = () => {
    const [showMenu, setShowMenu] = useState(false);

    // handleMenuToggle function
    const handleMenuToggle = () => {
        setShowMenu(!showMenu);
    }

    return (
        <>
            <div className='respNav'>
                <div className='respNavLeft'>
                    <img src={gymLogo} alt="Gym Logo" width="140" height="70" />
                </div>

                <div
                    className={`respNavRight ${showMenu ? 'active' : 'faded'}`}
                    onClick={handleMenuToggle}>
                    {showMenu ? <FaTimes /> : <FaBars />}
                </div>
            </div>

            {showMenu && <RespNavList />}
        </>
    )
}

export default RespNav
