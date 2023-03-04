import styled from "styled-components";
import ReactPaginate from 'react-paginate';

export const StyledPagination = styled(ReactPaginate)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  
  li {
    & + li {
      margin-left: 6px;
    }
    
    &.disabled {
      display: none;
    }
  }
  
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    background-color: transparent;
    border: 0;
    border-radius: 4px;
    font-weight: 700;
    font-size: 14px;
    color: #9d9d9d;
    cursor: pointer;
    transition: background-color .15s;
    @media (any-hover: hover) {
      &:hover {
        background-color: #f4f4f4;
      }
    }
    &:focus-visible {
      outline: none;
      box-shadow: 0 0 0 3px rgba(254, 95, 30, .4);
    }
    & + & {
      margin-left: 6px;
    }
    &.active {
      background-color: #fe5f1e;
      color: #fff;
    }
    
    .icon {
      height: 13px;
      fill: #9d9d9d;
    }
  }
`;