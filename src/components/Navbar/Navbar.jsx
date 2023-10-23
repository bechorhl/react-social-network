import React from 'react';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.item}>
          <NavLink
            to="/profile"
            className={(navData) =>
              navData.isActive ? styles.navLinkIsActive : styles.navLink
            }
          >
            Profile
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            to="/dialogs"
            className={(navData) =>
              navData.isActive ? styles.navLinkIsActive : styles.navLink
            }
          >
            Messages
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink>News</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink>Music</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink>Settings</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
