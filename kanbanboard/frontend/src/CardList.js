import React from 'react';
import Card from './Card';
import * as styles from './assets/css/KanbanBoard.css';


function CardList(props) {
    return (
        <div className={styles.Card_List}>
            <h1>CardListName</h1>
            <Card />
        </div>
    );
}

export default CardList;