import React from 'react';
import Link from '../Link/Link';
import SearchBar from '../SearchBar/SearchBar';
import classNames from "classnames";
import style from "./Header.module.scss"
import logo from "../../assets/logo.svg"

const Header = () => {

  const classes = classNames(
    style.header, {
  });

  return (
    <header className={classes}>
      <div>
        <img src={logo} className='u-flex-shrink-none' />
      </div>
      <div className={style.HeaderNav}>
        <div className={style.HeaderLinks}>
          <Link url="#" text="Qui sommes-nous" />
          <Link url="#" text="Toutes nos destinations" />
          <div>
            <Link url="#" text="Trouver une destination" />
          </div>
        </div>
        <div>
          <SearchBar></SearchBar>
        </div>
      </div>
    </header>
  );
};

export default Header;
