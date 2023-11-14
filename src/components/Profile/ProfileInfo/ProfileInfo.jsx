// ProfileInfo.jsx
import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import styles from './ProfileInfo.module.css';
import classNames from 'classnames';
import mainImg from './../../../assets/images/main-image.png';
import userIcon from '../../../assets/images/user-icon2.png';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  let contactList = [];

  for (let key in props.profile.contacts) {
    if (props.profile.contacts[key]) {
      contactList.push(
        <div className={styles.contactItem}>
          <a
            key={key}
            className={styles.contactLink}
            target="_blank"
            href={`https://${props.profile.contacts[key]}`}
          >
            {key}
          </a>
        </div>
      );
    }
  }

  return (
    <div>
      <div>
        <img className={styles.mainImage} src={mainImg} alt="blue waves" />
      </div>
      <div className={styles.descriptionBlock}>
        {props.profile.photos.small ? (
          <img src={props.profile.photos.small} alt="user" />
        ) : (
          <img className={styles.userIcon} src={userIcon} alt="user icon" />
        )}

        <div className={classNames(styles.userDetail)}>
          Name: {props.profile.fullName}
        </div>
        <div className={classNames(styles.userDetail)}>
          About me: {props.profile.aboutMe}
        </div>
        <div className={classNames(styles.userDetail)}>
          Looking for a job: {props.profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        <div className={classNames(styles.userDetail)}>
          Looking for a job description:{' '}
          {props.profile.lookingForAJobDescription}
        </div>
        <div className={classNames(styles.userDetail, styles.contacts)}>
          Contacts:
          {contactList}
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
