import style from "./Dropdown.module.scss"

const Dropdown = (props) => {
    const { placeholder } = props

    return (
        <select className={style.Dropdown}>
            <option>Bangkok</option>
            <option>Vietnam</option>
            <option>Cambodge</option>
            <option>Laos</option>
        </select>
    );
}

export default Dropdown;