import React from 'react';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import Friends from '../Friends/Friends';

const Navbar = (props) => {
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
        <li className={styles.settingsItem}>
          <NavLink>Settings</NavLink>
        </li>
      </ul>
      <Friends friends={props.state.friends} />
    </nav>
  );
};

export default Navbar;
