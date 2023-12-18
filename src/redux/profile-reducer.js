// profile-reducer.js
import { profileAPI } from '../api/api';

const ADD_POST = 'profile-reducer/ADD-POST';
const SET_USER_PROFILE = 'profile-reducer/SET-USER-PROFILE';
const SET_STATUS = 'profile-reducer/SET-STATUS';
const DELETE_POST = 'profile-reducer/DELETE-POST';
const SAVE_PHOTO_SUCCESS = 'profile/reducer/SAVE-PHOTO-SUCCESS';

const initialState = {
  posts: [
    { id: 1, message: 'Hi! How are you?', likesCount: 15 },
    { id: 2, message: "It's my first post", likesCount: 20 },
  ],
  profile: null,
  status: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: state.posts.length + 1,
            message: action.newPostText,
            likesCount: 0,
          },
        ],
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };

    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId),
      };

    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      };

    default:
      return state;
  }
};

export const addPost = (newPostText) => ({
  type: ADD_POST,
  newPostText,
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});

export const deletePost = (postId) => ({
  type: DELETE_POST,
  postId,
});

export const savePhotoSuccess = (photos) => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});

// Thunk
export const getUserProfile = (userId) => async (dispatch) => {
  const response = await profileAPI.getProfile(userId);
  dispatch(setUserProfile(response));
};

export const getStatus = (userId) => async (dispatch) => {
  const response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response));
};

export const updateStatus = (status) => async (dispatch) => {
  const response = await profileAPI.updateStatus(status);
  if (response.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export const savePhoto = (file) => async (dispatch) => {
  const response = await profileAPI.savePhoto(file);
  if (response.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};

export default profileReducer;
