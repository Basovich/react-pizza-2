import styled from 'styled-components';
import { mediaQuery } from "../utils/media-query";

const {tabletSm, desktopSm, desktopMd} = mediaQuery;

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #FFDF8C;
  padding: 10px;

  @media (min-width: ${desktopSm}) {
    padding: 40px 120px;
  }

  @media (min-width: ${desktopMd}) {
    padding: 40px calc((100% - ${desktopSm}) / 2);
  }
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  padding: 0 12px;
  flex: 1 1;
  
  @media (min-width: ${tabletSm}) {
    padding: 0 30px;
  }
  
  @media (min-width: ${desktopSm}) {
    padding: 0 40px;
  }
`;