import { 
  FETCH_USERS_OK, 
  FETCH_USERS_ERR,
  FETCH_USERS_FETCHING 
} from './types';

interface IAction {
  type: string;
  payload: {
    [key: string]: any
  }
}

interface IState {
  items: [];
  fetching: boolean;
  err: any;
  [key: string]: any
}

const initialState: IState = {
  items: [],
  fetching: false,
  err: null
}

export default function usersReducer(state = initialState, action: IAction): IState {
  switch (action.type) {
    case FETCH_USERS_FETCHING:
      console.log('- action : fetching -');
      return {
        ...state,
        fetching: true,
        error: null
      };
    case FETCH_USERS_OK:
      console.log('- action : ok -');
      return {
        ...state,
        fetching: false,
        error: null,
        items: action.payload.users
      };
    case FETCH_USERS_ERR:
      console.log('- action : err -');
      return {
        ...state,
        fetching: false,
        err: action.payload.err,
        items: []
      };
    default:
      return state
  }
}