import React from 'react';
import styles from './Friends.module.css';
import Friend from './Friend/Friend';

const Friends = (props) => {
  let friendsList = props.friends.map((friend) => (
    <Friend key={friend.id} name={friend.name} />
  ));

  return (
    <div className={styles.friends}>
      <h2 className={styles.title}>Friends</h2>
      <ul className={styles.friendsList}>{friendsList}</ul>
    </div>
  );
};

export default Friends;
