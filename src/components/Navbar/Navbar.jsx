import React from 'react'
import "./Navbar.css"
import Logo from "../../assets/Logo/Logo.png"

const Navbar = () => {
  return (
   <>
    <nav className='navbar'>

        <div className='logo'>
            <img src={Logo} alt="Logo" />
        </div>

        <div className="middle">
            <ul className="ul_list">
                <li className="li_list">About Us</li>
                <li className="li_list">Features</li>
                <li className="li_list">More Option</li>
                <li className="li_list">Contact</li>
            </ul>
        </div>

        <div className="buttons">
            <button className="btn log_in">Log In</button>
            <button className="btn sign_up">Sign Up</button>
        </div>
    </nav>
   </>
  )
}

export default Navbar
