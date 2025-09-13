import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
    body {
        background: ${({theme}) => theme.colors.backgroundGradient};
        font-family: ${({theme}) => theme.fonts.primary};
        font-weight: 600;
        font-size: medium;
        color: ${({theme}) => theme.colors.text};
    }
`;
