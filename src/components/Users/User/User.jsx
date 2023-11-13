import React from 'react';
import styles from './User.module.css';
import userIcon from './../../../assets/images/user-icon2.png';
import { NavLink } from 'react-router-dom';

const User = (props) => {
  return (
    <li className={styles.user}>
      <div className={styles.iconBlock}>
        <NavLink to={'/profile/' + props.id}>
          <img
            className={styles.icon}
            src={props.photos.small != null ? props.photos.small : userIcon}
            alt="user icon"
          />
        </NavLink>
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
          <span className={styles.name}>{props.name}</span>
          <span className={styles.status}>{props.status}</span>
        </div>
        {/* <div className={styles.countryBlock}>
          <span className={styles.country}>{props.location.country}</span>
          <span className={styles.city}>{props.location.city}</span>
        </div> */}
      </div>
    </li>
  );
};

export default User;
