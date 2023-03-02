import {useEffect, useState} from "react";
import {StyledPizzas} from "./StyledPizzas";
import {Pizza} from "../Pizza";
import {SkeletonPizza} from "../Pizza/SkeletonPizza";
import {NotFoundPizzas} from "./NotFoundPizzas";
import {useSelector} from "react-redux";
import {baseUrl} from "../../config";

export function Pizzas() {
  const skeletons = [...new Array(4)].map((_, index) => (<SkeletonPizza key={index}/>));
  const [isLoaded, setIsLoaded] = useState(false);
  const [pizzas, setPizzas] = useState([]);
  const {categoryId, searchValue, sortType} = useSelector((state) => state.filter);

  useEffect(() => {
    setIsLoaded(false);
    const category = categoryId === 0 ? '' : `&category=${categoryId}`;
    const search = searchValue ? `&search=${searchValue}` : '';
    const sort = `&sortBy=${sortType}`;
    const url = `${baseUrl}${category}${search}${sort}`;

    fetch(url)
      .then((respond) => {
        return respond.json();
      })
      .then((arr) => {
        setPizzas(arr);
        setIsLoaded(true);
      })

    window.scrollTo(0, 0);
  }, [sortType, categoryId, searchValue, setPizzas])

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