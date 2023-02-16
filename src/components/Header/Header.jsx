import {StyledHeader} from "./StyledHeader";
import {Logo} from "../Logo/Logo";
import {CartButton} from "../CartButton/CartButton";

export function Header() {
  return (
    <StyledHeader>
      <Logo />
      <CartButton />
    </StyledHeader>
  );
}