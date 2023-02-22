import {StyledHeader} from "./StyledHeader";
import {Logo} from "../Logo/Logo";
import {CartButton} from "../CartButton/CartButton";

export function Header({isNeedCartButton}) {
  return (
    <StyledHeader>
      <Logo />
      {
        isNeedCartButton && <CartButton />
      }
    </StyledHeader>
  );
}