import React from 'react';
import ProfileContactsBlock from './ProfileContactsBlock';
import classNames from 'classnames';
import styles from './ProfileInfo.module.css';

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div className={classNames(styles.block, styles.profileDataBlock)}>
      {isOwner && (
        <button
          className={classNames(styles.editProfileButton)}
          onClick={goToEditMode}
        >
          edit profile
        </button>
      )}
      {console.log('ProfileData.jsx, log of profile')}
      {console.log(profile)}
      <div className={classNames(styles.userDetail)}>
        <b>Full name:</b> {profile.fullName}
      </div>
      <div className={classNames(styles.userDetail)}>
        <b>Looking for a job:</b> {profile.lookingForAJob ? 'yes' : 'no'}
      </div>
      {profile.lookingForAJob && (
        <div className={classNames(styles.userDetail)}>
          <b>My professional skills:</b>
          {profile.lookingForAJobDescription}
        </div>
      )}
      <div className={classNames(styles.userDetail)}>
        <b>About me:</b> {profile.aboutMe}
      </div>

      <div
        className={classNames(styles.block, styles.userDetail, styles.contacts)}
      >
        <b>Contacts:</b>
        <ProfileContactsBlock profile={profile} />
      </div>
    </div>
  );
};

export default ProfileData;
