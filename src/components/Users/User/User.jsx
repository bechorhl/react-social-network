import React from 'react';
import styles from './User.module.css';
import userIcon from './../../../assets/images/user-icon2.png';
import { NavLink } from 'react-router-dom';

const User = ({ user, followingInProgress, follow, unfollow }) => {
  return (
    <li className={styles.user}>
      <div className={styles.iconBlock}>
        <NavLink to={'/profile/' + user.id}>
          <img
            className={styles.icon}
            src={user.photos.small != null ? user.photos.small : userIcon}
            alt="user icon"
          />
        </NavLink>
        {user.followed ? (
          <button
            disabled={followingInProgress.some((id) => id === user.id)}
            onClick={() => {
              unfollow(user.id);
            }}
            className={styles.iconButton}
          >
            Unfollow
          </button>
        ) : (
          <button
            disabled={followingInProgress.some((id) => id === user.id)}
            onClick={() => {
              follow(user.id);
            }}
            className={styles.iconButton}
          >
            Follow
          </button>
        )}
      </div>
      <div className={styles.detailsBlock}>
        <div className={styles.nameBlock}>
          <span className={styles.name}>{user.name}</span>
          <span className={styles.status}>{user.status}</span>
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
