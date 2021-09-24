import React, { useState } from 'react';
import './Header.css';
import logo from '../../assets/logo.svg'
import hamburger from '../../assets/icon-hamburger.svg'
import closeMenu from '../../assets/icon-close.svg'

function Header() {

    const [isOpenMenu, setIsOpenMenu] = useState(false)
    
    const menuButton = isOpenMenu ? closeMenu : hamburger
    const showMenu = isOpenMenu ? "show-menu" : ""

    return (
        <header>
            <div className="hero-img">
                <div className="hero-overlay"></div>
                <nav>
                    <a href=""><img src={logo} alt="" /></a>
                    <ul className={showMenu}>
                        <li><a href=""></a>About</li>
                        <li><a href=""></a>Careers</li>
                        <li><a href=""></a>Event</li>
                        <li><a href=""></a>Products</li>
                        <li><a href=""></a>Support</li>
                    </ul>
                    <img className="burger" onClick={() => { setIsOpenMenu(!isOpenMenu) }} src={menuButton} alt="" />
                </nav>
                <div className="hero-title">
                    <h1>Immersive experiences that deliver</h1>
                </div>
            </div>
        </header>
    )
}

export default Header
