import styled from "styled-components"

export const ButtonContent = styled.main `
    background: ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.text};
    padding: .5rem 2rem;
    border-radius: .4rem;

    font-family: ${({theme}) => theme.fonts.primary};
    font-size: small;
    font-weight: 400;
    cursor: pointer;
`;