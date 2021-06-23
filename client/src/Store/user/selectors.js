import { createSelector } from 'reselect';

export const userStore = state => state.user;
export const userTheme = createSelector(
  userStore,
  ({ theme }) => theme,
);
export const userInfo = createSelector(
  userStore,
  ({ userInfo }) => userInfo,
);
export const takeSocket = createSelector(
  userStore,
  ({ socket }) => socket,
);
export const newMessage = createSelector(
  userStore,
  ({ newMessage }) => newMessage,
);
export const userThemeMode = createSelector(
  userStore,
  ({ themeMode }) => themeMode,
);
export const messages = createSelector(
  userStore,
  ({ messages }) => messages,
);
