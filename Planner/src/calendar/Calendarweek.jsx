import React from 'react';
import { DateTime, Info } from "luxon";
import Daygrid from './calendarcomponent/daygrid';
import { Link, useParams } from 'react-router-dom';

function Calendarweek() {
   
    
    const dt = DateTime.now()
    let param  = useParams().id
    let date 
    if (param == undefined){date = dt}
    else{date= DateTime.fromISO(param)}
    
    let weekday = [] 
    for (let i = 0; i <= 6; i++) {
        weekday.push(date.startOf('week').plus({days: i}))
     }
    const weekgrid = weekday.map(day=>(
            
                
                <Daygrid 
                key={day.toFormat('ccc d')}
                id={day.toFormat('ccc d')}
                />
            
    ))
    
    const weekdays = weekday.map(day =>(
        <div className='dayin'>
            <Link to={`/calendar/day/${day.toISODate()}`} >
                {day.toFormat('ccc d')} 
            </Link>
        </div>

    )
    )


    return ( <> <div className='weekin'>{weekdays}</div><div className='weekgrid'>{weekgrid}</div></> );
}

export default Calendarweek;