import {Filters} from "../components/Filters/Filters";
import {Title} from "../components/Title/Title";
import {Pizzas} from "../components/Pizzas/Pizzas";
import {Header} from "../components/Header/Header";
import {useState} from "react";
import {Pagination} from "../components/Pagination/Pagination";

export const sortTypes = ['popular', 'price'];
export const categories = [
  'All',
  'Meat',
  'Vegetarian',
  'Grill',
  'Spicy',
  'Closed',
]

export function Home() {
  const [sortType, setSortType] = useState(sortTypes[0]);
  const [categoryId, setCategoryId] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');

  return (
    <>
      <Header isNeedCartButton={true}
              isNeedSearch={true}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
      />
      <Filters sortType={sortType}
               onChangeSortType={setSortType}
               categoryId={categoryId}
               onChangeCategoryId={setCategoryId}
      />
      <Title>
        All pizzas
      </Title>
      <Pizzas sortType={sortType} categoryId={categoryId} search={searchValue} currentPage={currentPage} />
      { categoryId === 0 &&
        <Pagination onChangePage={setCurrentPage}/>}
    </>
  )
}