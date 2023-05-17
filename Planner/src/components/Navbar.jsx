import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import  './Navbar.css'
import Image from '../assets/icon.png'

function Navbar() {
    return ( 
        <header>
            <Link to='/'>
                <h1><img src={Image} alt="" />Planner</h1>
            </Link>
            <ul className='nav-bar-list'> 
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/calendar'>calendar</Link></li>
                <li><a href="">Account</a></li>
            </ul>

        </header>

        
     );
}

export default Navbar;