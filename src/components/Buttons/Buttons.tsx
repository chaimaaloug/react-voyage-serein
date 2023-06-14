import style from "./Buttons.module.scss"
import classNames from "classnames";


const Button = (props) => {
    const {text, callBack, outline, iconOnly} = props

    const classes = classNames(
        style.button, {
            [style.buttonOutline] : outline,
            [style.buttonIconOnly]: iconOnly,
        });

    return(
    <button type="button" className={classes} onClick={callBack}>{text}</button>
    )
}

export default Button;