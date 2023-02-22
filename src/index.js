import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { GlobalStyle } from "./globalStyle/globalStyle";
import {Container, Wrapper} from "./globalStyle/layout";
import {Home} from "./pages/Home";
import {Error} from "./pages/Error";
import {Cart} from "./pages/Cart";
import {Thanks} from "./pages/Thanks";

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
  {
    path: "thanks",
    element: <Thanks />,
  },
]);

root.render(
  <Wrapper>
    <GlobalStyle />
    <Container>
      <RouterProvider router={router} />
    </Container>
  </Wrapper>
);
