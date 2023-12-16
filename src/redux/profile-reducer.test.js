import profileReducer, { addPost, deletePost } from './profile-reducer';

const state = {
  posts: [
    { id: 1, message: 'Hi! How are you?', likesCount: 15 },
    { id: 2, message: "It's my first post", likesCount: 20 },
  ],
};

test('length of posts should be incremented', () => {
  // 1. test data
  const action = addPost('incubator.com');

  // 2. action
  const newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(3);
});

test('message of new post should be correct', () => {
  // 1. test data
  const action = addPost('incubator.com');

  // 2. action
  const newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts[2].message).toBe('incubator.com');
});

test('after deleting length of posts should be decrement', () => {
  // 1. test data
  const action = deletePost(1);

  // 2. action
  const newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(1);
});

test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});
