import {
  Routes,
  Route,
} from "react-router";
import { Suspense, lazy } from "react";
import {DefaultLayout} from "./layouts/DefaultLayout";

const Home = lazy(() => import('./pages/Home'));
const Cart = lazy(() => import('./pages/Cart/Cart'));
const Thanks = lazy(() => import('./pages/Thanks'));
const Error = lazy(() => import('./pages/Error/Error'));

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
            <Route path="" element={
              <Suspense fallback={<div>Завантаження...</div>}>
                <Home />
              </Suspense>                     
            } />
            <Route path="cart" element={
              <Suspense fallback={<div>Завантаження...</div>}>
                <Cart />
              </Suspense>
            } />
            <Route path="thanks" element={
              <Suspense fallback={<div>Завантаження...</div>}>
                <Thanks />
              </Suspense>
            } />
            <Route path="*" element={
              <Suspense fallback={<div>Завантаження...</div>}>
                <Error />
              </Suspense>
            } />
          </Route>
      </Routes>
    </>
  )
}