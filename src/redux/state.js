const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

const store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi! How are you?', likesCount: 15 },
        { id: 2, message: "It's my first post", likesCount: 20 },
      ],
      newPostText: 'it-incubator.eu',
    },
    dialogsPage: {
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
      newMessageBody: '',
    },
    sidebar: {
      friends: [
        { id: 1, name: 'Andrew' },
        { id: 2, name: 'Sasha' },
        { id: 3, name: 'Sveta' },
      ],
    },
  },
  _callSubscriber() {
    console.log('State changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  _addPost() {
    const newPost = {
      id: this._state.profilePage.posts.length + 1,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },
  _updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  _sendMessage() {
    const newMessage = {
      id: this._state.dialogsPage.messages.length + 1,
      message: this._state.dialogsPage.newMessageBody,
    };
    this._state.dialogsPage.messages.push(newMessage);
    this._state.dialogsPage.newMessageBody = '';
    this._callSubscriber(this._state);
  },
  _updateNewMessageBody(message) {
    this._state.dialogsPage.newMessageBody = message;
    this._callSubscriber(this._state);
  },

  dispatch(action) {
    switch (action.type) {
      case ADD_POST:
        this._addPost();
        break;
      case UPDATE_NEW_POST_TEXT:
        this._updateNewPostText(action.newText);
        break;
      case SEND_MESSAGE:
        this._sendMessage();
        break;
      case UPDATE_NEW_MESSAGE_BODY:
        this._updateNewMessageBody(action.body);
        break;
    }
  },
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageBodyActionCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

window.state = store._state;

export default store;
