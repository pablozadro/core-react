import usersReducer from '../components/users/reducer';

interface IState {
  [key: string]: any;
}

const initialState: IState = {};

export default function reducer(state = initialState, action: any) {
  return {
    users: usersReducer(state.users, action)
  }
}