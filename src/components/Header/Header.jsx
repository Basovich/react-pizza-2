import { useLocation } from 'react-router-dom';

import {StyledHeader} from "./StyledHeader";
import {Logo} from "../Logo/Logo";
import {CartButton} from "../CartButton/CartButton";
import {Search} from "../Search/Search";

export function Header() {
  const location = useLocation();

  return (
    <StyledHeader>
      <Logo />
      {location.pathname === '/' && <Search />}
      {(location.pathname !== '/cart' && location.pathname !== '/thanks') && <CartButton />}
    </StyledHeader>
  );
}