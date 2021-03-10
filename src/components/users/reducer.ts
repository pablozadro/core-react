import {
  USER_FETCH_INPROGRESS,
  USER_FETCH_OK,
  USER_FETCH_ERROR
} from './types';
import { IUsersAction } from './actions';

interface IUsersState {
  items?: Array<{}>;
  isFetching?: boolean;
  error?: string;
}

const initialState: IUsersState = {
  items: [],
  isFetching: false,
  error: ''
}

export default function usersReducer(state = initialState, action: IUsersAction): IUsersState {
  switch(action.type) {
    case USER_FETCH_INPROGRESS:
      return {
        ...state,
        isFetching: true
      }
    case USER_FETCH_OK:
      return {
        ...state,
        isFetching: false,
        items: action.payload.users
      }
    case USER_FETCH_ERROR:
      return {
        ...state,

      }
    default:
      return state
  }
}