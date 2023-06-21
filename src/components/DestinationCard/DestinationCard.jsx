import Button from "../Button/Button";
import style from "./DestinationCard.module.scss"


const DestinationCardList = ({ data }) => {
    return (
        <div className={style.DestinationCardList}>
            {data.map((item, index) => (
                <DestinationCard key={index} Destination={item.title} title={item.title} text={item.text} image={item.image} />
            ))}
        </div>
    );
};

const DestinationCard = (props) => {
    const { Destination, text, image, title } = props

    return (
        <div className={style.DestinationCard}>
        <img src={image} alt={title} />
        <div className={style.DestinationCardContent}>
            <p className={style.DestinationCardTitle}>
                {Destination}
            </p>
            <p className={style.DestinationCardDescription}>
                {text}
            </p>
            <div className="u-flex-self-end">
                <Button text="Voir la destination" />
            </div>
        </div>
    </div>
    );
}

export default DestinationCardList;