import React from 'react';
import TaskList from './TaskList';

function CardDetails({description, card}) {
    return (
        <div className='Card_Details'>
            {description}
            <TaskList tasks={card.tasks}/>
        </div>
    );
}

export default CardDetails;