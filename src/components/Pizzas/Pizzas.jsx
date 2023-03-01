// import {useState} from "react";
import {StyledPizzas} from "./StyledPizzas";
// import {Pizza} from "../Pizza";
// import {SkeletonPizza} from "../Pizza/SkeletonPizza";
// import {NotFoundPizzas} from "./NotFoundPizzas";

export function Pizzas() {
  // const skeletons = [...new Array(4)].map((_, index) => (<SkeletonPizza key={index}/>));
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [pizzas, setPizzas] = useState([]);

 /* useEffect(() => {
    setIsLoaded(false);
    let url = `${pizzasRout}sortBy=${sortType}`;

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
  }, [sortType, categoryId, searchValue, setPizzas])*/

  return (
    <>
      <StyledPizzas>
        pizzas
        {/*{
          isLoaded
            ? pizzas.length
            ? pizzas.map((pizza) => <Pizza key={pizza.id} {...pizza} />)
            : <NotFoundPizzas/>
            : skeletons
        }*/}
      </StyledPizzas>
    </>
  )
}