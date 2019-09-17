// root reducer represents the overall reducer based on all the reducers
import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';

// the key goes to the actual reducer we want 
export default combineReducers({
  user: userReducer
})
