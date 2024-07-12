import React, {useState} from 'react';
import TabItem from './TabItem';

function Tabs({tabs}) {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex(index);
    }
    return (
        <ul>
            {tabs.map((t, idx) => <TabItem key={t.no} name={t.name} active={activeIndex === idx} onclick = {() => handleClick(idx)} />)}
        </ul>
    );
}

export default Tabs;