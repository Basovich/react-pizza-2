import styled from "styled-components";

export const StyledCartPizza = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  border-top: 1px solid #F4F4F4;
  padding: 20px 10px;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }
`;

export const StyledCartPizzaImg = styled.img`
  height: 60px;
  width: 60px;
  object-fit: contain;

  @media (min-width: 1024px) {
    width: 80px;
    height: 80px;
  }
`;

export const StyledCartPizzaHead = styled.div`
  margin-left: 15px;
  flex: 1 1;

  @media (min-width: 768px) {
    padding-right: 40px;
  }

  & > .name {
    font-weight: 700;
    font-size: 16px;
    line-height: 120%;
    color: #000000;

    @media (min-width: 600px) {
      font-size: 18px;
    }
  }

  & > .about {
    font-weight: 400;
    font-size: 12px;
    line-height: 120%;
    color: #8D8D8D;
    margin-top: 10px;

    @media (min-width: 600px) {
      font-size: 14px;
    }
    
    & > b {
      display: inline-block;
      margin-right: 4px;
      font-weight: 600;
    }
  }
`;

export const StyledCartPizzaControls = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 18px;

  @media (min-width: 768px) {
    width: auto;
    flex: 1 1;
  }

  & > .price {
    font-weight: 700;
    font-size: 16px;
    line-height: 120%;
    color: #000000;
    margin: 0 8px;
  }
`;

export const StyledCartPizzaCounter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border-radius: 50%;
    border: 2px solid #FE5F1E;
    width: 26px;
    height: 26px;
    padding: 0;
    transition: background-color .15s, transform .15s;
    
    @media (any-hover: hover) {
      &:hover {
        background-color: #FE5F1E;

        .icon {
          fill: #fff;
        }
      }
    }

    &:active {
      transform: translateY(2px);
    }

    &:focus-visible {
      outline: none;
      box-shadow: 0 0 0 3px rgba(254, 95, 30, .4);
    }
    
    .icon {
      fill: #FE5F1E;
      transition: fill .15s;
    }
  }

  & > .count {
    font-weight: 700;
    font-size: 16px;
    line-height: 120%;
    color: #000000;
    margin: 0 12px;
  }
`;

export const StyledCartPizzaRemove = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: 2px solid #D0D0D0;
  border-radius: 50%;
  width: 26px;
  height: 26px;
  padding: 0;
  transition: background-color .15s, border-color .15s, transform .15s;

  @media (any-hover: hover) {
    &:hover {
      background-color: #222;
      border-color: #222;
      
      .icon {
        fill: #fff;
      }
    }
  }

  &:active {
    transform: translateY(2px);
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgba(34, 34, 34, .4);
  }
  
  .icon {
    fill: #D0D0D0;
    transition: fill .15s;
  }
`;