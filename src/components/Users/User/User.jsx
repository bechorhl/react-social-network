import React from 'react';
import styles from './User.module.css';
import userIcon from './../../../assets/images/user-icon2.png';

const User = (props) => {
  return (
    <li className={styles.user}>
      <div className={styles.iconBlock}>
        <img className={styles.icon} src={userIcon} alt="user icon" />
        {props.followed ? (
          <button
            onClick={() => {
              props.unfollow(props.id);
            }}
            className={styles.iconButton}
          >
            Unfollow
          </button>
        ) : (
          <button
            onClick={() => {
              props.follow(props.id);
            }}
            className={styles.iconButton}
          >
            Follow
          </button>
        )}
      </div>
      <div className={styles.detailsBlock}>
        <div className={styles.nameBlock}>
          <span className={styles.name}>{props.fullName}</span>
          <span className={styles.status}>{props.status}</span>
        </div>
        <div className={styles.countryBlock}>
          <span className={styles.country}>{props.location.country}</span>
          <span className={styles.city}>{props.location.city}</span>
        </div>
      </div>
    </li>
  );
};

export default User;
