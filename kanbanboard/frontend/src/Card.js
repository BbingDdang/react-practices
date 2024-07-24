import React, { useEffect, useState } from 'react';
import CardDetails from './CardDetails';
import {_Card, Card_Title, Card_Title_Open} from './assets/scss/Card.scss'
import './assets/scss/Card.scss';

function Card({card, tasks, fetchTask, fetchPost, addTask, updateTask, deleteTask}) {

    const [open, setOpen] = useState('N')

    const onHandle = () => {
        setOpen(!open)
    }

    

    if (open) {
        return (
            
            <div className={_Card}>
                <div className={Card_Title + " " + Card_Title_Open} onClick={onHandle}>{card.title}</div>
                {card.description}
                <CardDetails 
                card = {card} 
                tasks = {tasks.filter(e=>e.cardNo === card.no)} 
                addTask={addTask} 
                updateTask={updateTask} 
                deleteTask={deleteTask}/>
            </div>
        );
    }
    else {
        return (
            <div className={_Card}>
                <div className={Card_Title} onClick={onHandle} card = {card} tasks = {tasks.filter(e=>e.cardNo === card.no)} addTask={addTask} updateTask={updateTask} deleteTask={deleteTask}>{card.title} </div>
                {card.description}
            </div>
        );
    }

    
}

export default Card;