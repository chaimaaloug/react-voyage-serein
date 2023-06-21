import { Icon } from "semantic-ui-react";
import style from "./SearchBar.module.scss"
import classNames from "classnames";

const SearchBar = (props) => {
    const {} = props

    const classes = classNames(
        style.searchBar, {
    });

    return (
        <div className={classes}>
            <Icon name='search' size='big' className={style.icon}/>
            <input className={style.input} ype="search" id="search" name="" placeholder="Rechercher une destination, une activité, une couleur..."/>
            <button></button>
        </div>
    );
}

export default SearchBar;