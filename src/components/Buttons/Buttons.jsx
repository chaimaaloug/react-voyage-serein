import style from "./Buttons.module.scss"
import classNames from "classnames";

const Button = (props) => {
    const { text, callBack, outline, iconOnly, link, color } = props

    const classes = classNames(
        style.button, {
        [style.buttonOutline]: outline,
        [style.buttonIconOnly]: iconOnly,
        [style.buttonLink]: link,
        [style.ButtonSecondary]: color==='primary',
        [style.ButtonTertiary]: color==='tertiary',
    });

    return (
        <div>
            <button type="button" className={classes} onClick={callBack}>{text}</button>
        </div>
    );
}

export default Button;