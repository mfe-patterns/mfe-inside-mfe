import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Roboto-Regular', Open-Sans, Helvetica, Sans-Serif;
  }
  .container {
    max-width: 1280px;
    margin: 0 auto;
    width: 100%;    
  }
`;