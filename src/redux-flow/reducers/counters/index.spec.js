import deepFreeze from 'deep-freeze';
import {
  ADD_COUNTER, REMOVE_COUNTER, INCREMENT, DECREMENT,
} from './actions';
import counters, { initialState } from './index';

it('should add a counter', () => {
  const before = deepFreeze([]);
  const action = deepFreeze({
    type: ADD_COUNTER,
  });
  const after = [0];
  expect(counters(before, action)).toEqual(after);
});

it('should add another counter', () => {
  const before = deepFreeze([0]);
  const action = deepFreeze({
    type: ADD_COUNTER,
  });
  const after = [0, 0];
  expect(counters(before, action)).toEqual(after);
});

it('should remove a counter', () => {
  const before = deepFreeze([0, 1, 0]);
  const action = deepFreeze({
    type: REMOVE_COUNTER,
    index: 2,
  });
  const after = [0, 1];
  expect(counters(before, action)).toEqual(after);
});

it('should increment a counter', () => {
  const before = deepFreeze([1, 2]);
  const action = deepFreeze({
    type: INCREMENT,
    index: 1,
  });
  const after = [1, 3];
  expect(counters(before, action)).toEqual(after);
});

it('should decrement a counter', () => {
  const before = deepFreeze([1, 3, 4]);
  const action = deepFreeze({
    type: DECREMENT,
    index: 2,
  });
  const after = [1, 3, 3];
  expect(counters(before, action)).toEqual(after);
});

it('should return state if action is unknown', () => {
  const before = deepFreeze([0, 0, 1]);
  const action = deepFreeze({
    type: 'UNKNOWN',
    index: 1,
  });
  const after = [0, 0, 1];
});

it('should return initial state if action is undefined', () => {
  const before = undefined;
  const action = deepFreeze({});
  const after = initialState;
  expect(counters(before, action)).toEqual(after);
});
