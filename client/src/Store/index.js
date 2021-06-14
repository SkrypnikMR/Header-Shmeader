import { combineReducers } from 'redux';
import { reducer as fakeReducer } from './fakes/reducer';
import { reducer as registrationReducer } from './registration/reducer';

const rootReducer = combineReducers({
    fakes: fakeReducer,
    registration: registrationReducer,
});

export default rootReducer;
