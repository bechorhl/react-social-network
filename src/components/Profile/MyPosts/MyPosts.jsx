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
          <Post message="Hi! how are you?" likesCount="15" />
          <Post message="It's my first post" likesCount="20" />
        </ul>
      </div>
    </div>
  );
};

export default MyPosts;
