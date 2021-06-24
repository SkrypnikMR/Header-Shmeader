import { actionTypes } from './actionTypes';

export const initialState = {
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
