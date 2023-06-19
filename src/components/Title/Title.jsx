import style from "./Title.module.scss"

const Title = (props) => {
    const {title} = props
    return (
        <p className={style.title}>{title}</p>
    )
}

export default Title;


