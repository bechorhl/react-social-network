import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  let posts = [
    { id: 1, message: 'Hi! How are you?', likesCount: 15 },
    { id: 2, message: "It's my first post", likesCount: 20 },
  ];

  let postsElements = posts.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} />
  ));

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
        <ul className={styles.posts}>{postsElements}</ul>
      </div>
    </div>
  );
};

export default MyPosts;
