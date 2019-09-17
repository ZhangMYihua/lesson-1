// actions that return objects
// each object is in the correct format
// that the object is expected to be
import { userActionTypes } from './user.types';

export const setCurrentUser = user => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user
});
