import { actionTypes } from './actionTypes';
import { backgroundUrls } from '../../components/UI/baseLayout';
import { support } from '../../helpers/support';

export const initialState = {
  theme: backgroundUrls,
  themeMode: 'light',
  token: support.getSessionStorageItem('token') || null,
  userInfo: support.getSessionStorageItem('userInfo') || null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_VALUE:
      return { ...state, [action.payload.name]: action.payload.value };
    case actionTypes.SET_AUTH_VALUES:
      return { ...state, token: action.payload.token, userInfo: action.payload.userInfo };
    default: return { ...state };
  }
};
