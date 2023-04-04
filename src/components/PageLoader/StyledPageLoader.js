import styled, {keyframes} from 'styled-components';

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const StyledPageLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #fff;
`;

export const StyledImagePageLoader = styled.img`
  width: 80px;
  height: 80px;
  animation: ${rotation} 3s infinite linear;
`;