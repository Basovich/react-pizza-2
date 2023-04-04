import {
  Routes,
  Route,
} from 'react-router';
import { Suspense, lazy } from 'react';
import {DefaultLayout} from './layouts/DefaultLayout';
import { PageLoader } from './components';

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
              <Suspense fallback={PageLoader()}>
                <Home />
              </Suspense>                     
            } />
            <Route path="cart" element={
              <Suspense fallback={PageLoader()}>
                <Cart />
              </Suspense>
            } />
            <Route path="thanks" element={
              <Suspense fallback={PageLoader()}>
                <Thanks />
              </Suspense>
            } />
            <Route path="*" element={
              <Suspense fallback={PageLoader()}>
                <Error />
              </Suspense>
            } />
          </Route>
      </Routes>
    </>
  )
}