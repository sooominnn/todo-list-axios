import React, { useEffect } from 'react';
import TodoListItem from './TodoListItem';
import { styled } from 'styled-components';
import axios from 'axios';

const TodoList = ({ todos, dispatch }) => {
  const getTodos = async () => {
    try {
      const response = await axios.get('http://localhost:3001/t11odos');
      dispatch({ type: 'FETCH', payload: response.data });
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <TodoListContainer>
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} dispatch={dispatch} />
      ))}
    </TodoListContainer>
  );
};

export default TodoList;

const TodoListContainer = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`;
