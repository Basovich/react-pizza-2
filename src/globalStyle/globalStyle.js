import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle `
  ${reset}
  
  *, 
  *:after, 
  *:before {
    box-sizing: border-box;
  }
  
  body {
    padding: 0;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    color: #222;

    scrollbar-width: auto;
    scrollbar-color: rgb(255, 223, 140) rgb(34, 34, 34);

    &::-webkit-scrollbar {
      width: 10px;
    }

    &::-webkit-scrollbar-track {
      background-color: rgb(255, 223, 140);
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgb(34, 34, 34);
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
  
  button {
    cursor: pointer;
  }

  *::selection {
    background-color: rgb(254, 95, 30);
    color: #fff;
  }
`;