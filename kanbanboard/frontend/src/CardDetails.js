import React from 'react';
import TaskList from './TaskList';
import * as styles from './assets/css/KanbanBoard.css';

function CardDetails(props) {
    return (
        <div className='Card_Details'>
            CardDetailsContents
            <TaskList />
        </div>
    );
}

export default CardDetails;