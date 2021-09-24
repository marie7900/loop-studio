import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.svg'
import facebook from '../../assets/icon-facebook.svg'
import twitter from '../../assets/icon-twitter.svg'
import pinterest from '../../assets/icon-pinterest.svg'
import instagram from '../../assets/icon-instagram.svg'

function Footer() {
    return (
        <footer>
            <div className="footer-right">
                <a href=""><img src={logo} alt="" /></a>
                <ul className="footer-nav">
                    <li><a href="">About</a></li>
                    <li><a href="">Careers</a></li>
                    <li><a href="">Events</a></li>
                    <li><a href="">Products</a></li>
                    <li><a href="">Support</a></li>
                </ul>
            </div>
            <div className="footer-left">
                <ul className="footer-socials">
                    <li><a href=""><img src={facebook} alt="" /></a></li>
                    <li><a href=""><img src={twitter} alt="" /></a></li>
                    <li><a href=""><img src={pinterest} alt="" /></a></li>
                    <li><a href=""><img src={instagram} alt="" /></a></li>
                </ul>
                <p>© 2021 Loopstudios. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
