import React from 'react';
import CardDetails from './CardDetails';
import * as styles from './assets/css/KanbanBoard.css';

function Card(props) {
    return (
        <div className={styles._Card}>
            <div className={styles.Card_Title}>Card_Name</div>
            <CardDetails />
        </div>
    );
}

export default Card;