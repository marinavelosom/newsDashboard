import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    background-color: #f0f2f5;
  }

  * {
    box-sizing: border-box;
  }

  h1 {
    text-align: center;
    margin-top: 20px;
  }
`;

export default GlobalStyles;
