import styled from "styled-components";

export const StyledCart = styled.div`
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
  
  .basket-icon {
    margin-right: 6px;
  }
`;
