import {createContext, useEffect, useState} from "react";
import {Filters} from "../components/Filters/Filters";
import {Title} from "../components/Title/Title";
import {Pizzas} from "../components/Pizzas/Pizzas";
import {Header} from "../components/Header/Header";

export const sortTypes = ['popular', 'price'];
export const categories = [
  'All',
  'Meat',
  'Vegetarian',
  'Grill',
  'Spicy',
  'Closed',
]

export const PizzasContext = createContext(null);

export function Home() {
  const [searchValue, setSearchValue] = useState('');
  const [sortType, setSortType] = useState(sortTypes[0]);
  const [categoryId, setCategoryId] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [countPage, setCountPage] = useState(1);
  const [pizzas, setPizzas] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  console.log(countPage)
  console.log(currentPage)

  useEffect(() => {
    setIsLoaded(false);
    let url = `https://63f2bca7aab7d091250c8a50.mockapi.io/pizzas/?sortBy=${sortType}`;

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
  }, [sortType, categoryId, currentPage, searchValue, setPizzas, setCountPage])


  return (
    <PizzasContext.Provider value={
      {
        pizzas,
        isLoaded,
        searchValue,
        setSearchValue,
        sortType,
        setSortType,
        categoryId,
        setCategoryId,
        currentPage,
        setCurrentPage,
        countPage,
        setCountPage
      }
    }>
      <Header isNeedSearch={true}/>
      <Filters />
      <Title>All pizzas</Title>
      <Pizzas />
    </PizzasContext.Provider>
  )
}