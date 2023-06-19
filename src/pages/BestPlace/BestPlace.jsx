import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button"
import CardList from "../../components/Cards/Card";
import style from "./BestPlace.module.scss"
 
const BestPlaceCard = (props) => {

    const data = [ 
        {
            id: 1,
            image: require('../../assets/BestPlaces/3.png'),
            title: 'Les plages aux eaux turquoises et le clapotis des vagues',
        },
        {
            id: 2,
            image: require('../../assets/BestPlaces/1.png'),
            title: 'Le dynamisme de la ville et ses mille et une facettes',
        },
        {
            id: 3,
            image: require('../../assets/BestPlaces/2.png'),
            title: 'Les couleurs verdoyantes et la brise des montagnes',
        },
    ];

    return (
        <div>
            <Title title="Vous avez préféré..." />
            <CardList data={data} />
            <Button  text="Passer à la distance" />
        </div>
    );
} 

export default BestPlaceCard;