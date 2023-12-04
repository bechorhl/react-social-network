// MyPosts.jsx
import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { maxLength, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

const MyPosts = React.memo((props) => {
  console.log('RENDER');
  const postsElements = props.posts.map((post) => (
    <Post key={post.id} message={post.message} likesCount={post.likesCount} />
  ));

  const onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={styles.postsBlock}>
      <h3>My posts</h3>
      <AddNewPostForm onSubmit={onAddPost} />
      <div>
        <ul className={styles.posts}>{postsElements}</ul>
      </div>
    </div>
  );
});

let AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          className={styles.textarea}
          name="newPostText"
          component={Textarea}
          placeholder="Enter your post here..."
          validate={[required, maxLength(10)]}
        />
      </div>
      <div>
        <button className={styles.addButton}>Add post</button>
      </div>
    </form>
  );
};

AddNewPostForm = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm);

export default MyPosts;
