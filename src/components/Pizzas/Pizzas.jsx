import {useContext, useEffect, useState} from "react";
import { StyledPizzas } from "./StyledPizzas";
import { Pizza } from "../Pizza";
import { SkeletonPizza } from "../Pizza/SkeletonPizza";
import {NotFoundPizzas} from "./NotFoundPizzas";
import {SearchContext} from "../../pages/Home";
import {Pagination} from "../Pagination/Pagination";

export function Pizzas() {
  const {searchValue, sortType, categoryId, countPage, currentPage, setCountPage} = useContext(SearchContext);
  const [pizzas, setPizzas] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const skeletons = [...new Array(4)].map((_, index) => (<SkeletonPizza key={index} />));

  useEffect( () => {
    let urlCountPage = `https://63f2bca7aab7d091250c8a50.mockapi.io/pizzas/?sortBy=${sortType}`;

    if (categoryId !== 0) {
      urlCountPage = `${urlCountPage}&category=${categoryId}`;
    }

    if (searchValue) {
      urlCountPage = `${urlCountPage}&search=${searchValue}`;
    }

    fetch(urlCountPage)
      .then((respond) => {
        return respond.json();
      })
      .then((arr) => {
        setCountPage(Math.ceil((arr.length / 4)));
      })
  }, [sortType, categoryId, searchValue, setCountPage])

  useEffect( () => {
    setIsLoaded(false);
    let url = `https://63f2bca7aab7d091250c8a50.mockapi.io/pizzas/?sortBy=${sortType}&page=${currentPage}&limit=4`;

    if (categoryId !== 0) {
      url = `${url}&category=${categoryId}`;
    }

    if (searchValue) {
      url = `${url}&search=${searchValue}`;
    }

    fetch(url)
      .then((respond) => {
        return respond.json();
      })
      .then((arr) => {
        setPizzas(arr);
        setIsLoaded(true);
      })

    window.scrollTo(0, 0);
  }, [sortType, categoryId, currentPage, searchValue, setPizzas])

  return (
    <>
      <StyledPizzas>
        {
          isLoaded
            ? pizzas.length
            ? pizzas.map((pizza) => <Pizza key={pizza.id} {...pizza} />)
            : <NotFoundPizzas />
            : skeletons
        }
      </StyledPizzas>
      {countPage !== 1 && <Pagination />}
    </>
  )
}