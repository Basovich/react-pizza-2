import {createBrowserRouter} from "react-router-dom";
import {Home} from "./Home";
import {Error} from "./Error";
import {Cart} from "./Cart";
import {Thanks} from "./Thanks";

export const router = createBrowserRouter([
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