import React from 'react';
import styles from './../Dialogs.module.css';

const Message = (props) => {
  return (
    <li className={styles.message}>
      <div className={styles.messageItem}>{props.message}</div>
    </li>
  );
};

export default Message;
