import React from 'react';
import styles from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  return (
    <li className={styles.dialog}>
      <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
    </li>
  );
};

const Message = (props) => {
  return <li className={styles.message}>{props.message}</li>;
};

const Dialogs = (props) => {
  return (
    <div className={styles.dialogs}>
      <ul className={styles.dialogsItems}>
        <DialogItem id="1" name="Dimych" />
        <DialogItem id="2" name="Andrey" />
        <DialogItem id="3" name="Sveta" />
        <DialogItem id="4" name="Sasha" />
        <DialogItem id="5" name="Viktor" />
        <DialogItem id="6" name="Valera" />
      </ul>
      <ul className={styles.messages}>
        <Message message="Hi" />
        <Message message="How are you?" />
        <Message message="Yo" />
      </ul>
    </div>
  );
};

export default Dialogs;
