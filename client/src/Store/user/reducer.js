import { actionTypes } from './actionTypes';
import { backgroundUrls } from '../../components/UI/baseLayout';
import { support } from '../../helpers/support';

export const initialState = {
  theme: backgroundUrls,
  themeMode: 'light',
  token: support.getSessionStorageItem('token') || null,
  userInfo: support.getSessionStorageItem('userInfo') || null,
  onlineUsers: [],
  messages: [],
  socket: null,
  newMessage: '',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_VALUE:
      return { ...state, [action.payload.name]: action.payload.value };
    case actionTypes.PUT_ONLINE_USERS:
      return { ...state, onlineUsers: action.payload };
    case actionTypes.PUT_MESSAGES:
      return { ...state, messages: [...state.messages, action.payload] };
    default: return { ...state };
  }
};
