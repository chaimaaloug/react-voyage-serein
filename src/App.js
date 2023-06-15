import React, {useEffect, useState} from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import { getPlacesData } from './api/api';

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
           
        </div>
    );
}

export default App;
