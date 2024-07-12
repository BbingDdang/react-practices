import React from 'react';

function Item({name, isPacked}) {
    if (isPacked){
        return <li className='item'>{name} v</li>
    }
    else{
        return <li className='item'>{name}</li>    
    }
    
}

export default Item;