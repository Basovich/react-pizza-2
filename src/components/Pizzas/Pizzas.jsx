import {useEffect, useRef} from "react";
import {useNavigate, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import qs from "qs";
import isequal from "lodash.isequal";

import {setFilters} from "../../redux/slices/filterSlice";
import {changeCart} from "../../redux/slices/cartSlice";
import {fetchPizzas} from "../../redux/slices/pizzasSlice";

import {StyledPizzas} from "./StyledPizzas";
import {Pizza} from "../Pizza/Pizza";
import {SkeletonPizza} from "../Pizza/SkeletonPizza";
import {NotFoundPizzas} from "./NotFoundPizzas";

export function Pizzas() {
  const skeletons = [...new Array(4)].map((_, index) => (<SkeletonPizza key={index}/>));
  const {category, search, sortType} = useSelector((state) => state.filter);
  const {pizzas, status} = useSelector((state) => state.pizzas);
  const navigate = useNavigate();
  const isQueryChanged = useRef(false);
  const isMounted = useRef(false);
  const { state } = useLocation();
  const dispatch = useDispatch();

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
        {
          status === 'error'
            ? <NotFoundPizzas>
                An error occurred! No pizzas found! Try later!
              </NotFoundPizzas>
            : status === 'loading'
              ? <StyledPizzas>
                  {skeletons}
                </StyledPizzas>
              : pizzas.length
                ? <StyledPizzas>
                    {pizzas.map((pizza) => <Pizza key={pizza.id} {...pizza} />)}
                  </StyledPizzas>
                : <NotFoundPizzas>
                    No pizzas were found for your request. Try changing the search filter.
                  </NotFoundPizzas>
        }
    </>
  )
}