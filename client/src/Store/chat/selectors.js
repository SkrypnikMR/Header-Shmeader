import { createSelector } from 'reselect';

export const userStore = state => state.chat;
export const newMessage = createSelector(
  userStore,
  ({ newMessage }) => newMessage,
);
export const messages = createSelector(
  userStore,
  ({ messages }) => messages,
);
