import { actionTypes } from './actionTypes';

export const initialState = {
  onlineUsers: [],
  messages: {},
  newMessage: '',
  rooms: [],
  currentRoom: { room_id: null, room_name: '' },
  error: false,
  isLoading: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_VALUE:
      return { ...state, [action.payload.name]: action.payload.value };
    case actionTypes.PUT_ONLINE_USERS:
      return { ...state, onlineUsers: action.payload };
    case actionTypes.PUT_NEW_MESSAGES: {
      const { room_name } = action.payload;
      const newMessages = { ...state.messages };
      newMessages[room_name]?.push(action.payload);
      return {
        ...state, messages: newMessages,
      };
    }
    case actionTypes.PUT_MESSAGES: {
      const { payload: history } = action;
      const folderWithMessages = { ...state.messages };
      history.forEach((message) => {
        if (!message.room_name) return;
        const { room_name } = message;
        if (folderWithMessages[room_name] && Array.isArray(folderWithMessages[room_name])) {
          folderWithMessages[room_name].push(message);
        }
      });
      return { ...state, messages: folderWithMessages };
    }
    case actionTypes.SET_ALL_ROOMS:
      return { ...state, rooms: action.payload };
    case actionTypes.SEND_ROOMS_REQUEST:
      return { ...state, isLoading: true };
    case actionTypes.ROOMS_REQUEST_SUCCESS:
      return { ...state, isLoading: false, error: false };
    case actionTypes.ROOMS_REQUEST_ERROR:
      return { ...state, isLoading: false, error: true };
    case actionTypes.SEND_MESSAGES_REQUEST:
      return { ...state, isLoading: true };
    case actionTypes.MESSAGES_REQUEST_SUCCESS:
      return { ...state, isLoading: false, error: false };
    case actionTypes.MESSAGES_REQUEST_ERROR:
      return { ...state, isLoading: false, error: true };
    case actionTypes.PUT_MESSAGES_FOLDERS:
      return { ...state, messages: action.payload };
    default: return { ...state };
  }
};
