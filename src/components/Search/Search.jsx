import {StyledSearch} from "./StyledSearch";
import {useContext} from "react";
import {SearchContext} from "../../pages/Home";

export function Search() {
  const {searchValue, setSearchValue} = useContext(SearchContext);

  return (
    <StyledSearch>
      <svg className="icon" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.5166 20.2258L15.3205 14.0242C16.458 12.6023 17.1416 10.7922 17.1416 8.82344C17.1416 4.22422 13.4174 0.5 8.8291 0.5C4.23535 0.5 0.516602 4.22969 0.516602 8.82344C0.516602 13.4172 4.24082 17.1469 8.8291 17.1469C10.8088 17.1469 12.6244 16.4523 14.0518 15.2984L20.2424 21.5L21.5166 20.2258ZM3.56816 14.0953C2.1627 12.6898 1.3916 10.8195 1.3916 8.82891C1.3916 6.83828 2.16816 4.96797 3.56816 3.5625C4.96816 2.15703 6.84395 1.375 8.8291 1.375C10.8143 1.375 12.6846 2.15156 14.09 3.55703C15.4955 4.9625 16.2666 6.83281 16.2666 8.82344C16.2666 10.8141 15.49 12.6844 14.09 14.0898C12.6846 15.4953 10.8143 16.2719 8.8291 16.2719C6.84395 16.2773 4.97363 15.5008 3.56816 14.0953Z" /></svg>
      <input className="search"
             onChange={(event) => setSearchValue(event.target.value)}
             type="text"
             placeholder="Search pizza"
             value={searchValue}
      />
      {
        searchValue && (
          <button className="clear" onClick={() => setSearchValue('')} type="button">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.3 13.7C0.5 13.9 0.7 14 1 14C1.3 14 1.5 13.9 1.7 13.7L7 8.4L12.3 13.7C12.5 13.9 12.8 14 13 14C13.2 14 13.5 13.9 13.7 13.7C14.1 13.3 14.1 12.7 13.7 12.3L8.4 7L13.7 1.7C14.1 1.3 14.1 0.7 13.7 0.3C13.3 -0.1 12.7 -0.1 12.3 0.3L7 5.6L1.7 0.3C1.3 -0.1 0.7 -0.1 0.3 0.3C-0.1 0.7 -0.1 1.3 0.3 1.7L5.6 7L0.3 12.3C-0.1 12.7 -0.1 13.3 0.3 13.7Z" fill="black"/></svg>
          </button>
        )
      }
    </StyledSearch>
  )
}