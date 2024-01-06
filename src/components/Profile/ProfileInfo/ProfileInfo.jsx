// ProfileInfo.jsx
import React, { useState } from 'react';
import Preloader from '../../common/Preloader/Preloader';
import styles from './ProfileInfo.module.css';
import mainImg from './../../../assets/images/main-image.png';
import userIcon from '../../../assets/images/user-icon2.png';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import ProfileData from './ProfileData';
import ProfileDataFormRedux from './ProfileDataForm';

const ProfileInfo = ({
  profile,
  savePhoto,
  saveProfile,
  isOwner,
  status,
  updateStatus,
}) => {
  const [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData) => {
    saveProfile(formData).then(() => {
      setEditMode(false);
    });
  };

  return (
    <div>
      <div>
        <img className={styles.mainImage} src={mainImg} alt="blue waves" />
      </div>
      <div className={styles.descriptionBlock}>
        <img
          className={styles.userIcon}
          src={profile.photos.small || userIcon}
          alt="user icon"
        />

        {isOwner && (
          <input
            type="file"
            onChange={onMainPhotoSelected}
            className={styles.inputChooseFile}
          />
        )}

        {editMode ? (
          <ProfileDataFormRedux
            initialValues={profile}
            profile={profile}
            onSubmit={onSubmit}
          />
        ) : (
          <ProfileData
            profile={profile}
            isOwner={isOwner}
            goToEditMode={() => {
              setEditMode(true);
            }}
          />
        )}
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
};

export default ProfileInfo;
