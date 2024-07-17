import React from 'react';
import Task from './Task';
import * as styles from './assets/css/KanbanBoard.css';

function TaskList(props) {
    return (
        <div className={styles.Task_List}>
            <ul>
                <Task />
            </ul>
            <input className={styles.Input_Add_Task} type='text' placeholder='테스크 추가' />
        </div>
    );
}

export default TaskList;