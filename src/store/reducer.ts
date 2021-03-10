import { combineReducers } from 'redux';
import counterReducer from '../components/counter/reducer';
import usersReducer from '../components/users/reducer';

const reducer = combineReducers({
  counter: counterReducer,
  users: usersReducer
});

export default reducer;