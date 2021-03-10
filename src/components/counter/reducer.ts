import { COUNTER_INCREMENT, COUNTER_DECREMENT } from './types';
import { ICounterAction } from './actions';

interface ICounterState {
  value: number;
}

const initialState:ICounterState = {
  value: 0
};

export default function counterReducer(state = initialState, action: ICounterAction): ICounterState {
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