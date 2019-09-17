import { userActionTypes } from './user.types';
//state is current state when the action gets fired
// need to set an intial state for the first time an action gets fired
const INITIAL_STATE = {
  currentUser: null
}
// set a default value for the intial state
// in the case state is null
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER:
      return{
        ...state,
        currentUser: action.payload
      }
      break;
    default:
    return state

  }
}
export default userReducer;
