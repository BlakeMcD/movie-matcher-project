import React from 'react'
import { Link } from 'react-router-dom'
import movieMatcherLogo from '/home/blake/Development/code/Phase-2/movie-matcher-project/src/Images/movieMatcherLogo.png'

function Nav() {
    return (
        <nav className='navigation'>
            <Link to="./">
                <h3><img className="logo" src={movieMatcherLogo} alt="I'm stoked I got this working, haha"/></h3>
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


// {<img src={require('/home/blake/Development/code/Phase-2/movie-matcher-project/src/images/movieMatcherLogo.png')} alt="I made this heh heh"/>}