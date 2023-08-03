import { useReducer } from 'react';

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    case 'RESET':
      return { value: 0 };

    default:
      return state;
  }
}

export default function useCounter(initialForm: any) {
  const [state, dispatch] = useReducer(reducer, initialForm);

  return [state, dispatch];
}
