import {useEffect, useRef} from "react";
import {useLocation, useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import qs from "qs";
import isequal from "lodash.isequal";

import {selectFilter, setFilters} from "../redux/slices/filterSlice";
import {changeCart} from "../redux/slices/cartSlice";
import {fetchPizzas} from "../redux/slices/pizzasSlice";

import {Filters} from "../components/Filters/Filters";
import {Title} from "../components/Title/Title";
import {Pizzas} from "../components/Pizzas/Pizzas";

export function Home() {
  const navigate = useNavigate();
  const isQueryChanged = useRef(false);
  const isMounted = useRef(false);
  const { state } = useLocation();
  const dispatch = useDispatch();
  const {category, search, sortType} = useSelector(selectFilter);

  useEffect(() => {
    const pizzas = JSON.parse(localStorage.getItem('pizzas'));

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
    if (window.location.search) {
      const params = qs.parse(window.location.search.replace('?', ''));
      const currentParams = {
        search,
        sortType,
        category: `${category}`
      }

      if (!isequal(params, currentParams)) {
        dispatch(setFilters(params));
        isQueryChanged.current = true;
      }
    }
  }, [dispatch, category, search, sortType])

  useEffect(() => {
    if (!isQueryChanged.current) {
      const categoryId = category === 0 ? '' : `&category=${category}`;
      const searchValue = search ? `&search=${search}` : '';
      const sort = `sortBy=${sortType}`;

      dispatch(fetchPizzas({
        sort,
        categoryId,
        searchValue
      }));

      window.scrollTo(0, 0);
    }

    isQueryChanged.current = false;
  }, [dispatch, sortType, category, search])

  return (
    <>
      <Filters />
      <Title>All pizzas</Title>
      <Pizzas />
    </>
  )
}