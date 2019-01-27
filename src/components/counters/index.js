import React from 'react';
import { connect } from 'react-redux';
import { DECREMENT } from '../../redux-flow/reducers/counters/index';
import {
  increment,
  decrement,
  addCounter,
  removeCounter,
} from '../../redux-flow/reducers/counters/actionCreators';

import Counter from '../counter/index';

const Counters = ({
  counters,
  addCounter,
  hanldeRemoveCounter,
  handleIncrement,
  handleDecrement,
}) => (
  <div>
    <div>
      {counters.map((counter, index) => (
        <Counter
          counter={counter}
          key={index}
          handleRemove={hanldeRemoveCounter(index)}
          handleIncrement={handleIncrement(index)}
          handleDecrement={handleDecrement(index)}
        />
      ))}
    </div>
    <div>
      <button onClick={addCounter}>Add Counter</button>
    </div>
  </div>
);

const mapStateToProps = state => ({ counters: state });

const mapDispatchToProps = dispatch => ({
  addCounter: () => dispatch(addCounter()),
  hanldeRemoveCounter: index => () => dispatch(removeCounter(index)),
  handleIncrement: index => () => dispatch(increment(index)),
  handleDecrement: index => () => dispatch(decrement(index)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counters);
