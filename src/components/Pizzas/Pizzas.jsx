import { StyledPizzas } from "./StyledPizzas";
import { Pizza } from "../Pizza/Pizza";

import pizzas from '../../assets/db.json';

export function Pizzas() {
  return (
    <StyledPizzas>
      {pizzas.pizzas?.map((pizza) => (
        <Pizza key={pizza.id} {...pizza} />
      ))}
    </StyledPizzas>
  )
}