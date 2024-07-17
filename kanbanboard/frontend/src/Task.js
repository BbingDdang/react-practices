import React from 'react';
import * as styles from './assets/css/KanbanBoard.css';

function Task(props) {
    return (
        <li className={styles._Task}>
            <input type='checkbox' checked={true} onChange={() => {}}/>
            내용 
            <a href='#' className='Task_Remove'></a>
        </li>
    );
}

export default Task;