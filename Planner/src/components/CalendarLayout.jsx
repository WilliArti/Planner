import React, { useState } from 'react';
import { Outlet, Link, useLocation, useParams, useNavigate} from "react-router-dom"
import './Calendar.css'
import { DateTime } from "luxon";
import {BsChevronLeft} from "react-icons/bs"
import {BsChevronRight} from "react-icons/bs"
import { Button, SegmentedControl } from '@mantine/core';



function CalendarLayout() {
    const dt = DateTime.now()
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
                <Button radius="lg">
                    Today
                </Button>
                </Link >
                <div >
                    
                    <Link to={`${datepath()}/${prev.toISODate()}`}>
                        <BsChevronLeft className='arrow'/>     
                    </Link>
                    <Link to={`${datepath()}/${next.toISODate()}`}>
                        <BsChevronRight className='arrow'/>
                    </Link>
                    <span>{(datepath()=='day') ? date.toFormat('DDDD') : date.toFormat('LLLL yyyy')}</span>
                </div>
                <div>
                    <select onChange={event => handleChange(event.target.value)}>
                        <option value="week" >week</option>
                        <option value="day" selected= {datepath()=='day'}>day</option>
                        <option value="month" selected= {datepath()=='month'}>month</option>
            
                    </select>
                    <SegmentedControl
                        onChange={event => handleChange(event)}
                        defaultValue={datepath()}
                        data={[
                            { label: 'day', value: 'day' },
                            { label: 'week', value: 'week' },
                            { label: 'month', value: 'month' },
                        ]}
                    />

                </div>
            </div>
            <Outlet className='gridcontainer'/>

        </div> 
    );
}

export default CalendarLayout;