import styled, { keyframes } from 'styled-components';

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

    width: 3rem;
    height: 3rem;

    border: none;
    border-radius: 100%;
    box-shadow: ${({theme}) => theme.shadow};

    position: fixed;
    top: 42rem;
    left: 12rem;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    transition: transform 0s ease;

    &:hover {
        animation: ${rotate} 1s linear;
    }

`;