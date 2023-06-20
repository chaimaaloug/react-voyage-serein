import React, { useEffect, useState } from 'react';
import Button from '../../components/Button/Button'
import { getPlacesData } from '../../api/api';
import { useNavigate } from 'react-router-dom';
import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer';
import BackgroundVideo from '../../components/BackgroundVideo/BackgroundVideo';


const Destination = () => {

    const [places, setPlaces] = useState([])
    //get data from TravelAdvisor api
    useEffect(() => {
        getPlacesData()
            .then((data) => {
                setPlaces(data)
            });
    }, []);

    const navigate = useNavigate();

    const navigateToOnboarding = () => {
        navigate('/onboarding');
    };

    const navigateToOnboardingHasard = () => {
        navigate('/onboarding-hasard');
    };

    return (
        <div className='l-destination'>
            <div className='u-container'>
                <Header />
                <div className='l-destination__background'>
                    <BackgroundVideo url="https://www.youtube.com/embed/h2V2mBBXgj4" />
                </div>
                <div className='l-destination__header'>
                    <div className='l-destination__card'>
                        <h2>Thaïlande</h2>
                        <div></div>
                        <p>
                        Prêt à plonger dans une expérience envoûtante et captivante ? Laissez-nous vous transporter vers les merveilles exotiques de la Thaïlande, une destination qui éblouit les sens et laisse des souvenirs impérissables. En partenariat avec notre agence de voyage en ligne, vous êtes sur le point de vivre une aventure inoubliable, guidée par l'essence même de ce pays fascinant.
                        </p>
                        <div>
                            <p>à partir de <span>800€</span></p>
                        </div>
                    </div>
                </div>
                <div className='u-bgcolor--blanc'>
                    <h2 className='u-font-primary u-font-32 u-font-400 u-mb-32'>Itinéraire conseillé pour vous</h2>
                    <p>Modifier le parcours :</p>
                </div>
                <div className='u-bgcolor--blanc'>
                    <h2 className='u-font-primary u-font-32 u-font-400 u-mb-32'>Ajouter des activités à mon voyage</h2>
                    <p>Modifier le parcours :</p>
                </div>
                <div className='u-bgcolor--blanc'>
                    <h2 className='u-font-primary u-font-32 u-font-400 u-mb-32'>Nos conseils pour partir sereinement</h2>
                    <div>
                        <div>
                            <p className='u-font-secondary u-font-24 u-mb-24'>Avant de partir</p>
                        </div>
                        <div>
                            <p className='u-font-secondary u-font-24 u-mb-24'>Monnaie en Thaïlande</p>
                        </div>
                    </div>
                </div>
                <div className='u-bgcolor--blanc'>
                    <h2 className='u-font-primary u-font-32 u-font-400 u-mb-32'>Autres destinations</h2>
                    <p>Similaire à la Thaïlande :</p>
                    <p>Aux antipodes :</p>
                </div>
            </div>
            <Footer />
        </div>
    );

}


export default Destination;