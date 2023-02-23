import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from "./globalStyle/globalStyle";
import {Container, Wrapper} from "./globalStyle/layout";
import {App} from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Wrapper>
    <GlobalStyle />
    <Container>
      <App />
    </Container>
  </Wrapper>
);
