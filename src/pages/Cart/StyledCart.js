import styled from "styled-components";

export const StyledCart = styled.div`
  margin-bottom: 40px;
  
  @media (min-width: 768px) {
    max-width: 700px;
    margin: 80px auto;
  }
`;

export const StyledCartHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const StyledCartHeadTitle = styled.div`
  display: flex;
  align-items: center;
  font-style: normal;
  
  .title-icon {
    margin-right: 10px;
  }
`;

export const StyledClearCartButton = styled.button`
  display: inline-flex;
  align-items: center;
  background-color: transparent;
  border: 0;
  border-radius: 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #B6B6B6;
  transition: color .15s;
  
  @media (any-hover: hover) {
    &:hover {
      color: #222;

      .basket-icon path {
        stroke: #222;
      }
    }
  }
  
  &:focus-visible {
    outline: 3px #B6B6B6 solid;
  }
  
  .basket-icon {
    margin-right: 6px;
    
    path {
      transition: stroke .15s;
    }
  }
`;

export const StyledCartTotal = styled.div`
  display: block;
  width: 100%;
  margin-top: 20px;
  
  @media (min-width: 410px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .total {
    display: flex;
    margin-top: 10px;

    @media (min-width: 410px) {
      margin-top: 0;
    }
    
    &:first-child {
      margin-top: 0;
    }
    
    &-label {
      font-size: 16px;
      line-height: 120%;
      color: #000000;
    }
    
    &-count {
      font-size: 18px;
      font-weight: 600;
      margin-left: 6px;
    }
    
    &-price {
      font-size: 18px;
      font-weight: 600;
      color: #FE5F1E;
      margin-left: 6px;
    }
  }
`;

export const StyledCartBottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;