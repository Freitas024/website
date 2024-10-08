import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  
`;
export const lightTheme = {
  body: '#FFFFFF',
  text: '#212529',
  title: '#212529',
  inverse: '#212529',
  shadow: '0px 0px 3px 0px rgba(0, 0, 0, .3)'
};
export const darkTheme = {
  body: '#212529',
  text: '#f1faee',
  title: '#e9ecef',
  inverse: 'FFFFFF',
  shadow: '0px 0px 3px 0px rgba(250, 250, 250, .2)'
};