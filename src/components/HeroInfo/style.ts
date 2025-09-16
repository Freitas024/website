import styled from "styled-components";

export const HeroInfoContent = styled.main`
  width: 100%;
  max-width: 1250px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
`;

export const TextContent = styled.h2`
  font-size: 3rem;
  font-weight: 600;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SubText = styled.h4`
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
