import style from "./Buttons.module.scss"

const Button = (props) => {
    const {title, callBack} = props
    return(
    <button type="button" className={style.button} onClick={callBack}>{title}</button>
    )
}

export default Button;