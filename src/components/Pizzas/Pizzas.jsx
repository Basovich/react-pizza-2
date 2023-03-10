import {useEffect, useRef, useState} from "react";
import {StyledPizzas} from "./StyledPizzas";
import {Pizza} from "../Pizza/Pizza";
import {SkeletonPizza} from "../Pizza/SkeletonPizza";
import {NotFoundPizzas} from "./NotFoundPizzas";
import {useDispatch, useSelector} from "react-redux";
import {baseUrl} from "../../config";
import axios from "axios";
import qs from "qs";
import {useNavigate} from "react-router-dom";
import {setFilters} from "../../redux/slices/filterSlice";
import isequal from "lodash.isequal";
import {useLocation} from "react-router";

export function Pizzas() {
  const skeletons = [...new Array(4)].map((_, index) => (<SkeletonPizza key={index}/>));
  const [isLoaded, setIsLoaded] = useState(false);
  const [pizzas, setPizzas] = useState([]);
  const {category, search, sortType} = useSelector((state) => state.filter);
  const navigate = useNavigate();
  const isQueryChanged = useRef(false);
  const isMounted = useRef(false);
  const { state } = useLocation();
  const dispatch = useDispatch();

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
      setIsLoaded(false);
      const categoryId = category === 0 ? '' : `&category=${category}`;
      const searchValue = search ? `&search=${search}` : '';
      const sort = `sortBy=${sortType}`;

      axios.get(`${baseUrl}${sort}${categoryId}${searchValue}`)
        .then(function (response) {
          setPizzas(response.data);
        })
        .catch(function () {
          setPizzas([]);
        })
        .finally(function () {
          setIsLoaded(true);
        });

      window.scrollTo(0, 0);
    }

    isQueryChanged.current = false;
  }, [sortType, category, search, setPizzas])

  return (
    <>
      <StyledPizzas>
        {
          isLoaded
            ? pizzas.length
            ? pizzas.map((pizza) => <Pizza key={pizza.id} {...pizza} />)
            : <NotFoundPizzas/>
            : skeletons
        }
      </StyledPizzas>
    </>
  )
}