import styled, { keyframes } from "styled-components";

//Definindo animação!!!
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(190deg);
  }
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.body};

  width: 42px;
  height: 42px;

  border: none;
  border-radius: 100%;
  box-shadow: ${({ theme }) => theme.shadow};

  position: fixed;
  top: 90%;
  left: 3%;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  transition: transform 0s ease;

  &:hover {
    animation: ${rotate} 1s linear;
  }
`;
