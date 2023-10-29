import React from 'react';
import styles from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <main className={styles.text}>
      <ProfileInfo />
      <MyPostsContainer />
    </main>
  );
};

export default Profile;
