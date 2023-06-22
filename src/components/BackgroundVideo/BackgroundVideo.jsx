import style from "./BackgroundVideo.module.scss"
import classNames from "classnames";

const BackgroundVideo = (props) => {
    const { url, isMediaVideo, fullHeight } = props

    const classes = classNames(
        style.BackgroundVideo, {
        [style.BackgroundVideoFullHeight]: fullHeight,
    });

    return (
        <div className={classes}>
            {isMediaVideo ? (
                <video controls autoPlay muted playsInline loop>
                    <source src={url} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ) : (
                <iframe
                    src={url + "?autoplay=1&mute=1&controls=0&loop=1"}
                    title="YouTube video player"
                    frameBorder={0}
                    allowFullScreen
                    allow="autoplay"                  
                    >
                </iframe>
            )}
        </div>
    );
}

export default BackgroundVideo;