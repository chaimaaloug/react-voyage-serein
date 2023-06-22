import Rating from "../Rating/Rating";
import style from "./ActivityCard.module.scss"
import icon from "../../assets/icons/more.svg"



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
                <div className="u-font-16 u-color--bleu-marine u-font-700 u-flex u-flex-align-center u-flex-gap-8 u-flex-self-end">
                    <img src={icon} alt="" srcset="" width={24} height={24} />
                    Ajouter a mon parcours
                </div>
            </div>
        </div>
    );
}

export default ActivityCardList;