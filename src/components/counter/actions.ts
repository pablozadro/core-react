import { COUNTER_INCREMENT, COUNTER_DECREMENT } from './types';

export interface ICounterAction {
  type: string;
  payload: {
    amount: number;
  }
}

export function incrementCounter(amount: number): ICounterAction {
  return {
    type: COUNTER_INCREMENT,
    payload: { amount: amount }
  }
}

export function decrementCounter(amount: number): ICounterAction {
  return {
    type: COUNTER_DECREMENT,
    payload: { amount: amount }
  }
}