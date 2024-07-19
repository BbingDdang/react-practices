import React,{useState,use} from 'react';
import CardList from './CardList';
import cards from './assets/json/data.js'
import {Kanban_Board} from './assets/scss/KanbanBoard.scss'
import './assets/scss/KanbanBoard.scss';

function KanbanBoard() {
    const todoCard = cards.filter(e => e.status === 'ToDo')
    const doingCard = cards.filter(e => e.status === 'Doing')
    const doneCard = cards.filter(e => e.status === 'Done')
    return (
        <div className={Kanban_Board}>  
            <CardList title = {"Todo"} cards = {todoCard}/>
            <CardList title = {"Doing"} cards = {doingCard}/>
            <CardList title = {"Done"} cards = {doneCard}/>
        </div>
    );
}

export default KanbanBoard;