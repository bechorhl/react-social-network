import { rerenderEntireTree } from './../render';

let state = {
  profilePage: {
    posts: [
      { id: 1, message: 'Hi! How are you?', likesCount: 15 },
      { id: 2, message: "It's my first post", likesCount: 20 },
    ],
    newPostText: 'it-incubator.eu',
  },
  messagesPage: {
    dialogs: [
      { id: 1, name: 'Dimych' },
      { id: 2, name: 'Andrey' },
      { id: 3, name: 'Sveta' },
      { id: 4, name: 'Sasha' },
      { id: 5, name: 'Viktor' },
      { id: 6, name: 'Valera' },
    ],
    messages: [
      { id: 1, message: 'Hi' },
      { id: 2, message: 'How are you?' },
      { id: 3, message: 'Yo' },
      { id: 4, message: 'Yo' },
      { id: 5, message: 'Yo' },
    ],
  },
  sidebar: {
    friends: [
      { id: 1, name: 'Andrew' },
      { id: 2, name: 'Sasha' },
      { id: 3, name: 'Sveta' },
    ],
  },
};

window.state = state;

export const addPost = () => {
  let newPost = {
    id: state.profilePage.posts.length + 1,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
};

export const updateNewPostChange = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export default state;
