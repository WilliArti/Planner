import React from 'react';
import { DateTime, Info } from "luxon";
import { Link, useParams } from 'react-router-dom';
function Calendarmonth() {
    const dt = DateTime.now()
    let param  = useParams().id
    let date 
    if (param == undefined){date = dt}
    else{date= DateTime.fromISO(param)}


    let gridrows
    if ((date.daysInMonth >30 )&& (date.startOf('month').weekday>5)){
        gridrows = 6
    }else {gridrows = 5}

    let grid = []

    for (let i = 0; i < 7*gridrows; i++) {
        grid.push(date.startOf('month').startOf('week').plus({days: i}))
     }

     const gridmonth = grid.map(day=>(
        <div className='dayinmonth'>
            <Link to={`/calendar/day/${day.toISODate()}`} >
                {day.toFormat('ccc d')} 
            </Link>
        </div>
     ))

     const weekdays = Info.weekdays()
     const weekdaygrid = weekdays.map(weekday=>(
        <div className='dayin'>
            {weekday}
        </div>
     ))

    
    return (
    <div>
        <div className='weekin'>
            {weekdaygrid}
        </div>
        <div className='monthgrid'>
            {gridmonth}
        </div>
    </div> );
}

export default Calendarmonth;