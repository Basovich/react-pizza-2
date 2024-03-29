import styled from 'styled-components';

export const StyledSearch = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  
  .search {
    display: block;
    width: 100%;
    border: 2px solid #f4f4f4;
    border-radius: 6px;
    padding: 10px 40px 10px 40px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
    color: #181818;
    
    &:focus-visible {
      outline: 0;
      box-shadow: 0 0 0 3px rgba(34, 34, 34, .4);
    }
    
    &::placeholder {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 120%;
      color: #7B7B7B;
    }
  }
  
  .icon {
    position: absolute;
    left: 14px;
    z-index: 1;
    width: 16px;
    height: 16px;
    fill: #a6a6a6;
  }
`