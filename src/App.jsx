import {
  Routes,
  Route,
} from "react-router-dom";

import {Header} from "./components/Header/Header";
import {Home} from "./pages/Home";
import {Cart} from "./pages/Cart/Cart";
import {Thanks} from "./pages/Thanks";
import {Error} from "./pages/Error/Error";

export function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="thanks" element={<Thanks />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  )
}