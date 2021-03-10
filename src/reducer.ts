import counterReducer from './components/counter/reducer';

interface IAction {
  type: string;
  payload: { [key: string]: any }
}

interface IState {
  counter: { value: number }
}

const initialState:IState = {
  counter: { value: 0 }
}

export default function reducer(state = initialState, action: IAction ) {
  return {
    counter: counterReducer(state.counter, action)
  }
}