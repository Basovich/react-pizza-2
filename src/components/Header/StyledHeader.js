import styled from "styled-components";
import {StyledLogoDiv} from "../Logo/StyledLogo";
import {StyledSearch} from "../Search/StyledSearch";
import {StyledCartButton} from "../CartButton/StyledCartButton";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 20px;
  padding-bottom: 14px;
  border-bottom: 1px solid #F7F7F7;
  
  ${StyledLogoDiv} {
    order: 1;
  }
  
  ${StyledCartButton} {
    order: 2;

    @media (min-width: 1024px) {
      order: 3;
    }
  }
  
  ${StyledSearch} {
    order: 3;
    margin-top: 12px;
    width: 100%;
    
    @media (min-width: 768px) {
      margin-top: 18px;
    }
    
    @media (min-width: 1024px) {
      order: 2;
      width: auto;
      max-width: 300px;
      flex: 1 1;
      margin: 0 60px;
    }
  }
`;