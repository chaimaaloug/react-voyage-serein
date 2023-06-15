import React, { useEffect, useState } from 'react';
import Button from '../components/Button/Button'
import { getPlacesData } from '../api/api';
import { Link } from 'react-router-dom';
import Badge from '../components/Badge/Badge';

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
            <iframe class="video" src="https://www.youtube.com/embed/CLk7A7HXhYQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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