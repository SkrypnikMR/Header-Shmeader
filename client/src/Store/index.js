import { combineReducers } from 'redux';
import { reducer as fakeReducer } from './fakes/reducer';
import { reducer as registrationReducer } from './registration/reducer';
import { reducer as loginReducer } from './login/reducer';

const rootReducer = combineReducers({
    fakes: fakeReducer,
    registration: registrationReducer,
    login: loginReducer,
});


export default rootReducer;
