import {useEffect, useState} from "react";
import { StyledPizzas } from "./StyledPizzas";
import { Pizza } from "../Pizza/Pizza";

export function Pizzas() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch('https://63f2bca7aab7d091250c8a50.mockapi.io/pizzas/')
      .then((respond) => {
        return respond.json();
      })
      .then((arr) => {
        setPizzas(arr);
      })
  }, [setPizzas])


  return (
    <StyledPizzas>
      {pizzas.map((pizza) => (
        <Pizza key={pizza.id} {...pizza} />
      ))}
    </StyledPizzas>
  )
}