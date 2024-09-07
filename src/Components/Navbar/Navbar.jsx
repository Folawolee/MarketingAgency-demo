// import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className="navbar">
            <div className="logo">
                DesioTech.
            </div>
            <div className="menu">
                <ul className='menu-list'>
                    <li>Services</li>
                    <li>Packages</li>
                    <li>Who we are</li>
                    <li>Our Portfolio</li>
                    <li>About Us</li>
                </ul>
                <button className="btn">Contacts</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar