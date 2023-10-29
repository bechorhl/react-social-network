import React from 'react';
import {
  addPostActionCreator,
  updateNewPostActionCreator,
} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
  const addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  const onPostChange = (text) => {
    props.store.dispatch(updateNewPostActionCreator(text));
  };

  return (
    <MyPosts
      posts={props.store.getState().profilePage.posts}
      newPostText={props.store.getState().profilePage.newPostText}
      addPost={addPost}
      updateNewPostText={onPostChange}
    />
  );
};

export default MyPostsContainer;
