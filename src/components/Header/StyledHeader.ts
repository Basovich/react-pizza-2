import styled from 'styled-components';
import { StyledLogoDiv } from '../Logo/StyledLogo';
import { StyledSearch } from '../Search/StyledSearch';
import { StyledLinkButton } from '../Button/StyledButton';
import { mediaQuery } from '../../utils/media-query';

const {tabletMd, tabletLg} = mediaQuery;

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 20px;
  padding-bottom: 14px;
  border-bottom: 1px solid #F7F7F7;
  
  ${StyledLogoDiv} {
    order: 1;
  }
  
  ${StyledLinkButton} {
    order: 2;

    @media (min-width: ${tabletLg}) {
      order: 3;
    }
  }
  
  ${StyledSearch} {
    order: 3;
    margin-top: 12px;
    width: 100%;
    
    @media (min-width: ${tabletMd}) {
      margin-top: 18px;
    }
    
    @media (min-width: ${tabletLg}) {
      order: 2;
      width: auto;
      max-width: 300px;
      flex: 1 1;
      margin: 0 60px;
    }
  }
`;