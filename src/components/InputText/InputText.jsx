import style from "./InputText.module.scss"
// import classNames from "classnames";

const InputText = (props) => {
    const { label } = props

    return (
        <div className={style.group}>
            <input type="text" required />
            <span class={style.highlight}></span>
            <span class={style.bar}></span>
            <label>{label}</label>
        </div>
    );
}

export default InputText;