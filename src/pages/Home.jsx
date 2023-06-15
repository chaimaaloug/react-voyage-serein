import React, {useEffect, useState} from 'react';
import Button from '../components/Button/Button'
import { getPlacesData } from '../api/api';
import TabsBar from '../components/TabsBar/TabsBar'
import Tab from '../components/Tab/Tab'
import { Link } from 'react-router-dom';
import Badge from './components/Badge/Badge';

const Home = () => {

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
            <h1>Voyage Serein - Home Page</h1>
            <Badge text="Badge1"/>
            <Button text="bouton" />
            <Button text="bouton" outline />
            <TabsBar>
                <Tab text="Potato"/>
                <Tab text="Potato" active/>
                <Tab text="Potato"/>
            </TabsBar>

            <Link to="/contact">Link to contact page</Link> <br />
            <Link to="/about">Link to contact about</Link>
            <p>Css Testing</p>
        </div>
    );

} 


export default Home;