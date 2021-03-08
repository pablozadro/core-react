import { 
  FETCH_USERS_OK, 
  FETCH_USERS_ERR,
  FETCH_USERS_FETCHING
} from './types';

interface IActionResponse {
  type: string;
  payload: {
    [key: string]: any
  }
}

export function fetchUsersOk(users: []): IActionResponse {
  return {
    type: FETCH_USERS_OK,
    payload: {
      users: users
    }
  }
}

export function fetchUsersErr(err: any): IActionResponse {
  return {
    type: FETCH_USERS_ERR,
    payload: {
      err: err
    }
  }
}

export function fetchUsersFetching(): IActionResponse {
  return {
    type: FETCH_USERS_FETCHING,
    payload: {}
  }
}