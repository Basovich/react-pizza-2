import { useLocation } from 'react-router-dom';
import { Logo, CartButton, Search } from "../";
import { StyledHeader } from './StyledHeader';

export const Header: React.FC = () => {
  const location = useLocation();

  return (
    <StyledHeader>
      <Logo />
      {location.pathname === '/' && <Search />}
      {(location.pathname !== '/cart' && location.pathname !== '/thanks') && <CartButton />}
    </StyledHeader>
  );
}