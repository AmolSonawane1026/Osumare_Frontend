import React, { useState } from 'react'
import "./Navbar.css"
import Logo from "../../assets/Logo/Logo.png"
import { Menu, X } from 'lucide-react'

const Navbar = ({ onOpen }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen)
    }
  return (
   <>
    <nav className='navbar'>

        <div className='logo'>
            <img src={Logo} alt="Logo" />
        </div>

        <div className={`middle ${isMenuOpen ? 'show' : ''}`}>
            <ul className="ul_list">
                <li className="li_list">About Us</li>
                <li className="li_list">Features</li>
                <li className="li_list">More Option</li>
                <li className="li_list">Contact</li>
            </ul>

            <div className="buttons mobile_buttons">
            <button className="btn log_in">Log In</button>
            <button className="btn sign_up" onClick={onOpen}>Sign Up</button>
          </div>
        </div>

        <div className="buttons desktop_buttons">
          <button className="btn log_in">Log In</button>
          <button className="btn sign_up" onClick={onOpen}>Sign Up</button>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
    </nav>
   </>
  )
}

export default Navbar
