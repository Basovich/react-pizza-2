import {createContext, useState} from "react";
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
  const [currentPage, setCurrentPage] = useState(1);
  const [countPage, setCountPage] = useState(1);

  return (
    <PizzasContext.Provider value={
      {
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