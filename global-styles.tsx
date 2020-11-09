import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

@font-face {
  font-family: "Rubic";
  src: url("/fonts/Rubic-Regular.ttf") format("ttf"),
       url("/fonts/Rubik-SemiBold.ttf") format("ttf");
}

  body {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 62.5%; 
  }
`;
