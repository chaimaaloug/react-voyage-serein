import style from "./SearchBar.module.scss"
import classNames from "classnames";

const SearchBar = (props) => {
    const {} = props

    const classes = classNames(
        style.searchBar, {
    });

    return (
        <div className={classes}>
            <label for="search">Search the site:</label>
            <input type="search" id="search" name="" placeholder="Rechercher une destination, une activité, une couleur..."/>
            <button>Search</button>
        </div>
    );
}

export default SearchBar;