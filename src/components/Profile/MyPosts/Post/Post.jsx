import React from 'react';
import styles from './Post.module.css';
import postIcon from './../../../../assets/images/post-icon.png';

const Post = () => {
  return (
    <li className={styles.post}>
      <img className={styles.postIcon} src={postIcon} />
      Post1
    </li>
  );
};

export default Post;
