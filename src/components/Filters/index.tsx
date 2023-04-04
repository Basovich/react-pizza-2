import { Category, Sort } from '../';
import { StyledFilters } from './StyledFilters';

export function Filters() {
  return (
    <StyledFilters>
      <Category />
      <Sort />
    </StyledFilters>
  )
}