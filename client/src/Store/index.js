import { combineReducers } from 'redux';
import { reducer as fakeReducer } from './fakes/reducer';
import { reducer as registrationReducer } from './registration/reducer';
import { reducer as loginReducer } from './login/reducer';
import { reducer as userReducer } from './user/reducer';

const rootReducer = combineReducers({
  fakes: fakeReducer,
  registration: registrationReducer,
  login: loginReducer,
  user: userReducer,
});


export default rootReducer;
