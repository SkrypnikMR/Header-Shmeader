import { actionTypes } from './actionTypes';

export const initialState = {
    email: '',
    password: '',
    confirm: '',
    firstName: '',
    lastName: '',
    success: null,
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_VALUE:
            return { ...state, [action.payload.name]: action.payload.value };
        case actionTypes.CLEAR_INPUTS_VALUES:
            return {
                ...state,
                email: '',
                password: '',
                confirm: '',
                firstName: '',
                lastName: '',
            };
        default: return state;
    }
};
