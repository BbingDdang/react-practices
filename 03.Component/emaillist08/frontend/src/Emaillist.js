import React from 'react';
import Email from './Email';
import {Email_list} from './assets/scss/Emaillist.scss'


function Emaillist() {
    const elist = [
        {name: "둘리", email: "dooly@gmail.com"},
        {name: "마이콜", email: "michol@gmail.com"},
        {name: "도우너", email: "douner@gmail.com"},
        {name: "또치", email: "ddochi@gmail.com"}
    ]
    return (
        <ul className={Email_list}>
            {elist.map((l, idx) => <Email key={idx} name={l.name} email = {l.email} />)}
        </ul>
    );
}

export default Emaillist;