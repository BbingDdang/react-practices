import React from 'react';
import CardList from './CardList';
import data from './assets/json/data.js'
import * as styles from './assets/css/KanbanBoard.css';



function KanbanBoard() {
    return (
        <div className={styles.Kanban_Board}>  
            <CardList data = {data}/>
        </div>
    );
}

export default KanbanBoard;