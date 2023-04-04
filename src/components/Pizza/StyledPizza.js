import styled from 'styled-components';

export const StyledPizza = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 20px;
  
  .pizza-img {
    display: block;
    width: 100%;
    height: 180px;
    object-fit: contain;
  }
  
  .pizza-title {
    font-size: 20px;
    font-weight: 900;
    margin-top: 12px;
    text-align: center;
  }
  
  .pizza-compound {
    flex: 1 1;
    font-size: 14px;
    line-height: 130%;
    font-weight: 500;
    color: #9d9d9d;
    text-align: center;
    margin-top: 16px;
  }
  
  .pizza-selector {
    display: flex;
    background-color: #f3f3f3;
    border-radius: 10px;
    flex-direction: column;
    padding: 6px;
    margin-top: 26px;
  }
  
  .pizza-selector-row {
    display: flex;
    width: 100%;
    margin-bottom: 6px;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  .pizza-selector-button {
    border: 0;
    background-color: transparent;
    border-radius: 10px;
    text-align: center;
    padding: 8px;
    flex: 1 1;
    font-weight: 600;
    font-size: 14px;
    user-select: none;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
    transition: color .2s;
    
    &.active {
      background: #fff;
      box-shadow: 0 2px 4px rgba(0, 0, 0, .04);
      
      @media (any-hover: hover) {
        &:hover {
          color: #222;
        }
      }
    }

    &:focus-visible {
      outline: none;
      box-shadow: 0 0 0 3px rgba(34, 34, 34, .4);
    }

    @media (any-hover: hover) {
      &:hover {
        color: #fe5f1e;
      }
    }
  }
  
  .pizza-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 18px;
    padding: 0 10px;
  }
  
  .pizza-price {
    font-weight: 700;
    font-size: 18px;
    line-height: 130%;
    letter-spacing: .1px;
  }
`;