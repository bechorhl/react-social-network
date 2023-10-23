import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={styles.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div>
        <ul className={styles.posts}>
          <Post message="Hi! how are you?" likesCount="15" />
          <Post message="It's my first post" likesCount="20" />
        </ul>
      </div>
    </div>
  );
};

export default MyPosts;
