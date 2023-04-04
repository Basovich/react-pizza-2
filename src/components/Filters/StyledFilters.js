import styled from 'styled-components';
import {StyledSort} from '../Sort/StyledSort';

export const StyledFilters = styled.div`
  margin-top: 14px;
  margin-bottom: 20px;
  
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  ${StyledSort} {
    margin-top: 8px;

    @media (min-width: 1024px) {
      margin-top: 0;
    }
  }
}
`;