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
          props.login
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
