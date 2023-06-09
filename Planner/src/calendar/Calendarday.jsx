import React from 'react';
import { DateTime, Info } from "luxon";
import Daygrid from './calendarcomponent/daygrid';
import { useParams } from 'react-router-dom';

function Calendarday() {

    const dt = DateTime.now()
    let param  = useParams().id
    let date 
    if (param == undefined){date = dt}
    else{date= DateTime.fromISO(param)}
    return ( 
        <div className='daycalendar'>
            <div className='daycalendarday'>
                {date.toFormat('ccc d')}
            </div>
            <div >
                <Daygrid 
                    day={date.toFormat('ccc d')}
                />
            </div>
            
        </div>
     );
}

export default Calendarday;