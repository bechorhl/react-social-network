import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={styles.posts}>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div>New post</div>
      <div>
        <ul>
          <Post />
          <Post />
        </ul>
      </div>
    </div>
  );
};

export default MyPosts;
