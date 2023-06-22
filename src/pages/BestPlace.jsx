import Title from "../components/Title/Title";
import Button from "../components/Button/Button"
import CardList from "../components/Cards/Card";
import { Icon } from "semantic-ui-react";
import { useNavigate } from 'react-router-dom';
 
const BestPlaceCard = () => {

    const data = [ 
        {
            id: 1,
            image: require('../assets/BestPlaces/3.jpg'),
            title: 'Les plages aux eaux turquoises et le clapotis des vagues',
        },
        {
            id: 2,
            image: require('../assets/BestPlaces/1.jpg'),
            title: 'Le dynamisme de la ville et ses mille et une facettes',
        },
        {
            id: 3,
            image: require('../assets/BestPlaces/2.jpg'),
            title: 'Les couleurs verdoyantes et la brise des montagnes',
        },
    ];

    const navigate = useNavigate();

    const navigateToDistance = () => {
        navigate('/distance');
    };

    return (
        <div className="l-places__container">
            <p className="l-places__container-step">1/4</p>
            <Title title="Vous avez préféré..." />
            <div className="l-places__container-shuffle">
                <Icon name="shuffle" size="large" className="l-places__container-shuffle-icon"/>
                <p>Choisir pour moi</p>
            </div>
            <CardList data={data} />
            <div className="l-places__container-button">
                <Button text="Passer à la distance" onClick={navigateToDistance}/>
            </div>
        </div>
    );
} 

export default BestPlaceCard;