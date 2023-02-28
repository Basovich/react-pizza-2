import {StyledFilters} from "./StyledFilters";
import {Category} from "../Category/Category";
import {Sort} from "../Sort/Sort";

export function Filters() {
  return (
    <StyledFilters>
      <Category />
      <Sort />
    </StyledFilters>
  )
}