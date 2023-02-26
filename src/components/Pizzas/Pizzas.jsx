import {useEffect, useState} from "react";
import { StyledPizzas } from "./StyledPizzas";
import { Pizza } from "../Pizza";
import { SkeletonPizza } from "../Pizza/SkeletonPizza";
import {NotFoundPizzas} from "./NotFoundPizzas";

export function Pizzas({sortType, categoryId, search}) {
  const [pizzas, setPizzas] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const skeletons = [...new Array(4)].map((_, index) => (<SkeletonPizza key={index} />));

  useEffect(() => {
    setIsLoaded(false);
    let url = `https://63f2bca7aab7d091250c8a50.mockapi.io/pizzas/?sortBy=${sortType}`;

    if (categoryId !== 0) {
      url = `${url}&category=${categoryId}`;
    }

    if (search) {
      url = `${url}&search=${search}`
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
  }, [sortType, categoryId, search, setIsLoaded])


  return (
    <StyledPizzas>
      {
        isLoaded
        ? pizzas.length
          ? pizzas.map((pizza) => <Pizza key={pizza.id} {...pizza} />)
          : <NotFoundPizzas />
        : skeletons
      }
    </StyledPizzas>
  )
}