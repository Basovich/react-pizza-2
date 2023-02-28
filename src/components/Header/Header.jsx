import {StyledHeader} from "./StyledHeader";
import {Logo} from "../Logo/Logo";
import {CartButton} from "../CartButton/CartButton";
import {Search} from "../Search/Search";

export function Header(
  {
    isNeedCartButton = true,
    isNeedSearch = false
  }
) {
  return (
    <StyledHeader>
      <Logo />
      {
        isNeedSearch && <Search />
      }
      {
        isNeedCartButton && <CartButton />
      }
    </StyledHeader>
  );
}