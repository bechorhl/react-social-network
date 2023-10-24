import React from 'react';
import styles from './../Dialogs.module.css';

const Message = (props) => {
  return <li className={styles.message}>{props.message}</li>;
};

export default Message;
