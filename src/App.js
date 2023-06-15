import React from 'react';
import './App.scss';
import Button from './components/Button/Button'
import TabsBar from './components/TabsBar/TabsBar'
import Dropdown from './components/Dropdowns/Dropdows'
import Tab from './components/Tab/Tab'


const App = () => {
    return (
        <div>
            <h1>Voyage Serein</h1>
            <Button text="bouton" />
            <Button text="bouton" outline />
            <Dropdown></Dropdown>
            <TabsBar>
                <Tab text="Potato"/>
                <Tab text="Potato" active/>
                <Tab text="Potato"/>
            </TabsBar>
        </div>
    );
}


export default App;