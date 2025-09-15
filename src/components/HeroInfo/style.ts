import styled from "styled-components";

export const HeroInfoContent = styled.main`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;

`;

export const TextContent = styled.h2 `
    font-size: 3rem;
    font-weight: 600;
    span {
        color: ${({theme}) => theme.colors.primary};

    }
`;

export const SubText = styled.h4 `
    font-size: 1rem;
    font-weight: 400;
    color: ${({theme}) => theme.colors.text}
`;
