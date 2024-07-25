import React, { useState } from 'react';
import {_Task, Task_Remove} from './assets/scss/Task.scss'
import './assets/scss/Task.scss';

function Task({card, task, updateTask, deleteTask}) {
    const [check, setCheck] = useState(task.done == 'Y' ? true : false)
    console.log(task.no);

    return (
        <li className={_Task}>
            <input type='checkbox' checked={check} onChange={() => {updateTask(task); setCheck(prev => !prev)}}/>
            {task.name}
            <a href='#' className={Task_Remove} onClick={()=>{
                deleteTask(task);
            }
                
                }></a>
        </li>
    );
}

export default Task;