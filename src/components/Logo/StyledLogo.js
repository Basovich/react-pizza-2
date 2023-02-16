import styled from "styled-components";

export const StyledLogo = styled.div`
  display: flex;
  align-items: center;

  .text {
    display: none;
    margin-left: 10px;
    
    @media (min-width: 568px) {
      display: block;
    }
  }

  h1 {
    font-style: normal;
    font-weight: 800;
    font-size: 18px;
    line-height: 120%;
    text-transform: uppercase;
    color: #181818;
    
    @media (min-width: 1440px) {
      font-size: 22px;
    }
    
    @media (min-width: 1600px) {
      font-size: 24px;
    }
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
    color: #7B7B7B;

    @media (min-width: 1600px) {
      font-size: 16px;
    }
  }
`;