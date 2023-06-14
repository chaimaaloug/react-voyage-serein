import style from "./TabsItem.module.scss"
import classNames from "classnames";

const Tab = (props) => {
    const { text, callBack, active, column } = props

    const classes = classNames(
        style.tab, {
        [style.tabActive]: active,
        [style.tabColumn]: column
    });

    return (
        <button type="button" className={classes} onClick={callBack}>{text}</button>
    );
}

export default Tab;