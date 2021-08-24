import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav className='navigation'>
            <Link to="./">
                <h3>Logo</h3>
            </Link>
            <ul className='navLinks'>
                <Link to="./about"> 
                <li>About</li>
                </Link> 
                <Link to="./contactus"> 
                <li>Contact Us</li>
                </Link> 
            </ul>
        </nav>
    )
}

export default Nav
