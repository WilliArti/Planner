import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './Sidebar.css'
import {BsList} from 'react-icons/bs'
import {SlCalender} from 'react-icons/sl'
import {BsBank} from 'react-icons/bs'
import {BsPersonCircle} from 'react-icons/bs'
import {Link} from 'react-router-dom';

function Sidebar() {
    const [sidebarswitch, setsidebarswitch] = useState(false)

    return ( 
        <div className={sidebarswitch ? 'sidebar open' : 'sidebar closed'}>
            <div className='menu'>
            <BsList size='3rem' color='dark-blue' onClick={() =>setsidebarswitch((prev)=>!prev)}/>    
            </div>
            <ul className='side-bar-list'>
                <li><Link to='/calendar'><a href=""><SlCalender />     {sidebarswitch ? 'Calendar' : ''}</a></Link></li>
                <li><Link to='/money'><a href=""><BsBank />    {sidebarswitch ? 'Budgeting' : ''}</a></Link></li>
                <li><Link><a href=""><BsPersonCircle />    {sidebarswitch ? 'Profile' : ''}</a></Link></li>
            </ul>
        </div>
     );
}

export default Sidebar;