import {useEffect, useState} from "react";
import { StyledPizzas } from "./StyledPizzas";
import { Pizza } from "../Pizza";
import { SkeletonPizza } from "../Pizza/SkeletonPizza";

export function Pizzas({sortType, categoryId}) {
  const [pizzas, setPizzas] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
    let url = `https://63f2bca7aab7d091250c8a50.mockapi.io/pizzas/?sortBy=${sortType}`;

    if (categoryId !== 0) {
      url = `${url}&category=${categoryId}`;
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
  }, [sortType, categoryId, setIsLoaded])


  return (
    <StyledPizzas>
      {
        isLoaded
        ? pizzas.map((pizza) => <Pizza key={pizza.id} {...pizza} />)
        : [...new Array(4)].map((_, index) => <SkeletonPizza key={index} />)
      }
    </StyledPizzas>
  )
}