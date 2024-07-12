import React from 'react';

function TitelBar02() {
    const onHandler = () => {
        console.log('TitleBar02 Click');
    }
    return (
        <div>
            <h4 onClick={onHandler}>
                Function Handler in Function Component(click here!)
            </h4>
        </div>
    )
}

export default TitelBar02;