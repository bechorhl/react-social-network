import React from 'react';
import styles from './../Dialogs.module.css';

const Message = (props) => {
  return (
    <li className={styles.message}>
      <div className={styles.messageItem}>
        <span>{props.message}</span>
      </div>
    </li>
  );
};

export default Message;
