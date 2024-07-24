import React,{useState,useEffect} from 'react';
import CardList from './CardList';
import cards from './assets/json/data.js'
import {Kanban_Board} from './assets/scss/KanbanBoard.scss'
import './assets/scss/KanbanBoard.scss';

function KanbanBoard() {
    
    return (
        <div className={Kanban_Board}>  
            <CardList title = {"Todo"}/>
            <CardList title = {"Doing"}/>
            <CardList title = {"Done"}/>
        </div>
    );
}

export default KanbanBoard;