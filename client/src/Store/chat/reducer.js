import { actionTypes } from './actionTypes';

export const initialState = {
  onlineUsers: [],
  messages: [],
  newMessage: '',
  rooms: [],
  currentRoom: '',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_VALUE:
      return { ...state, [action.payload.name]: action.payload.value };
    case actionTypes.PUT_ONLINE_USERS:
      return { ...state, onlineUsers: action.payload };
    case actionTypes.PUT_MESSAGES:
      return { ...state, messages: [...state.messages, action.payload] };
    case actionTypes.SET_ALL_ROOMS:
      return { ...state, rooms: action.payload };
    default: return { ...state };
  }
};
