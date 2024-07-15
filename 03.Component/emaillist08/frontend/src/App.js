import React from 'react';
import RegisterForm from './RegisterForm';
import Searchbar from './Searchbar';
import Emaillist from './Emaillist';
import './assets/scss/App.scss';

function App(props) {
    return (
        <div id={'App'}>
            <RegisterForm />
            <Searchbar />
            <Emaillist />
        </div>
        
    );
}

export default App;