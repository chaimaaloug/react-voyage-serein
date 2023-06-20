import style from "./Link.module.scss"
import classNames from "classnames";

const Link = (props) => {
    const { url, text, iconOnly, color, noUnderline, header } = props

    const classes = classNames(
        style.link, {
        [style.linkIconOnly]: iconOnly,
        [style.linkUnderlineNone]: noUnderline,
        [style.linkSecondary]: color === 'secondary',
        [style.linkTertiary]: color === 'tertiary',
        [style.linkHeader]: header,
        [style.linkHeaderSecondary]: header && color === 'secondary',
    });

    return (
        <a href={url} className={classes}>{text}</a>
    );
}

export default Link;