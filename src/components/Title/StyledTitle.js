import styled from "styled-components";

export const StyledTitle = styled.h1`
  font-weight: 700;
  font-size: 22px;
  line-height: 120%;
  color: ${props => props.color || '#222'};
  text-align: ${props => props.textAlign || 'left'};
  
  @media (min-width: 768px) {
    font-size: 28px;
  }
  
  @media (min-width: 1280px) {
    font-size: 32px;
  }
`;