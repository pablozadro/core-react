import { COUNTER_INCREMENT, COUNTER_DECREMENT } from './types';
import { IAction } from './actions';

interface IState {
  value: number;
}

const initialState:IState = {
  value: 0
};

export default function counterReducer(state = initialState, action: IAction): IState {
  switch(action.type) {
    case COUNTER_INCREMENT:
      return {
        value: state.value + action.payload.amount
      };
    case COUNTER_DECREMENT:
      return {
        value: state.value - action.payload.amount
      };
    default:
      return state;
  }
}