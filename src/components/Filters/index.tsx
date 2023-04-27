import { Category, Sort } from '../';
import { StyledFilters } from './StyledFilters';

export const Filters: React.FC = () => {
  return (
    <StyledFilters>
      <Category />
      <Sort />
    </StyledFilters>
  )
}