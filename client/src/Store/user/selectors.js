import { createSelector } from 'reselect';

export const userStore = state => state.user;
export const userTheme = createSelector(
  userStore,
  ({ theme }) => (theme),
);
export const userThemeMode = createSelector(
  userStore,
  ({ themeMode }) => (themeMode),
);
