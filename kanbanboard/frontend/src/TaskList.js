import React from 'react';
import Task from './Task';
import {Task_List, Input_Add_Task} from './assets/scss/TaskList.scss'
import './assets/scss/TaskList.scss';

function TaskList({card, tasks, addTask, updateTask, deleteTask}) {
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            addTask({name: event.target.value, cardNo: card.no});
        }
    };

    return (
        <div className={Task_List}>
            <ul>
                {tasks?.map(task => (
                    <Task 
                    key={task.no} 
                    card = {card}
                    task={task} 
                    updateTask = {updateTask} 
                    deleteTask = {deleteTask}/>
                ))}
            </ul>
            <input className={Input_Add_Task} type='text' placeholder='테스크 추가' onKeyDown={handleKeyDown}/>
        </div>
    );
}

export default TaskList;