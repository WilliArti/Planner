import React from 'react';
import Hour from './Hour';
function Daygrid() {
    let hours = [];

    for (let i = 0; i <= 23; i++) {
       hours.push(i);
    }
    const dayhours = hours.map((hour)=> (
        <Hour
            key={hour}
        />
    )
    
    )

    return (<div className='daygrid'>{dayhours}</div>  );
}

export default Daygrid;