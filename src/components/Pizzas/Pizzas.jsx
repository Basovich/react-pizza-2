import {useEffect, useState} from "react";
import { StyledPizzas } from "./StyledPizzas";
import { Pizza } from "../Pizza";
import { SkeletonPizza } from "../Pizza/SkeletonPizza";

export function Pizzas({sortType, categoryId}) {
  const [pizzas, setPizzas] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  console.log(sortType)
  console.log(categoryId)

  useEffect(() => {
    fetch('https://63f2bca7aab7d091250c8a50.mockapi.io/pizzas/')
      .then((respond) => {
        return respond.json();
      })
      .then((arr) => {
        setPizzas(arr);
        setIsLoaded(true);
      })

    window.scrollTo(0, 0);
  }, [])


  return (
    <StyledPizzas>
      {
        isLoaded
        ? pizzas.map((pizza) => <Pizza key={pizza.id} {...pizza} />)
        : [...new Array(8)].map((_, index) => <SkeletonPizza key={index} />)
      }
    </StyledPizzas>
  )
}