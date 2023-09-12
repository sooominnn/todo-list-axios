import React from 'react';
import styled from 'styled-components';

const CustomInput = ({ name, value, onChange }) => {
  const inputChange = (e) => onChange(e);

  return (
    <Container>
      <InputCustom
        type='text'
        name={name}
        value={value}
        onChange={inputChange}
      />
    </Container>
  );
};

export default CustomInput;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* flex: 0.5; */
  margin-left: 30px;
  /* height: 40px; */
  /* margin-bottom: 20px; */
`;

const InputCustom = styled.input`
  border: none;
  font-size: 16px;
  outline: none;
`;
