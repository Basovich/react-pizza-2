import {StyledFilters} from "./StyledFilters";
import {Category} from "../Category/Category";
import {Sort} from "../Sort/Sort";

export function Filters({sortType, onChangeSortType, categoryId, onChangeCategoryId}) {
  return (
    <StyledFilters>
      <Category id={categoryId} onChange={onChangeCategoryId} />
      <Sort type={sortType} onChange={onChangeSortType} />
    </StyledFilters>
  )
}