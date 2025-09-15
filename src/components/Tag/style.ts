import styled from "styled-components"

export const TagContent = styled.main `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding: 0.5rem 1rem;
    gap: 1rem;

    border: solid 1px #7543FE;
    border-radius: 12rem;
    background-color: rgba(117, 67, 254, .2);

    h2{
        color: ${({theme}) => theme.colors.primary};
        font-size: small;
        font-weight: 500;
        white-space: nowrap;
    }
`;