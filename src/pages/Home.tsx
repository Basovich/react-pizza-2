import {useEffect, useRef} from "react";
import {useLocation, useNavigate} from "react-router";
import qs from "qs";
import isequal from "lodash.isequal";
import {useAppDispatch, useAppSelector} from "../hooks/redux-hooks";
import { selectFilter } from "../redux/slices/filter/selectors";
import { setFilters } from "../redux/slices/filter/slice";
import {Filters} from "../components/Filters/Filters";
import {Title} from "../components/Title/Title";
import {Pizzas} from "../components/Pizzas/Pizzas";
import { FilterInterface } from "../redux/slices/filter/types";
import { fetchPizzas } from "../redux/slices/pizzas/slice";

export function Home() {
  const navigate = useNavigate();
  const isMounted = useRef(false);
  const location = useLocation();
  const state = location.state as FilterInterface;
  const {category, search, sortType} = useAppSelector(selectFilter);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (state) {
      const queryString = qs.stringify({
        search,
        sortType,
        category
      } as FilterInterface, { addQueryPrefix: true });

      const currentParams: FilterInterface = {
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
      } as FilterInterface, { addQueryPrefix: true });

      navigate(`${queryString}`);
    }

    isMounted.current = true;
  }, [sortType, category, search, navigate])

  useEffect(() => {
    const {search} = window.location;

    if (search) {
      const params = qs.parse(search.replace('?', '')) as unknown as FilterInterface;
      const currentParams: FilterInterface = {
        search,
        sortType,
        category: category
      };

      if (!isequal(params, currentParams)) {

        dispatch(setFilters(params));
      }
    }
  }, [dispatch, category, search, sortType])

  useEffect(() => {
      const categoryId = category === 0 ? '' : `&category=${category}`;
      const searchValue = search ? `&search=${search}` : '';
      const sort = `sortBy=${sortType}`;

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