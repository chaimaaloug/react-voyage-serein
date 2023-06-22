import React, { useEffect, useState } from 'react';
import Button from '../../components/Button/Button'
import { getPlacesData } from '../../api/api';
import { useNavigate } from 'react-router-dom';
import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer';
import BackgroundVideo from '../../components/BackgroundVideo/BackgroundVideo';
import ActivityCardList from '../../components/ActivityCard/ActivityCard';
import DestinationCardList from '../../components/DestinationCard/DestinationCard';
import { Icon } from "semantic-ui-react";
import Link from '../../components/Link/Link';
import Rating from '../../components/Rating/Rating';
import DressingCard from '../../components/DressingCard/DressingCard';
import ItineraireMap from '../../components/itineraireMap/itineraireMap'

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

    const ActivityList = [
        {
            id: 1,
            image: require('../../assets/destination/1.png'),
            title: 'Ayutthaya',
            activity: 'Ayutthaya',
            text: 'Ancienne capitale du royaume de Siam, et son parc archéologique inscrit à l’Unesco',
        },
        {
            id: 2,
            image: require('../../assets/destination/2.png'),
            title: 'Chiang Khan',
            activity: 'Chiang Khan',
            text: 'Chiang Khan est un village est parallèle au Mékong. De belles maisons sur pilotis invitent à la flânerie',
        },
        {
            id: 3,
            image: require('../../assets/destination/3.png'),
            title: 'Ko Lipe',
            activity: 'Ko Lipe',
            text: 'Paradis tropical, avec ses plages de sable blanc et sa communauté de pêcheurs, « gitans de la mer »',
        },
        {
            id: 4,
            image: require('../../assets/destination/4.png'),
            title: 'Chiang Mai',
            activity: 'Chiang Mai',
            text: 'Nœud du tourisme nord-thaïlaidais aux quelque 350 temples, camp de base pour des excursions',
        },
        {
            id: 5,
            image: require('../../assets/destination/5.png'),
            title: 'Kanchanaburi',
            activity: 'Kanchanaburi',
            text: 'Une douce torpeur au bord de la rivière Kwaï, et son fameux pont',
        },
        {
            id: 6,
            image: require('../../assets/destination/6.png'),
            title: 'Ko Pha Ngan',
            activity: 'Ko Pha Ngan',
            text: 'Plages idylliques et criques tourmentées, jungle et paysages montagneux propices aux randonnées',
        },
    ];

    const OtherDestinations = [
        {
            id: 1,
            image: require('../../assets/destination/7.png'),
            title: 'Vietnam',
            text: 'Là, tout n’est que rizières noyées, haies de bambous et chapeaux coniques, une Asie éternelle, préservée, vibrante et authentique.',
        },
        {
            id: 2,
            image: require('../../assets/destination/8.png'),
            title: 'Cambodge',
            text: 'Le paradoxe du Cambodge, c’est d’être médiatisé au travers de ce qu’il a donné de plus grandiose, Angkor, et de pire, les Khmers rouges.',
        },
        {
            id: 3,
            image: require('../../assets/destination/9.png'),
            title: 'Laos',
            text: 'Le Laos cultive une tranquille nonchalance, rythmée par le cours du Mékong, véritable colonne vertébrale du pays.',
        },
        {
            id: 4,
            image: require('../../assets/destination/10.png'),
            title: 'Botswana',
            text: 'Le pays des Tswanas, du nom de l’ethnie principale du Botswana, occupe un vaste bassin sablonneux, tantôt nu et désolé, tantôt couvert de broussailles. Le Kalahari en forme la pièce centrale.',
        },
        {
            id: 5,
            image: require('../../assets/destination/11.png'),
            title: 'Finland',
            text: 'Une douce torpeur au bord de la rivière Kwaï, et son fameux pont. Une douce torpeur au bord de la rivière Kwaï, et son fameux pont. Une douce torpeur au bord de la rivière Kwaï.',
        },
        {
            id: 6,
            image: require('../../assets/destination/12.png'),
            title: 'New York',
            text: 'New York. Ceux qui n’y ont jamais posé les pieds la connaissent déjà, par le cinéma, les séries télé, la musique, la littérature. New York est une machine à rêves. ',
        },
    ];

    const indispensableDressing = [
        {
            id: 1,
            picto: require('../../assets/icons/more.svg'),
            text: 'T-shirts légers',
            count: '3'
        },
        {
            id: 2,
            picto: require('../../assets/icons/more.svg'),
            text: 'T-shirts manches longues',
            count: '3'
        },
        {
            id: 3,
            picto: require('../../assets/icons/more.svg'),
            text: 'Veste imperméable léger ou poncho',
            count: '1 ou 2'
        },
    ]

    const usefulDressing = [
        {
            id: 1,
            picto: require('../../assets/icons/more.svg'),
            text: 'T-shirts légers',
            count: '3'
        },
        {
            id: 2,
            picto: require('../../assets/icons/more.svg'),
            text: 'T-shirts manches longues',
            count: '3'
        },
        {
            id: 3,
            picto: require('../../assets/icons/more.svg'),
            text: 'Veste imperméable léger ou poncho',
            count: '1 ou 2'
        },
    ]

    return (
        <div className='l-destination'>
            <div className='u-container'>
                <Header />
                <div className='l-destination__background'>
                    {/* <BackgroundVideo isMediaVideo fullHeight url={backgroundVideoCover} /> */}
                    <BackgroundVideo fullHeight url="https://www.youtube.com/embed/7sQJREI-Pe8" />
                </div>
                <div className='l-destination__header'>
                    <div className='l-destination__card u-flex-gap-32'>
                        <h2 className='u-font-42 u-font-secondary'>Thaïlande</h2>
                        <div className='u-flex u-flex-align-center u-flex-gap-32'>
                            <div className='u-flex u-flex-align-center u-flex-gap-8'>
                                <Rating />
                                <span className='u-font-12'>
                                    (69 avis)
                                </span>
                            </div>
                            <Link text="Voir les avis" />
                        </div>
                        <div>
                            <p className='u-mb-16'>
                                Prêt à plonger dans une expérience envoûtante et captivante ? Laissez-nous vous transporter vers les merveilles exotiques de la Thaïlande, une destination qui éblouit les sens et laisse des souvenirs impérissables. En partenariat avec notre agence de voyage en ligne, vous êtes sur le point de vivre une aventure inoubliable, guidée par l'essence même de ce pays fascinant.
                            </p>
                            <Link text="En savoir plus" />
                        </div>
                        <div className='u-flex u-flex-align-center u-flex-self-end'>
                            <p className='u-color--bleu-marine'>à partir de <span className='u-font-24 u-font-700'>800€</span></p>
                        </div>
                    </div>
                </div>
                <div className='u-bgcolor--blanc'>
                    <h2 className='u-font-primary u-font-32 u-font-400 u-mb-32'>Itinéraire conseillé pour vous</h2>
                    <p className='u-font-24 u-font-700 u-mb-24'>Modifier le parcours :</p>
                    <div className='u-flex u-flex-gap-32 u-mb-64'>
                        <div>
                            <p>Ma mobilité durant le voyage</p>
                        </div>
                        <div>
                            <p>Mon envie de bouger</p>
                        </div>
                    </div>
                    <div>
                        <ItineraireMap />
                    </div>
                </div>
                <div className='u-bgcolor--blanc'>
                    <h2 className='u-font-primary u-font-32 u-font-400 u-mb-32'>Ajouter des activités à mon voyage</h2>
                    <div>
                        <div className='u-flex'>
                            <div className="shuffle">
                                <Icon name="shuffle" size="large" className="icon" />
                                <p>
                                    Me proposer des activités au hasard
                                </p>
                            </div>
                            <div>
                                <Icon name="shuffle" size="large" className="icon" />
                                Filtrer
                            </div>
                        </div>
                        <div></div>
                    </div>
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
                            <p className='u-color--bleu-marine-800' style={{ 'max-width': 300 }}>
                                Il est inutile de vous surcharger de vêtements avant de partir ! Gardez en tête que s'il vous manque quelque chose, vous aurez la possibilité d’acheter sur place et souvent avec des prix avantageux !
                            </p>
                            <div className='u-flex u-flex-justify-between u-flex-gap-24'>
                                <div>
                                    <p className='u-font-20 u-font-700 u-mb-16'>Indispensable</p>
                                    <DressingCard data={indispensableDressing}/>
                                </div>
                                <div>
                                    <p className='u-font-20 u-font-700 u-mb-16'>Très utile</p>
                                    <DressingCard data={usefulDressing}/>
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