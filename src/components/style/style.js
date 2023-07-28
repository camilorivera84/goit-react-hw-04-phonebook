import styled from 'styled-components';

export const Container = styled.div`
  max-width: 200px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  border: 2px solid #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 10px rgb(251, 255, 0),
    0 0 10px rgb(242, 255, 0);
`;

export const Label = styled.label`
  font-size: 16px;
  margin-bottom: 20px;
  width: 200px;
`;

export const Input = styled.input`
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 10px;
  width: 300px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #fff;
  margin-bottom: 8px;
  border-radius: 4px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
`;

export const ContactName = styled.span`
  font-weight: bold;
`;

export const DeleteButton = styled.button`
  background-color: white;
  color: #000;
  border: 1px solid gray;
  transition: background-color 0.3s;

  &:hover {
    background-color: blue;
    color: white;
  }
`;
