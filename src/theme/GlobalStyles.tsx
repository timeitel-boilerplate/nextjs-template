import { theme } from '@theme';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    padding: 0; 
    margin: 0; 
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif; 
  }

  body {
    padding: 0; 
    margin: 0; 
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;  
    color: ${theme.colors.grey700};
    background: ${theme.colors.white};
  }

  a { 
      color: inherit; text-decoration: none;
  }

  * { box-sizing: border-box; }
`;
