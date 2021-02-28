import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    padding: 0; 
    margin: 0; 
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,\n    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif; 
  }

  body {
    padding: 0; 
    margin: 0; 
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,\n    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;  
  }

  a { 
      color: inherit; text-decoration: none;
  }

  * { box-sizing: border-box; }
`;
