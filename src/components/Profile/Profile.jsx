import React from 'react';
import styles from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <main className={styles.text}>
      <ProfileInfo />
      <MyPosts posts={props.state.posts} />
    </main>
  );
};

export default Profile;
