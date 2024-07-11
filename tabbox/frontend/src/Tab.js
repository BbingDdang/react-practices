import React from 'react';

function Tab({name, active}) {
    return (
        <li className={active ? 'active' : ''} value={active}>
            {name}
        </li>
    );
}

export default Tab;