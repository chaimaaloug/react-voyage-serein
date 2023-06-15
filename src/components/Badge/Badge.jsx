import style from "./Badge.module.scss";
import classNames from "classnames";
import image from "../../assets/x-01.svg"


const Badge = (props) => {
    const { text, callBack, outline, iconOnly, link, color } = props

    const classes = classNames(
        style.badge, {
        [style.badgeOutline]: outline,
        [style.badgeIconOnly]: iconOnly,
        [style.badgeLink]: link,
        [style.badgeSecondary]: color==='secondary',
        [style.badgeTertiary]: color==='tertiary',
    });

    return (
        <div className={classes} onClick={callBack} >
            <label for={text}>
                <input type="checkbox" id={text} ></input>
                    {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 5L5 19M19 19L5 5" stroke-width="2" stroke-linecap="round"/>
                    </svg>

                    <img className={style.badgeImg} src={image} alt="" stroke="blue" /> */}
                    <span>{text}</span>
            </label>
        </div>
    )

}

export default Badge;