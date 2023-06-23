import style from "./DressingCard.module.scss"


const DressingCard = ({ data }) => {
    return (
        <div className={style.DressingCard}>
            {data.map((item, index) => (
                <DressingCardItem key={index} icon={item.icon} text={item.text} count={item.count} />
            ))}
        </div>
    );
};

const DressingCardItem = (props) => {
    const { icon, text, count } = props

    return (
        <div className={style.DressingCardItem}>
            <img src={icon} alt="" width={34} height={34} />
            <p className="u-flex-grow">
                {text}
            </p>
            <span className="u-flex-shrink-none">
                {count}
            </span>
        </div>
    );
}

export default DressingCard;