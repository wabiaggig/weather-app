import styled from "styled-components";

export const Search = styled.div`
  margin: 0 10px;
  outline: none;
`;
export const Input = styled.input`
  border-radius: 5px;
  margin: 2px;
  text-align: justify;
  border: 1px solid #fff;
`;
export const Button = styled.button`
  border-radius: 5px;
  background-color: #07252d;
  border: 1px solid #fff;
  color: #fff;
  text-shadow: 0 0 10px #03bcf4, 0 0 20px #03bcf4, 0 0 40px #03bcf4,
    0 0 80px #03bcf4, 0 0 160px #03bcf4;
  text-align: center;
  &:hover {
    cursor: pointer;
    background-color: red;
  }
`;
