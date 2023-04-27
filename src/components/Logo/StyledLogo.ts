import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { mediaQuery } from '../../utils/media-query';

const {tabletSm, desktopMd, desktopLg} = mediaQuery;

export const StyledLogoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  
  &:focus-visible {
    outline: 0;
    box-shadow: 0 0 0 3px rgba(254, 95, 30, .4);
  }
`;

export const StyledLogoDiv = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const StyledLogoText = styled.div`
  display: none;
  margin-left: 10px;
  
  @media (min-width: ${tabletSm}) {
    display: block;
  }

  h1 {
    font-style: normal;
    font-weight: 800;
    font-size: 18px;
    line-height: 120%;
    text-transform: uppercase;
    color: #181818;
    
    @media (min-width: ${desktopMd}) {
      font-size: 22px;
    }
    
    @media (min-width: ${desktopLg}) {
      font-size: 24px;
    }
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
    color: #7B7B7B;

    @media (min-width: ${desktopLg}) {
      font-size: 16px;
    }
  }
`;
