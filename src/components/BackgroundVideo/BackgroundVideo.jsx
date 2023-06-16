import style from "./BackgroundVideo.module.scss"
import classNames from "classnames";

const BackgroundVideo = (props) => {
    const { url } = props
    
    const classes = classNames(
        style.BackgroundVideo, {
    });
    
    return (
        <div className={classes}>
            <iframe src={url + "?controls=0&autoplay=1&mute=1&playsinline=1&loop=1"} title="YouTube video player"></iframe>
        </div>
    );
}

export default BackgroundVideo;