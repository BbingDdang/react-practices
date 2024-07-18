import React, { useEffect, useState } from 'react';
import RegisterForm from './RegisterForm';
import Searchbar from './Searchbar';
import Emaillist from './Emaillist';
import './assets/scss/App.scss';

function App(props) {

    const [emails, setEmails] = useState(null)

    const fetchEmails = async (keyword) => {
        const response = await fetch(`/api?kw=${keyword ? keyword : ''}`, {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: null
        })
    }

    useEffect(() => {
        fetchEmails()
    }, []);

    return (
        <div id={'App'}>
            <RegisterForm />
            <Searchbar fetchEmails={fetchEmails}/>
            <Emaillist emails={emails} />
        </div>
        
    );
}

export default App;