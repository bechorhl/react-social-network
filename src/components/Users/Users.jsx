import Paginator from '../common/Paginator/Paginator';
import User from './User/User';
import styles from './Users.module.css';

const Users = (props) => {
  return (
    <div className={styles.users}>
      <Paginator
        totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        onPageChanged={props.onPageChanged}
        portionSize={props.portionSize}
      />
      <ul className={styles.userList}>
        {props.users.map((user) => (
          <User
            key={user.id}
            id={user.id}
            name={user.name}
            photos={user.photos}
            followed={user.followed}
            status={user.status}
            follow={props.follow}
            unfollow={props.unfollow}
            followingInProgress={props.followingInProgress}
          />
        ))}
      </ul>
    </div>
  );
};

export default Users;
