import React from 'react';
import TaskList from './TaskList';

function CardDetails({card}) {
    return (
        
        <div className='Card_Details'>
            
            <TaskList tasks={card.tasks}/>
        </div>
    );
}

export default CardDetails;