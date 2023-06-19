import style from "./BackgroundImage.module.scss"
import classNames from "classnames";

const BackgroundImage = (props) => {
    const { url, text } = props
    
    const classes = classNames(
        style.BackgroundImage, {
    });
    
    return (
        <div className={classes}>
            <image src={url} alt={text}></image>
        </div>
    );
}

export default BackgroundImage;