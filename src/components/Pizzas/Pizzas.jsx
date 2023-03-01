import {useContext} from "react";
import {StyledPizzas} from "./StyledPizzas";
import {Pizza} from "../Pizza";
import {SkeletonPizza} from "../Pizza/SkeletonPizza";
import {NotFoundPizzas} from "./NotFoundPizzas";
import {PizzasContext} from "../../pages/Home";

export function Pizzas() {
  const {isLoaded, pizzas} = useContext(PizzasContext);
  const skeletons = [...new Array(4)].map((_, index) => (<SkeletonPizza key={index}/>));

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