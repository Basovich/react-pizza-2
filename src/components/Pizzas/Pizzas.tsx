import { useAppSelector } from "../../hooks/redux-hooks";
import {StyledPizzas} from "./StyledPizzas";
import {Pizza} from "../Pizza/Pizza";
import {SkeletonPizza} from "../Pizza/SkeletonPizza";
import {NotFoundPizzas} from "./NotFoundPizzas";
import { selectPizzas } from "../../redux/slices/pizzas/selectors";

export function Pizzas() {
  const skeletons = [...new Array(4)].map((_, index) => (<SkeletonPizza key={index}/>));
  const {pizzas, status} = useAppSelector(selectPizzas);

  return (
    <>
        {
          status === 'error'
            ? <NotFoundPizzas>
                An error occurred! No pizzas found! Try later!
              </NotFoundPizzas>
            : status === 'loading'
              ? <StyledPizzas>
                  {skeletons}
                </StyledPizzas>
              : pizzas.length
                ? <StyledPizzas>
                    {pizzas.map((pizza) => <Pizza key={pizza.id} {...pizza} />)}
                  </StyledPizzas>
                : <NotFoundPizzas>
                    No pizzas were found for your request. Try changing the search filter.
                  </NotFoundPizzas>
        }
    </>
  )
}