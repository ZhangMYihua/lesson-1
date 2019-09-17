// actions that return objects
// each object is in the correct format
// that the object is expected to be

export const setCurrentUser = user => ({
  type: 'SET_CURRENT_USER',
  payload: user
});
