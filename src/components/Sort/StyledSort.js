import styled, {keyframes} from "styled-components";

const slideUp = keyframes`
  from {
    transform: translateY(10px);
  }
  to {
    transform: translateY(0);
  }
`;

export const StyledSort = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
  
  .sort-label {
    display: inline-flex;
    align-items: center;
    font-size: 16px;
    font-weight: 700;
    
    .sort-icon {
      display: block;
      margin-right: 8px;
      transform: rotate(180deg);
      transform-origin: center;
    }
  }
  
  .sort-button {
    display: block;
    border: 0;
    background-color: transparent;
    padding: 0;
    margin: 0 0 0 10px;
    border-radius: 0;
    font-size: 16px;
    font-weight: 500;
    color: #fe5f1e;
    border-bottom: 2px dashed #fe5f1e;
    letter-spacing: 1px;

    &:focus-visible {
      outline: none;
      background-color: rgba(254, 95, 30, .16);
    }

    @media (any-hover: hover) {
      &:hover {
        color: #222;
        border-bottom: 2px dashed #222;
      }
    }
  }
  
  .sort-list {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 30px;
    right: 0;
    background-color: #fff;
    box-shadow: 0 5px 20px rgba(0, 0, 0, .14);
    border-radius: 10px;
    padding: 10px 0;
    animation: ${slideUp} .2s ease;
  }
  
  .sort-list-item {
    text-align: left;
    font-weight: 500;
    background-color: transparent;
    border-radius: 0;
    border: 0;
    padding: 12px 20px;
    font-size: 16px;
    transition: color .2s;
    
    &.active {
      font-weight: 700;
      background-color: rgba(254,95,30,.05);
      color: #fe5f1e;
    }
    
    &:active {
      background-color: rgba(254,95,30,.05);
    }

    &:focus-visible {
      outline: none;
      background-color: rgba(254, 95, 30, .16);
    }

    @media (any-hover: hover) {
      &:hover {
        color: #fe5f1e;
      }
    }
  }
`;