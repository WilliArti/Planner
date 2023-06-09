import React from 'react';
import Hour from './Hour';
function Daygrid(props) {
    let hours = [];
    const day = props.day

    for (let i = 0; i <= 23; i++) {
       hours.push(i);
    }
    const dayhours = hours.map((hour)=> (
        <Hour
            key={hour}
            day={day}
            hour={hour}
        />
    )
    
    )

    return (<div className='daygrid'>{dayhours}</div>  );
}

export default Daygrid;