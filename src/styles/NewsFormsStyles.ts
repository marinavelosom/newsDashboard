import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;

  & > div {
    margin-right: 10px;
  }

  & > button {
    padding: 5px 10px;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
`;

export const Button = styled.button`
  /* width: 40%; */
  height: 33px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #8884d8;
  color: white;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
  `;

export const ButtonClear = styled.button`
  position: absolute;
  right: 5px;
  top: 60%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: gray;
  &:hover {
    color: black;
  }
`;

export const SearchInputContainer = styled.div`
  position: relative;
`;