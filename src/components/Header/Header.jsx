import React from 'react';
import styles from './Header.module.css';
import headerLogo from './../../assets/images/header-logo.png';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={styles.header}>
      <img src={headerLogo} />

      <div className={styles.loginBlock}>
        {props.isAuth ? (
          <div>
            <button onClick={props.logout}>Log out /</button>
            <span>{props.login}</span>
          </div>
        ) : (
          <NavLink to={'/login'} className={styles.loginLink}>
            Login
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
