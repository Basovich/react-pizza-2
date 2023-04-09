import styled from 'styled-components';

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

  & > .count {
    font-weight: 700;
    font-size: 16px;
    line-height: 120%;
    color: #000000;
    margin: 0 12px;
  }
`;