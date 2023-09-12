import React from 'react';
import { styled } from 'styled-components';

const TodoTemplate = ({ children }) => {
  return (
    <TodoTemplateContainer>
      <AppTitle>Todo List</AppTitle>
      <Content>{children}</Content>
    </TodoTemplateContainer>
  );
};

export default TodoTemplate;

const TodoTemplateContainer = styled.div`
  width: 512px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 6rem;
  border-radius: 4px;
  overflow: hidden;
`;

const AppTitle = styled.div`
  background: #b82aff;
  color: white;
  height: 4rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  background: #fff9fe;
`;
