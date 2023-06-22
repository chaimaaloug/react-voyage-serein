import Rating from "../Rating/Rating";
import style from "./ActivityCard.module.scss"



const ActivityCardList = ({ data }) => {
    return (
        <div className={style.activityCardList}>
            {data.map((item, index) => (
                <ActivityCard key={index} activity={item.activity} title={item.title} text={item.text} image={item.image} />
            ))}
        </div>
    );
};

const ActivityCard = (props) => {
    const { activity, text, image, title } = props

    return (
        <div className={style.activityCard}>
            <img src={image} alt={title} />
            <div className={style.activityCardContent}>
                <p className={style.activityCardTitle}>
                    {activity}
                </p>
                <Rating />
                <p className={style.activityCardDescription}>
                    {text}
                </p>
                <div className="u-flex-self-end">
                    Ajouter a mon parcours
                </div>
            </div>
        </div>
    );
}

export default ActivityCardList;