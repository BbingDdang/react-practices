import React from 'react';

function TabItem({no, name, active, onclick}) {

    return (
        <li onClick={onclick} className={active ? 'active' : ''}>{name}</li>
    );
}

export default TabItem;