import styled from "styled-components";
import {StyledPizza} from "../Pizza/StyledPizza";
import {StyledSkeletonPizza} from "../Pizza/StyledSkeletonPizza";

export const StyledPizzas = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  margin-top: 30px;
  margin-bottom: 40px;
  column-gap: 30px;
  row-gap: 20px;
  
  @media (min-width: 768px) {
    row-gap: 40px;
  }
  
  ${StyledSkeletonPizza},
  ${StyledPizza} {
    max-width: 275px;
    justify-self: center;
    border-bottom: 1px solid #eee;
    padding-bottom: 20px;
    
    @media (min-width: 630px) {
      border-bottom: 0;
    }
    
    @media (min-width: 768px) {
      padding: 0;
    }
    
    &:last-child {
      border-bottom: 0;
    }
  }
  
  .not-found {
    width: 100%;
    font-size: 30px;
  }
`;