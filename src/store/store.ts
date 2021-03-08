import { createStore } from 'redux';
import reducer from './reducer';

const store: any = createStore(reducer);

console.log('- store -', store.getState())

export default store;