import React, { useEffect, useState } from 'react';
import Button from '../../components/Button/Button'
import { getPlacesData } from '../../api/api';
import { useNavigate } from 'react-router-dom';
import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer';
import BackgroundVideo from '../../components/BackgroundVideo/BackgroundVideo';
import ActivityCardList from '../../components/ActivityCard/ActivityCard';
import DestinationCardList from '../../components/DestinationCard/DestinationCard';


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

    const ActivityList = [
        {
            id: 1,
            image: require('../../assets/BestPlaces/3.jpg'),
            title: 'Ayutthaya',
            activity: 'Ayutthaya',
            text: 'Ancienne capitale du royaume de Siam, et son parc archéologique inscrit à l’Unesco',
        },
        {
            id: 2,
            image: require('../../assets/BestPlaces/3.jpg'),
            title: 'Chiang Khan',
            activity: 'Chiang Khan',
            text: 'Chiang Khan est un village est parallèle au Mékong. De belles maisons sur pilotis invitent à la flânerie',
        },
        {
            id: 3,
            image: require('../../assets/BestPlaces/3.jpg'),
            title: 'Ko Lipe',
            activity: 'Ko Lipe',
            text: 'Paradis tropical, avec ses plages de sable blanc et sa communauté de pêcheurs, « gitans de la mer »',
        },
        {
            id: 4,
            image: require('../../assets/BestPlaces/3.jpg'),
            title: 'Chiang Mai',
            activity: 'Chiang Mai',
            text: 'Nœud du tourisme nord-thaïlaidais aux quelque 350 temples, camp de base pour des excursions',
        },
        {
            id: 5,
            image: require('../../assets/BestPlaces/3.jpg'),
            title: 'Kanchanaburi',
            activity: 'Kanchanaburi',
            text: 'Une douce torpeur au bord de la rivière Kwaï, et son fameux pont',
        },
        {
            id: 6,
            image: require('../../assets/BestPlaces/3.jpg'),
            title: 'Ko Pha Ngan',
            activity: 'Ko Pha Ngan',
            text: 'Plages idylliques et criques tourmentées, jungle et paysages montagneux propices aux randonnées',
        },
    ];

    const OtherDestinations = [
        {
            id: 1,
            image: require('../../assets/BestPlaces/3.jpg'),
            title: 'Ayutthaya',
            text: 'Ancienne capitale du royaume de Siam, et son parc archéologique inscrit à l’Unesco',
        },
        {
            id: 2,
            image: require('../../assets/BestPlaces/3.jpg'),
            title: 'Chiang Khan',
            text: 'Chiang Khan est un village est parallèle au Mékong. De belles maisons sur pilotis invitent à la flânerie',
        },
        {
            id: 3,
            image: require('../../assets/BestPlaces/3.jpg'),
            title: 'Ko Lipe',
            text: 'Paradis tropical, avec ses plages de sable blanc et sa communauté de pêcheurs, « gitans de la mer »',
        },
        {
            id: 4,
            image: require('../../assets/BestPlaces/3.jpg'),
            title: 'Chiang Mai',
            text: 'Nœud du tourisme nord-thaïlaidais aux quelque 350 temples, camp de base pour des excursions',
        },
        {
            id: 5,
            image: require('../../assets/BestPlaces/3.jpg'),
            title: 'Kanchanaburi',
            text: 'Une douce torpeur au bord de la rivière Kwaï, et son fameux pont',
        },
        {
            id: 6,
            image: require('../../assets/BestPlaces/3.jpg'),
            title: 'Ko Pha Ngan',
            text: 'Plages idylliques et criques tourmentées, jungle et paysages montagneux propices aux randonnées',
        },
    ];

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
                    <p className='u-font-24 u-font-700 u-mb-24'>Modifier le parcours :</p>
                    <iframe
                        width="600"
                        height="450"
                        style={{ border: "0" }}
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps/embed/v1/place?key=API_KEY&q=Space+Needle,Seattle+WA"
                    >
                    </iframe>
                </div>
                <div className='u-bgcolor--blanc'>
                    <h2 className='u-font-primary u-font-32 u-font-400 u-mb-32'>Ajouter des activités à mon voyage</h2>
                    <p>Modifier le parcours :</p>
                    <ActivityCardList data={ActivityList} />
                    <div className='u-mt-32 u-pb-32 u-text-center'>
                        <Button text="Charger plus d'activités" />
                    </div>
                </div>
                <div className='u-bgcolor--blanc u-pb-64'>
                    <h2 className='u-font-primary u-font-32 u-font-400 u-mb-32'>Nos conseils pour partir sereinement</h2>
                    <div className='u-flex u-flex-justify-between u-flex-gap-24'>
                        <div style={{ 'max-width': 512 }}>
                            <p className='u-font-secondary u-font-24 u-font-700 u-mb-24'>Avant de partir</p>
                            <ul>
                                <li><span className='u-color--bleu-marine-800'>Passeport :</span> pensez à vérifier qu’il dispose bien d’une page vierge et qu’il est valable plus de 6 mois après la date de retour. </li>
                                <li className='u-mt-16'><span className='u-color--bleu-marine-800'>Visa :</span> indispensable pour des séjours de plus de 5 jours.</li>
                                <li className='u-mt-16'><span className='u-color--bleu-marine-800'>Vaccins :</span> vaccins universels, hépatite A, fièvre typhoïde, encéphalite japonaise.</li>
                                <li className='u-mt-16'><span className='u-color--bleu-marine-800'>Permis de conduire international</span> si vous avez prévu de conduire sur place. Attention à la circulation qui n’a rien à voir avec les conditions Européennes !</li>
                                <li className='u-mt-16'><span className='u-color--bleu-marine-800'>Photocopies de vos papiers</span> comme la carte d’identité, passeport, billets d’avion… Dispersez-les dans vos bagages et ne les rangez pas avec les originaux ! Vous pouvez aussi gardez des copies numériques sur votre téléphone / ordinateur portable ou dans un Cloud.</li>
                            </ul>
                        </div>
                        <div>
                            <p className='u-font-secondary u-font-24 u-font-700 u-mb-24'>Monnaie en Thaïlande</p>
                        </div>
                    </div>
                    <div className='u-mt-64'>
                        <p className='u-font-secondary u-font-24 u-font-700 u-mb-24'>Mes tenues en Thaïlande</p>
                        <div className='u-flex u-flex-justify-between u-flex-gap-24'>
                            <p style={{ 'max-width': 300 }}>
                                Il est inutile de vous surcharger de vêtements avant de partir ! Gardez en tête que s'il vous manque quelque chose, vous aurez la possibilité d’acheter sur place et souvent avec des prix avantageux !
                            </p>
                            <div className='u-flex u-flex-justify-between u-flex-gap-24'>
                                <div>
                                    <p className='u-font-20 u-font-700 u-mb-16'>Indispensable</p>
                                </div>
                                <div>
                                    <p className='u-font-20 u-font-700 u-mb-16'>Très utile</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='u-bgcolor--blanc u-pb-64'>
                    <h2 className='u-font-primary u-font-32 u-font-400 u-mb-32'>Autres destinations</h2>
                    <p className='u-font-24 u-font-700 u-mb-24'>Similaire à la Thaïlande :</p>
                    <DestinationCardList data={OtherDestinations} />
                </div>
            </div>
            <Footer />
        </div>
    );

}


export default Destination;