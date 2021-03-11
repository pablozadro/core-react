import {
  USER_FETCH_INPROGRESS,
  USER_FETCH_OK,
  USER_FETCH_ERROR
} from './types';

export interface IUsersAction {
  type: string;
  payload: {[key: string]: any};
}

export function fetchUsersInprogress(): IUsersAction {
  console.log('- fetchUsersInprogress() -');
  return {
    type: USER_FETCH_INPROGRESS,
    payload: {}
  }
}
export function fetchUsersOk(users: Array<{}>): IUsersAction {
  console.log('- fetchUsersOk() -');
  return {
    type: USER_FETCH_OK,
    payload: { users: users }
  }
}
export function fetchUsersError(error: string): IUsersAction {
  console.log('- fetchUsersError() -');
  return {
    type: USER_FETCH_ERROR,
    payload: { error: error }
  }
}