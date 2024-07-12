import React from 'react';

function TabItem({name, active, onclick}) {

    return (
        <li onClick={onclick} className={active ? 'active' : ''}>{name}</li>
    );
}

export default TabItem;