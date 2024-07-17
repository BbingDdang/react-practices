import React, { useState } from 'react';
import {_Task, Task_Remove} from './assets/scss/Task.scss'
import './assets/scss/Task.scss';

function Task({task}) {
    const [check, setCheck] = useState(false)

    return (
        <li className={_Task}>
            <input type='checkbox' checked={check} onChange={() => {setCheck(!check)}}/>
            {task.name}
            <a href='#' className={Task_Remove}></a>
        </li>
    );
}

export default Task;