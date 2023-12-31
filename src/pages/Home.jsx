import React, { useEffect, useState } from 'react';
import Button from '../components/Button/Button'
import { getPlacesData } from '../api/api';
import { useNavigate } from 'react-router-dom';
import Header from "../components/Header/Header";
import Footer from '../components/Footer/Footer';


const Home = () => {

    {/*const [places, setPlaces] = useState([])
    //get data from TravelAdvisor api
    useEffect(() => {
        getPlacesData()
            .then((data) => {
                setPlaces(data)
            });
    }, []);*/}

    const navigate = useNavigate();

    const navigateToOnboarding = () => {
        navigate('/onboarding');
    };

    const navigateToOnboardingHasard = () => {
        navigate('/onboarding-hasard');
    };

    return (
        <div className='l-home'>
            <div className='u-container'>
                <Header />
                <div className='l-home__content'>
                    <p className="u-font-80 u-font-32@md u-font-600 u-color--bleu-marine u-font-secondary">Fini la prise de tête<br />pour choisir où partir.</p>
                    <p className="u-font-32 u-font-16@md u-font-600 u-color--bleu-marine u-mt-32">Découvrez ou vous partez cet été en 4 étapes.</p>
                    <div className='u-mt-32 u-flex u-flex-wrap u-flex-gap-24'>
                        <Button text="Laisser le hasard choisir à ma place" onClick={navigateToOnboardingHasard} outline />
                        <Button text="Me laisser guider " onClick={navigateToOnboarding} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );

}

export default Home;