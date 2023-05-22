import React, { useState } from 'react';
import { Outlet, Link, useLocation, useParams, useNavigate} from "react-router-dom"
import './Calendar.css'
import { DateTime } from "luxon";
import {BsChevronLeft} from "react-icons/bs"
import {BsChevronRight} from "react-icons/bs"


function CalendarLayout() {
    const dt = DateTime.now()
    console.log(dt.toISODate())
    const location = useLocation().pathname
    let param  = useParams().id
    let date 
    if (param == undefined){date = dt}
    else{date= DateTime.fromISO(param)}
    let next 
    let prev
    if (datepath() == 'day'){ next = date.plus({days:1}); 
        prev = date.minus({days:1})}
    else if (datepath() == 'week'){ next = date.plus({days:7});
        prev = date.minus({days:7})}
    else if (datepath() == 'month'){ next = date.plus({months:1});
        prev = date.minus({months:1})}
     
    

    let navigate = useNavigate();

    function handleChange(value) {
        navigate(`${value}/${param ? param : ''}`);
    }

    

    
   
    
    //* datepath is used now in which calendar path i am right now
    function datepath() {
        const parts = location.split('/');
        if(parts.length>=3) return parts[2]
        else return 'week'
    }
    
    console.log(datepath())

    return ( 
        <div >
            <div className='calendarlayout'>
                <Link to={`${datepath()}/${dt.toISODate()}`}>
                    <button>Today</button>
                </Link>
                <div>
                    
                    <Link to={`${datepath()}/${prev.toISODate()}`}>
                        <BsChevronLeft />     
                    </Link>
                    <Link to={`${datepath()}/${next.toISODate()}`}>
                        <BsChevronRight />
                    </Link>
                    <span>{(datepath()=='day') ? date.toFormat('DDDD') : date.toFormat('LLLL yyyy')}</span>
                </div>
                <div>
                    <select onChange={event => handleChange(event.target.value)}>
                        <option>Select View</option>
                        <option value="day">day</option>
                        <option value="week">week</option>
                        <option value="month">month</option>
                    </select>
                </div>
            </div>
            <Outlet />
            <h1>CalendarLayout</h1>

        </div> 
    );
}

export default CalendarLayout;