import style from "./Jauge.modules.scss";
import classNames from "classnames";

const Jauge = () => {

const classes = classNames(style.rangeSlider, style.grad);

// Single slider (with shadows)
return (
    <div className={classes} >
        <input type="range" min="0" max="10000" step="100" value="200" oninput="this.parentNode.style.setProperty('--value',this.value); this.parentNode.style.setProperty('--text-value', JSON.stringify((+this.value).toLocaleString()))" />
        <output></output>
        <div className={style.rangeSlider__progress}></div>
    </div>
)


}
export default Jauge