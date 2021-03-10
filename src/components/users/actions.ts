import {
  USER_FETCH_INPROGRESS,
  USER_FETCH_OK,
  USER_FETCH_ERROR
} from './types';

export interface IUsersAction {
  type: string;
  payload: { 
    users?: Array<{}>;
    isFetching?: boolean;
    error?: string;
  }
}

export function fetchUsersInprogress(): IUsersAction {
  return {
    type: USER_FETCH_INPROGRESS,
    payload: {}
  }
}
export function fetchUsersOk(users: Array<{}>): IUsersAction {
  return {
    type: USER_FETCH_OK,
    payload: { users: users }
  }
}
export function fetchUsersError(error: string): IUsersAction {
  return {
    type: USER_FETCH_ERROR,
    payload: { error: error }
  }
}