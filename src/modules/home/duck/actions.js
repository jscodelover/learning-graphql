import types from './constants';

const incrementCount = (payload) => ({
  type: types.INCREMENT_COUNT,
  payload,
});

const decrementCount = (payload) => ({
  type: types.DECREMENT_COUNT,
  payload,
});

export default {
  incrementCount,
  decrementCount,
};
