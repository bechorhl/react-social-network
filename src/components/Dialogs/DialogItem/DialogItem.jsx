import React from 'react';
import styles from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  return (
    <li className={styles.dialog}>
      <NavLink
        to={'/dialogs/' + props.id}
        className={(navData) =>
          navData.isActive ? styles.dialogIsActive : styles.dialog
        }
      >
        {props.name}
      </NavLink>
    </li>
  );
};

export default DialogItem;
// {styles.dialog}
