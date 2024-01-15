import { getAuthUserData } from './auth-reducer';

const INITIALIZED_SUCCESS = 'app-reducer/INITIALIZED-SUCCESS';

const initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };

    default:
      return state;
  }
};

export const initializedSuccess = () => ({
  type: INITIALIZED_SUCCESS,
});

export const initializeApp = () => async (dispatch) => {
  try {
    await dispatch(getAuthUserData());
    dispatch(initializedSuccess());
  } catch (error) {
    alert('Some error', error);
  }
};

export default appReducer;
