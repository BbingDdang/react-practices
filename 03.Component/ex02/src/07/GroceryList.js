import React, { Component } from 'react';
import GroceryItem from './GroceryItem';

class GroceryList extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        const {groceries} = this.props;
        return (
            <ol className={'grocery-list'}>
                {groceries.map(e => <GroceryItem key={e.no} name={e.name} count={e.count}/>)}
            </ol>
        );
    }
}

export default GroceryList;