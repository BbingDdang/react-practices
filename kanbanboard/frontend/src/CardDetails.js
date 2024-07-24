import React from 'react';
import TaskList from './TaskList';

function CardDetails({card, tasks, addTask, updateTask, deleteTask}) {
    return (
        
        <div className='Card_Details'>
            
            <TaskList 
            card = {card}
            tasks={tasks} 
            addTask ={addTask} 
            updateTask = {updateTask} 
            deleteTask = {deleteTask}/>
        </div>
    );
}

export default CardDetails;