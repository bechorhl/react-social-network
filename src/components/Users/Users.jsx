import React from 'react';
import styles from './Users.module.css';
import User from './User/User';

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl: '',
        followed: false,
        fullName: 'Dmitry',
        status: 'I am a boss',
        location: { city: 'Minsk', country: 'Belarus' },
      },
      {
        id: 2,
        photoUrl: '',
        followed: true,
        fullName: 'Sasha',
        status: 'I am a boss too',
        location: { city: 'Moscow', country: 'Russia' },
      },
      {
        id: 3,
        photoUrl: '',
        followed: false,
        fullName: 'Andrew',
        status: 'I am a boss too',
        location: { city: 'Kiev', country: 'Ukraine' },
      },
    ]);
  }

  let usersList = props.users.map((user) => (
    <User
      key={user.id}
      id={user.id}
      fullName={user.fullName}
      followed={user.followed}
      status={user.status}
      location={user.location}
      follow={props.follow}
      unfollow={props.unfollow}
    />
  ));

  return (
    <div className={styles.users}>
      <ul className={styles.userList}>{usersList}</ul>
    </div>
  );
};

export default Users;
