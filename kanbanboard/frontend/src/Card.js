import React, { useState } from 'react';
import CardDetails from './CardDetails';
import {_Card, Card_Title, Card_Title_Open} from './assets/scss/Card.scss'
import './assets/scss/Card.scss';

function Card({card}) {

    const [open, setOpen] = useState(true)

    const onHandle = () => {
        setOpen(!open)
    }

    if (open) {
        return (
            <div className={_Card}>
                <div className={Card_Title + " " + Card_Title_Open} onClick={onHandle}>{card.title}</div>
                {card.description}
                <CardDetails card = {card}/>
            </div>
        );
    }
    else {
        return (
            <div className={_Card}>
                <div className={Card_Title} onClick={onHandle}>{card.title}</div>
                {card.description}
            </div>
        );
    }

    
}

export default Card;