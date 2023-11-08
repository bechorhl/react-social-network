import User from './User/User';
import styles from './Users.module.css';

const Users = (props) => {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={styles.users}>
      <ul className={styles.pageList}>
        {pages.map((page) => (
          <li className={styles.pageItem}>
            <button
              onClick={() => {
                props.onPageChanged(page);
              }}
              className={
                props.currentPage === page
                  ? `${styles.pageButton} ${styles.selectedPage}`
                  : styles.pageButton
              }
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
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
          />
        ))}
      </ul>
    </div>
  );
};

export default Users;
