import * as AT from './actionTypes';

export const initialState = {
    email: '',
    password: '',
    confirm: '',
    firstName: '',
    lastName: '',
    success: '',
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case AT.SET_EMAIL_VALUE:
            return { ...state, email: action.payload };
        case AT.SET_PASSWORD_VALUE:
            return { ...state, password: action.payload };
        case AT.SET_CONFIRM_VALUE:
            return { ...state, confirm: action.payload };
        case AT.SET_FIRSTNAME_VALUE:
            return { ...state, firstName: action.payload };
        case AT.SET_LASTNAME_VALUE:
            return { ...state, lastName: action.payload };
        case AT.SET_SUCCESS_VALUE:
            return {
                ...state,
                success: action.payload,
                email: '',
                password: '',
                confirm: '',
                firstName: '',
                lastName: '',
            };
        default: return state;
    }
};
