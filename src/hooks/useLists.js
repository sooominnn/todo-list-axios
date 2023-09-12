import React, { useReducer } from 'react';

const useLists = () => {
  const todoReducer = (state, action) => {
    switch (action.type) {
      case 'FETCH':
        return (state = action.payload);

      default:
        return state;
    }
  };

  const [todos, dispatch] = useReducer(todoReducer, []);

  const fetchTodos = (payload) => {
    return dispatch({ type: 'FETCH', payload });
  };

  const dispatcher = { fetchTodos };

  return { todos, dispatch, dispatcher };
};

export default useLists;
