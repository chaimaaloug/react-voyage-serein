import style from "./Rating.module.scss"

const Rating = (props) => {
    // eslint-disable-next-line no-empty-pattern
    const {} = props

    return (
        <div className={style.Rating} style={{ '--rating': 2.3 }}></div>
    );
}

export default Rating;