import { COUNTER_INCREMENT, COUNTER_DECREMENT } from './types';

export interface IAction {
  type: string;
  payload: { [key: string]: any }
}

export function incrementCounter(amount: number): IAction {
  return {
    type: COUNTER_INCREMENT,
    payload: { amount: amount }
  }
}

export function decrementCounter(amount: number): IAction {
  return {
    type: COUNTER_DECREMENT,
    payload: { amount: amount }
  }
}