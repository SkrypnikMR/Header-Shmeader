import { actionTypes } from './actionTypes';
import { backgroundUrls } from '../../components/UI/baseLayout';
import { support } from '../../helpers/support';

export const initialState = {
  theme: backgroundUrls,
  themeMode: support.getSessionStorageItem('themeMode') || 'light',
  token: support.getSessionStorageItem('token') || null,
  userInfo: support.getSessionStorageItem('userInfo') || {
    email: '',
    firstName: '',
    lastName: '',
    id: 0,
    age: 0,
    hobby: '',
    company: '',
    city: '',
  },
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
