import React from 'react';

function Clock01(props) {
    const now = new Date();
    let hours = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    if (hours < 10) {
        hours = '0' + hours; 
    }

    if (min < 10) {
        min = '0' + min;
    }

    if (sec < 10) {
        sec = '0' + sec;    
    }

    return (
        <div>
            {hours+":"+min+":"+sec}
        </div>
    );
}

    

export default Clock01;