import React, {useEffect, useState} from 'react';
import { getPlacesData } from './api/api';
import './App.scss';
import Button from './components/Button/Button'
import TabsBar from './components/TabsBar/TabsBar'
import Dropdown from './components/Dropdowns/Dropdown'
import Tab from './components/Tab/Tab'
import { Switch } from '@mui/material/Switch';


const App = () => {

    const [places, setPlaces] = useState([])
    //get data from TravelAdvisor api
    useEffect(() => {
        getPlacesData()
            .then((data) => {
                setPlaces(data)
            });
    }, []);

    return (
        <div>
           
            <h1>Voyage Serein</h1>
            <Switch defaultChecked />
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
