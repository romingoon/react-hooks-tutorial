import { useReducer } from 'react';
import useCounter from '../hooks/useCounter';

const Counter = () => {
  const [state, dispatch] = useCounter({ value: 0 });

  return (
    <div>
      <p>현재 카운트 값은 {state.value} 입니다</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>reset</button>
    </div>
  );
};

export default Counter;
