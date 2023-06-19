import style from "./Button.module.scss"
import classNames from "classnames";

const Button = (props) => {
    const { text, onClick, outline, iconOnly, link, color } = props

    const classes = classNames(
        style.button, {
        [style.buttonOutline]: outline,
        [style.buttonIconOnly]: iconOnly,
        [style.buttonLink]: link,
        [style.ButtonSecondary]: color === 'primary',
        [style.ButtonTertiary]: color === 'secondary',
    });

    return (
        <button type="button" className={classes} onClick={onClick}>{text}</button>
    );
}

export default Button;