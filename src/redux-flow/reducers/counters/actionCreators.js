import {
  INCREMENT, ADD_COUNTER, DECREMENT, REMOVE_COUNTER,
} from './actions';

export const addCounter = () => ({
  type: ADD_COUNTER,
});

export const decrement = index => ({
  type: DECREMENT,
  index,
});

export const increment = index => ({
  type: INCREMENT,
  index,
});

export const removeCounter = index => ({
  type: REMOVE_COUNTER,
  index,
});
