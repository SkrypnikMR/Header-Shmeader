import { createSelector } from 'reselect';

export const chatStore = state => state.chat;
export const newMessage = createSelector(
  chatStore,
  ({ newMessage }) => newMessage,
);
export const messages = createSelector(
  chatStore,
  ({ messages }) => messages,
);
export const rooms = createSelector(
  chatStore,
  ({ rooms }) => rooms,
);
export const currentRoom = createSelector(
  chatStore,
  ({ currentRoom }) => currentRoom,
);
