import React from 'react';

const Counter = ({ counter, handleDecrement, handleIncrement, handleRemove }) => {
  return (
    <div>
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleRemove}>Remove Counter</button>
    </div>
  );
};

export default Counter;
