import {useEffect, useState} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {changeCountPage, changeCurrentPage} from "../../redux/slices/filterSlice";
import {baseUrl} from "../../config";
import {StyledPizzas} from "./StyledPizzas";
import {Pizza} from "../Pizza";
import {SkeletonPizza} from "../Pizza/SkeletonPizza";
import {NotFoundPizzas} from "./NotFoundPizzas";
import {Pagination} from "../Paginate/Pagination";

export function Pizzas() {
  const skeletons = [...new Array(4)].map((_, index) => (<SkeletonPizza key={index}/>));
  const [isLoaded, setIsLoaded] = useState(false);
  const [pizzas, setPizzas] = useState([]);
  const {categoryId, searchValue, sortType, currentPage, countPage} = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoaded(false);
    const category = categoryId === 0 ? '' : `&category=${categoryId}`;
    const search = searchValue ? `&search=${searchValue}` : '';
    const sort = `&sortBy=${sortType}`;
    const pageCurrent = `&page=${currentPage + 1}`;

    function getCountPizzas() {
      return axios.get(`${baseUrl}${category}${search}`)
    }

    function getPizzas() {
      return axios.get(`${baseUrl}limit=4${pageCurrent}${sort}${category}${search}`);
    }

    Promise.all([getCountPizzas(), getPizzas()])
      .then(function (results) {
        const countPizzas = results[0];
        const pizzas = results[1];
        const countPages = Math.ceil(countPizzas.data.length / 4) === 1
          ? 0
          : Math.ceil(countPizzas.data.length / 4);
        const pageCurrent = Math.ceil(countPizzas.data.length / 4) === 1
          ? 0
          : currentPage;

        dispatch(changeCurrentPage(pageCurrent));
        dispatch(changeCountPage(countPages));
        setPizzas(pizzas.data);
        setIsLoaded(true);
      })
      .catch(function (error) {
        setPizzas([]);
        dispatch(changeCurrentPage(1));
        dispatch(changeCountPage(0));
      });

    window.scrollTo(0, 0);
  }, [sortType, categoryId, searchValue, setPizzas, currentPage, dispatch])


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
      {
        countPage ? <Pagination/> : null
      }
    </>
  )
}