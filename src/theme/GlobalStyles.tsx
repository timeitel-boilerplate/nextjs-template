import { theme } from '@theme';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    padding: 0; 
    margin: 0; 
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif; 
    height: 100%;
  }

  body {
    padding: 0; 
    margin: 0; 
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;  
    color: ${theme.color.grey700};
    background: ${theme.color.white};
    height: 100%;
  }

  #__next {
    height: 100%;
  }

  a { 
      color: inherit; text-decoration: none;
  }

  * { box-sizing: border-box; }
`;
