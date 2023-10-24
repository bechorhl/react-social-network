import React from 'react';
import styles from './Friend.module.css';

const Friend = (props) => {
  return (
    <li className={styles.item}>
      <div className={styles.icon}></div>
      <span>{props.name}</span>
    </li>
  );
};

export default Friend;
