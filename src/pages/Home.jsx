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

export const SearchContext = createContext();

export function Home() {
  const [sortType, setSortType] = useState(sortTypes[0]);
  const [categoryId, setCategoryId] = useState(0);
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [countPage, setCountPage] = useState(1);

  return (
    <SearchContext.Provider value={
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
    </SearchContext.Provider>
  )
}