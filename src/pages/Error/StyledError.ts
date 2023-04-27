import styled from 'styled-components';
import { mediaQuery } from "../../utils/media-query";

const {tabletLg} = mediaQuery;

export const StyledErrorContent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  flex: 1 1;
  padding: 20px 20px 80px;
  
  @media (min-width: ${tabletLg}) {
    justify-content: center;
  }
  
  .title {
    font-size: 26px;
    font-weight: 600;
  }
  
  .text {
    font-size: 16px;
    font-weight: 500;
    margin-top: 14px;
  }
  
  .status {
    font-size: 60px;
    font-weight: 800;
    margin-top: 60px;
    color: rgba(254,95,30,1);
  }
`;