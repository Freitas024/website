import styled from "styled-components";

export const ButtonContent = styled.main`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  padding: 0.5rem 2rem;
  border-radius: 0.4rem;

  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: medium;
  font-weight: 400;
  cursor: pointer;

  -webkit-user-select: none; 
  -moz-user-select: none; 
  -ms-user-select: none; 
  user-select: none;

  transition: transform 0.2s ease-out 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }

  &:active {
    transform: translateY(0);
  }
`;
