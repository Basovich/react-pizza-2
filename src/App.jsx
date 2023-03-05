import {
  Routes,
  Route,
} from "react-router-dom";
import {Home} from "./pages/Home";
import {Cart} from "./pages/Cart/Cart";
import {Thanks} from "./pages/Thanks";
import {Error} from "./pages/Error";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="cart" element={<Cart />} />
      <Route path="thanks" element={<Thanks />} />
      <Route path="*" element={<Error />} />
    </Routes>
  )
}