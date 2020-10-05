import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 62.5%; 
  }
`;
