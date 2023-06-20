import style from "./Tag.module.scss";
import classNames from "classnames";


const Tag = (props) => {
    const { text, callBack, outline, } = props

    const classes = classNames(
        style.tag, {
        [style.tagOutline]: outline,
    });

    return (
        <div className={classes} onClick={callBack} >
            <label for={text}>
                <input type="checkbox" id={text} ></input>
                <span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 5L5 19M19 19L5 5" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    {text}
                </span>
            </label>
        </div>
    )

}

export default Tag;