import React, {useState} from 'react';
import Tabs from './Tabs';
import TabView from './TabView';
import tabs from './assets/json/data';
function TabBox() {
    const [activeIdx, setActiveIdx] = useState(0);
    return (
        <div className={'tab-box'}>
            <Tabs 
                selectTab = {(no) => {
                    
                }}
                tabs={tabs.map((e, i) => {
                const {contents, ...rest} = e;
                if (i === activeIdx) {
                    rest.active = true;
                }
                return rest;
            })}/>
            <TabView contents={tabs[activeIdx].contents}/>
        </div>
    );
}

export default TabBox;