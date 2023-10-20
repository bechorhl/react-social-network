import React from 'react';
import styles from './Header.module.css';
import headerLogo from './../../assets/images/header-logo.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={headerLogo} />
    </header>
  );
};

export default Header;
