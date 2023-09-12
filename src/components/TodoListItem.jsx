import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import CustomInput from '../components/input/index';
import axios from 'axios';

import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
  MdEdit,
  MdCheck,
} from 'react-icons/md';

const TodoListItem = ({ todo, dispatch }) => {
  const { id, title, content, checked } = todo;

  const [editMode, setEditMode] = useState(false);

  const [value, setValue] = useState(
    todo || { title: '', content: '', checked: false }
  );

  useEffect(() => {
    setValue(todo);
  }, [todo]);

  const onChange = (e) => {
    const text = e.target.value;
    const name = e.target.name;

    setValue({ ...value, [name]: text });
  };

  const updateTodo = async () => {
    try {
      await axios.patch(`http://localhost:3001/todos/${id}`, value);
      const response = await axios.get('http://localhost:3001/todos');
      dispatch({ type: 'FETCH', payload: response.data });
      setEditMode(false);
    } catch (error) {
      console.error('Update failed: ', error);
    }
  };

  const removeTodo = async () => {
    try {
      await axios.delete(`http://localhost:3001/todos/${id}`);
      const response = await axios.get('http://localhost:3001/todos');
      dispatch({ type: 'FETCH', payload: response.data });
    } catch (error) {
      console.error('Delete failed: ', error);
    }
  };

  const checkTodo = async () => {
    const updatedTodo = {
      ...todo,
      checked: !todo.checked,
    };

    try {
      await axios.patch(`http://localhost:3001/todos/${id}`, updatedTodo);
      const response = await axios.get('http://localhost:3001/todos');
      dispatch({ type: 'FETCH', payload: response.data });
    } catch (error) {
      console.error('Check failed: ', error);
    }
  };

  return (
    <div>
      {editMode ? (
        <ul>
          <CustomInput
            type='text'
            name='title'
            value={value.title}
            onChange={onChange}
          />
          <CustomInput
            type='text'
            name='content'
            value={value.content}
            onChange={onChange}
          />
          <MdCheck onClick={updateTodo} />
        </ul>
      ) : (
        <TodoListItemContainer>
          <TodoListItemContainerCheckBox onClick={checkTodo}>
            <MdCheckBoxStyle checked={checked}>
              {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
            </MdCheckBoxStyle>
          </TodoListItemContainerCheckBox>
          <CustomInput type='text' value={title} onChange={onChange} />
          <CustomInput type='text' value={content} onChange={onChange} />
          <MdEdit onClick={() => setEditMode(true)} />
          <TodoListItemRemove>
            <MdRemoveCircleOutline onClick={removeTodo} />
          </TodoListItemRemove>
        </TodoListItemContainer>
      )}
    </div>
  );
};

export default TodoListItem;

const TodoListItemContainer = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
`;

const TodoListItemContainerCheckBox = styled.div`
  cursor: pointer;
  /* flex: 0.8; */
  display: flex;
  align-items: center;
  svg {
    font-size: 1.5rem;
  }
  /* margin-left: 0.5rem; */
`;

const TodoListItemRemove = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #b82aff;
  cursor: pointer;
  margin-left: 0.5rem;
`;

const MdCheckBoxStyle = styled.div`
  svg {
    color: ${(props) => (props.checked ? '#b82aff' : '#ecc5ff')};
  }
`;
