import style from "./BackgroundVideo.module.scss"
import classNames from "classnames";

const BackgroundVideo = (props) => {
    const { url } = props

    const classes = classNames(
        style.BackgroundVideo, {
    });
    
    return (
        <iframe className={classes} src={url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    );
}

export default BackgroundVideo;