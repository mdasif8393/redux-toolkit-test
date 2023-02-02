import React, { useState } from 'react';
import styles from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../features/counter/counterSlice';

export function Counter() {
  const [incrementAmount, setIncrementAmount] = useState('2');

  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.count);
  console.log(count)

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className={styles.row}>
        <button
        onClick={()=> dispatch(decrement(5))}
          className={styles.button}
          aria-label="Decrement value"
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
        onClick={()=> dispatch(increment())}
          className={styles.button}
          aria-label="Increment value"
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
        
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
        
        >
          Add Async
        </button>
        <button
          className={styles.button}
         
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}
