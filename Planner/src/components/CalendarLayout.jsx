import React from 'react';
import { Outlet } from "react-router-dom"
import './Calendar.css'

function CalendarLayout() {
    return ( 
        <div className='calendarlayout'>
            <h1>CalendarLayout</h1>
            <Outlet />
            <h1>CalendarLayout</h1>

        </div> 
    );
}

export default CalendarLayout;