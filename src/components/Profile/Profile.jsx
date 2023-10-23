import React from 'react';
import styles from './Profile.module.css';
import mainImg from './../../assets/images/main-image.png';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <main className={styles.text}>
      <div>
        <img className={styles.mainImage} src={mainImg} />
      </div>
      <div>ava + description</div>
      <MyPosts />
    </main>
  );
};

export default Profile;
