import {useEffect, useRef} from "react";
import {useLocation, useNavigate} from "react-router";
import qs from "qs";
import isequal from "lodash.isequal";

import {useAppDispatch, useAppSelector} from "../hooks/redux-hooks";

import {selectFilter, setFilters} from "../redux/slices/filterSlice";
import {changeCart} from "../redux/slices/cartSlice";
import {fetchPizzas} from "../redux/slices/pizzasSlice";

import {Filters} from "../components/Filters/Filters";
import {Title} from "../components/Title/Title";
import {Pizzas} from "../components/Pizzas/Pizzas";

export function Home() {
  const navigate = useNavigate();
  const isMounted = useRef(false);
  const { state } = useLocation();
  const {category, search, sortType} = useAppSelector(selectFilter);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const pizzas = JSON.parse(localStorage.getItem('pizzas') as string);

    if (pizzas) {
      dispatch(changeCart({
        ...pizzas
      }))
    }
  }, [dispatch])

  useEffect(() => {
    if (state) {
      const queryString = qs.stringify({
        search,
        sortType,
        category
      }, { addQueryPrefix: true });

      const currentParams = {
        search,
        sortType,
        category
      }

      if (isequal(state, currentParams)) {
        navigate(`${queryString}`);
      }
    }
  }, [state, sortType, category, search, navigate])

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        search,
        sortType,
        category
      }, { addQueryPrefix: true });

      navigate(`${queryString}`);
    }

    isMounted.current = true;
  }, [sortType, category, search, navigate])

  useEffect(() => {
    const {search} = window.location;

    if (search) {
      const params = qs.parse(search.replace('?', ''));
      const currentParams = {
        search,
        sortType,
        category: `${category}`
      }

      if (!isequal(params, currentParams)) {

        dispatch(setFilters(params));
      }
    }
  }, [dispatch, category, search, sortType])

  useEffect(() => {
      const categoryId: string = category === 0 ? '' : `&category=${category}`;
      const searchValue: string = search ? `&search=${search}` : '';
      const sort: string = `sortBy=${sortType}`;

      dispatch(fetchPizzas({
        sort,
        categoryId,
        searchValue
      }));

      window.scrollTo(0, 0);
  }, [dispatch, sortType, category, search])

  return (
    <>
      <Filters />
      <Title>All pizzas</Title>
      <Pizzas />
    </>
  )
}