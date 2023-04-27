import styled from 'styled-components';
import {StyledSort} from '../Sort/StyledSort';
import { mediaQuery } from '../../utils/media-query';

const {tabletLg} = mediaQuery;

export const StyledFilters = styled.div`
  margin-top: 14px;
  margin-bottom: 20px;
  
  @media (min-width: ${tabletLg}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  ${StyledSort} {
    margin-top: 8px;

    @media (min-width: ${tabletLg}) {
      margin-top: 0;
    }
  }
`;