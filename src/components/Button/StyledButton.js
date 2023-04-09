import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 24px;
  border-radius: 30px;
  font-weight: 700;
  font-size: 14px;

  ${(props) => {
    switch (props.$btnType) {
      case "primary-orange":
        return css`
          border: 2px solid #fe5f1e;
          background-color: #fe5f1e;
          color: #fff;
          transition: transform 0.2s;

          &:active {
            transform: translateY(2px);
          }

          @media (any-hover: hover) {
            &:hover {
              background-color: rgba(254, 71, 1, 1);
            }
          }

          &:focus-visible {
            outline: none;
            box-shadow: 0 0 0 3px rgba(254, 95, 30, 0.4);
          }
        `;
      case "primary":
        return css`
          border: 2px solid #222;
          background-color: #222;
          color: #fff;
          transition: transform 0.2s;

          &:active {
            transform: translateY(2px);
          }

          &:focus-visible {
            outline: none;
            box-shadow: 0 0 0 3px rgba(34, 34, 34, 0.4);
          }

          @media (any-hover: hover) {
            &:hover {
              background-color: #000;
            }
          }

          .icon {
            fill: #fff;
            width: 10px;
            height: 10px;
            margin-right: 10px;
          }
        `;
      case "secondary":
        return css`
          border: 2px solid #f4f4f4;
          background-color: #f4f4f4;
          color: #222;
          transition: transform 0.2s, background-color 0.2s;

          &:active {
            transform: translateY(2px);
          }

          &:focus-visible {
            outline: none;
            box-shadow: 0 0 0 3px rgba(34, 34, 34, 0.4);
          }

          @media (any-hover: hover) {
            &:hover {
              background-color: #e7e7e7;
            }
          }
        `;
      case "addPizza":
        return css`
          display: flex;
          align-items: center;
          height: 42px;
          border-radius: 30px;
          padding: 10px 20px;
          background-color: #fff;
          border: 1px solid #fe5f1e;
          font-size: 14px;
          color: #fe5f1e;
          transition: transform 0.2s, background-color 0.2s, color 0.2s;

          .plus-icon {
            display: block;
            width: 10px;
            height: 10px;
            fill: #fe5f1e;
            margin-right: 6px;
            transition: fill 0.2s;
          }

          .counter {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 22px;
            height: 22px;
            background-color: #fe5f1e;
            color: #fff;
            font-size: 12px;
            margin-left: 6px;
            border-radius: 50%;
            transition: background-color 0.2s, color 0.2s;
          }

          &:active {
            transform: translateY(2px);
          }

          &:focus-visible {
            outline: none;
            box-shadow: 0 0 0 3px rgba(254, 95, 30, 0.4);
          }

          @media (any-hover: hover) {
            &:hover {
              background-color: #fe5f1e;
              color: #fff;

              .plus-icon {
                fill: #fff;
              }

              .counter {
                background-color: #fff;
                color: #fe5f1e;
              }
            }
          }
        `;
      case "circleOrange":
        return css`
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: transparent;
          border-radius: 50%;
          border: 2px solid #fe5f1e;
          width: 26px;
          height: 26px;
          padding: 0;
          transition: background-color 0.15s, transform 0.15s;

          @media (any-hover: hover) {
            &:hover {
              background-color: #fe5f1e;

              .icon {
                fill: #fff;
              }
            }
          }

          &:active {
            transform: translateY(2px);
          }

          &:focus-visible {
            outline: none;
            box-shadow: 0 0 0 3px rgba(254, 95, 30, 0.4);
          }

          .icon {
            fill: #fe5f1e;
            transition: fill 0.15s;
          }
        `;
      case "circleBlack":
        return css`
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: transparent;
          border: 2px solid #d0d0d0;
          border-radius: 50%;
          width: 26px;
          height: 26px;
          padding: 0;
          transition: background-color 0.15s, border-color 0.15s,
            transform 0.15s;

          @media (any-hover: hover) {
            &:hover {
              background-color: #222;
              border-color: #222;

              .icon {
                fill: #fff;
              }
            }
          }

          &:active {
            transform: translateY(2px);
          }

          &:focus-visible {
            outline: none;
            box-shadow: 0 0 0 3px rgba(34, 34, 34, 0.4);
          }

          .icon {
            fill: #d0d0d0;
            transition: fill 0.15s;
          }
        `;
      case "cross":
        return css`
          display: flex;
          align-items: center;
          justify-content: center;
          width: 18px;
          height: 18px;
          position: absolute;
          right: 14px;
          z-index: 1;
          padding: 4px;
          margin: 0;
          background-color: transparent;
          border: 0;
          border-radius: 2px;
          opacity: 0.6;
          transition: opacity 0.15s;

          @media (any-hover: hover) {
            &:hover {
              opacity: 1;
            }
          }

          &:focus-visible {
            outline: 0;
            box-shadow: 0 0 0 3px rgba(34, 34, 34, 0.4);
          }
        `;
      default:
        return css``;
    }
  }}
`;

export const StyledLinkButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  padding: 8px 24px;
  border-radius: 30px;
  font-weight: 700;
  font-size: 14px;
  text-decoration: none;

  ${(props) => {
    switch (props.$btnLinkType) {
      case "primary":
        return css`
          border: 2px solid #222;
          background-color: #222;
          color: #fff;
          transition: transform 0.2s;

          &:active {
            transform: translateY(2px);
          }

          &:focus-visible {
            outline: none;
            box-shadow: 0 0 0 3px rgba(34, 34, 34, 0.4);
          }

          @media (any-hover: hover) {
            &:hover {
              background-color: #000;
            }
          }

          .icon {
            fill: #fff;
            width: 10px;
            height: 10px;
            margin-right: 10px;
          }
        `;
      case "cartButton":
        return css`
          display: flex;
          justify-content: center;
          align-items: center;
          border: 0;
          background-color: rgba(254, 95, 30, 1);
          border-radius: 30px;
          padding: 12px 24px;
          color: #fff;
          text-decoration: none;
          transition: background-color 0.15s, transform 0.15s;
          &:active {
            transform: translateY(2px);
          }
          &:focus-visible {
            outline: none;
            box-shadow: 0 0 0 3px rgba(254, 95, 30, 0.4);
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
      default:
        return css``;
    }
  }}
`;
