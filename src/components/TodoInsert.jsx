import React, { useState } from 'react';
import { styled } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { ButtonCore } from '../components/button/index';
import CustomInput from '../components/input/index';
import axios from 'axios';

const TodoInsert = ({ dispatch }) => {
  const initialState = {
    id: '',
    title: '',
    content: '',
    checked: '',
  };

  const [todo, setTodo] = useState(initialState);

  const onChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setTodo({ ...todo, [name]: value });
  };

  // const addTodo = (e) => {
  //   e.preventDefault();

  //   if (!todo.title || !todo.content)
  //     return window.confirm('입력하지 않은 항목이 있습니다');

  //   fetch('http://localhost:3001/todos', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(todo),
  //   })
  //     .then(() => {
  //       fetch('http://localhost:3001/todos')
  //         .then((res) => res.json())
  //         .then((res) => {
  //           return dispatch({ type: 'FETCH', payload: res });
  //         });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  const addTodo = async (e) => {
    e.preventDefault();

    if (!todo.title || !todo.content) {
      return window.confirm('입력하지 않은 항목이 있습니다');
    }

    try {
      await axios.post('http://localhost:3001/todos', todo);

      const response = await axios.get('http://localhost:3001/todos');
      dispatch({ type: 'FETCH', payload: response.data });
    } catch (error) {
      console.error('Error adding todo: ', error);
    }
  };

  return (
    <TodoInsertContainer>
      <CustomInput
        type='text'
        name='title'
        placeholder='제목을 입력하세요'
        value={todo.title}
        onChange={onChange}
      />
      <CustomInput
        type='text'
        name='content'
        placeholder='본문을 입력하세요'
        value={todo.content}
        onChange={onChange}
      />
      <ButtonCore theme='rectangle' onClick={addTodo}>
        <MdAdd />
      </ButtonCore>
    </TodoInsertContainer>
  );
};

export default TodoInsert;

const TodoInsertContainer = styled.div`
  display: flex;
  /* height: 30px; */
`;
