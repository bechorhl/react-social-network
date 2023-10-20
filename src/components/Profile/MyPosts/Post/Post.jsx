import React from 'react';
import styles from './Post.module.css';
import postIcon from './../../../../assets/images/post-icon.png';

const Post = (props) => {
  return (
    <li className={styles.post}>
      <img className={styles.postIcon} src={postIcon} />
      {props.message}
      <div>
        <span>like </span>
        {props.likesCount}
      </div>
    </li>
  );
};

export default Post;
