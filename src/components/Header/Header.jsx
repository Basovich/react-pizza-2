import {StyledHeader} from "./StyledHeader";
import {Logo} from "../Logo/Logo";
import {CartButton} from "../CartButton/CartButton";
import {Search} from "../Search/Search";

export function Header(
  {
    isNeedCartButton = true,
    isNeedSearch = false,
    searchValue,
    setSearchValue
  }
) {
  return (
    <StyledHeader>
      <Logo />
      {
        isNeedSearch && <Search value={searchValue} onChange={setSearchValue} />
      }
      {
        isNeedCartButton && <CartButton />
      }
    </StyledHeader>
  );
}