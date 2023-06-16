import React, { useEffect, useState } from 'react';
import Button from '../components/Button/Button'
import { getPlacesData } from '../api/api';
import { Link } from 'react-router-dom';
import Badge from '../components/Badge/Badge';
import BackgroundVideo from '../components/BackgroundVideo/BackgroundVideo';

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
            <BackgroundVideo url="https://www.youtube.com/embed/CLk7A7HXhYQ" />
            <h1>Lorem Ipsum,loret</h1>
            <p>Lorem Ipsum, loret tout ca Lorem Ipsum, loret tout ca</p>
            <div>
                <Button text="Me laisser porter" />
                <Button text="Au hasard" outline />
            </div>
            <Badge text="Badge1"/>
            <Link to="/contact">Link to contact page</Link> <br />
            <Link to="/about">Link to contact about</Link>
        </div>
    );

}


export default Home;