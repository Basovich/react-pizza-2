import styled from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #FFDF8C;
  padding: 10px;

  @media (min-width: 1280px) {
    padding: 40px 120px;
  }

  @media (min-width: 1400px) {
    padding: 40px calc((100% - 1280px) / 2);
  }
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  padding: 0 12px;
  
  @media (min-width: 568px) {
    padding: 0 30px;
  }
  
  @media (min-width: 1280px) {
    padding: 0 40px;
  }
`;