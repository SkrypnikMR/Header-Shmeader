import { combineReducers } from 'redux';
import { reducer as fakeReducer } from './fakes/reducer';

const rootReducer = combineReducers({
    fakes: fakeReducer,
});

export default rootReducer;
