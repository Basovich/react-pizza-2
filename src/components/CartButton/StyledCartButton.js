import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const StyledCartButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  background-color: rgba(254, 95, 30, 1);
  border-radius: 30px;
  padding: 12px 24px;
  color: #fff;
  text-decoration: none;
  transition: background-color .15s, transform .15s;

  &:active {
    transform: translateY(2px);
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgba(254, 95, 30, .4);
  }

  @media (any-hover: hover) {
    &:hover {
      background-color: rgba(254, 71, 1, 1);
    }
  }

  @media (min-width: 1440px) {
    padding: 14px 28px;
  }

  .price,
  .count {
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 14px;

    @media (min-width: 1440px) {
      font-size: 16px;
    }
  }

  .price {
    padding-right: 12px;
  }

  .count {
    border-left: 1px solid rgba(255, 255, 255, 0.25);
    padding-left: 12px;

    svg {
      margin-right: 4px;
    }
  }
`;