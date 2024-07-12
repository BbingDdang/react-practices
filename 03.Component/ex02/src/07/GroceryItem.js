// import React, {Component} from 'react';

// class GroceryItem extends Component {
//     render() {
//         const {name, count} = this.props;
//         return (
//             <li>
//                 <strong>{name}</strong>
//                 <span>{count}</span>
//             </li>
//         );
//     }
    
// }

// export default GroceryItem;
import React from 'react';

function GroceryItem({name, count}) {
    
    return (
        <li>
            <strong>{name}</strong>
            <span>{count}</span>
        </li>
    );
}

export default GroceryItem;