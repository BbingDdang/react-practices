import React from 'react'

function App() {
    // const App = document.createElement('div');
    // App.textContent = "Hello World";
    const App = React.createElement('div', /*{id: 'App'}*/null, "Hello World");
    return App;
}

export {App};