import style from "./Dropdown.module.scss"
import classNames from "classnames";

const Dropdown = (props) => {
    const {} = props

    const classes = classNames(
        style.dropdown, {});

    return (
        <select className={classes}>
            <option value="red">Red</option>
        </select>
    );
}

export default Dropdown;