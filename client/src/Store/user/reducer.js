import { actionTypes } from './actionTypes';
import { backgroundUrls } from '../../components/UI/baseLayout';

export const initialState = {
  theme: backgroundUrls,
  themeMode: 'light',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_VALUE:
      return { ...state, [action.payload.name]: action.payload.value };
    default: return { ...state };
  }
};
