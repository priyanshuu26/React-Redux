import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from './counterSlice';

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const [incrementValue, setIncrementValue] = useState(2);
  return (
    <div>
      <h1>React- Redux</h1>
      <h3>Counter component</h3>
      <div>
        <button type="button" onClick={() => dispatch(increment())}>
          +
        </button>
        <h2>{count}</h2>
        <button type="button" onClick={() => dispatch(decrement())}>
          -
        </button>
      </div>
      <input
        type="text"
        value={incrementValue}
        onChange={(e) => setIncrementValue(e.target.value)}
      />
      <button
        type="button"
        onClick={() => dispatch(incrementByAmount(Number(incrementValue)))}
      >
        Increment value
      </button>
    </div>
  );
}

export default Counter;
