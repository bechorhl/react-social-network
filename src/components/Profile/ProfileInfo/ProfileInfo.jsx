import React from 'react';
import styles from './ProfileInfo.module.css';
import mainImg from './../../../assets/images/main-image.png';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img className={styles.mainImage} src={mainImg} />
      </div>
      <div className={styles.descriptionBlock}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
