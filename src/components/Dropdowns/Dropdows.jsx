import style from "./Dropdown.module.scss"
// import script from "./DropdownDrop"
import classNames from "classnames";

const Dropdown = (props) => {
    const { } = props

    return (
        <>
            <label id="combo1-label" class={style.comboLabel}>Favorite Fruit</label>
            <div class="js-select" className={style.combo}>
                <div aria-controls="listbox1" aria-expanded="false" aria-haspopup="listbox" aria-labelledby="combo1-label" id="combo1" className={style.comboInput} role="combobox" tabindex="0"></div>
                <div className={style.comboMenu} role="listbox" id="listbox1" aria-labelledby="comboLabel" tabindex="-1">
                </div>
            </div>
        </>
    );
}

export default Dropdown;