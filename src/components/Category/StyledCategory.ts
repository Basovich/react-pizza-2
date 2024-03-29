import styled from 'styled-components';
import {StyledButton} from '../Button/StyledButton';
import { mediaQuery } from '../../utils/media-query';

const {tabletLg} = mediaQuery;

export const StyledCategory = styled.div`
  display: flex;
  align-items: center;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding-bottom: 14px;

  @media (min-width: ${tabletLg}) {
    padding-bottom: 0;
    overflow-x: initial;
    scroll-snap-type: initial;
    overflow-x: initial;
  }
  
  ${StyledButton} {
    scroll-snap-align: start;
    margin-right: 10px;
    
    &:last-child {
      margin-right: 0;
    }
  }
`;