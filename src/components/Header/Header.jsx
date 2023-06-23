/* eslint-disable jsx-a11y/alt-text */
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
      <div className='u-flex-self-center u-flex-shrink-none'>
        <a href="/"><img src={logo} /></a>
      </div>
      <div className={style.HeaderNav}>
        <div className={style.HeaderLinks}>
          <Link header color="secondary" url="/about" text="Qui sommes-nous" />
          <Link header url="/onboarding" text="Trouver une destination" />
        </div>
        <div>
          <SearchBar></SearchBar>
        </div>
      </div>
    </header>
  );
};

export default Header;
