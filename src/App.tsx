import {
  Routes,
  Route,
} from "react-router";
import { Suspense, lazy } from "react";
import {DefaultLayout} from "./layouts/DefaultLayout";

const Home = lazy(() => import( /* webpackChunkName: "Home" */'./pages/Home'));
const Cart = lazy(() => import(/* webpackChunkName: "Cart" */'./pages/Cart/Cart'));
const Thanks = lazy(() => import(/* webpackChunkName: "Thanks" */'./pages/Thanks'));
const Error = lazy(() => import(/* webpackChunkName: "Error" */'./pages/Error/Error'));

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