import React from 'react';
import { useLocation } from 'react-router';
import { useAppSelector } from '../../hooks/redux-hooks';
import { selectFilter } from '../../redux/filter/selectors';
import Logotype from '../../assets/images/logotype.svg';
import { StyledLogoLink, StyledLogoDiv, StyledLogoText } from './StyledLogo';

export const Logo: React.FC = () => {
  const location = useLocation();
  const filter = useAppSelector(selectFilter);

  if (location.pathname === '/' ) {
    return (
      <StyledLogoDiv>
        <img width='38' height='38' src={Logotype} alt="Index logo"/>
        <StyledLogoText>
          <h1>React Pizzas</h1>
          <p>the most delicious pizza in the universe</p>
        </StyledLogoText>
      </StyledLogoDiv>
    )
  } else {
    return (
      <StyledLogoLink to="/" state={{ ...filter }}>
        <img width='38' height='38' src={Logotype} alt="Index logo"/>
        <StyledLogoText>
          <h1>React Pizzas</h1>
          <p>the most delicious pizza in the universe</p>
        </StyledLogoText>
      </StyledLogoLink>
    )
  }
}