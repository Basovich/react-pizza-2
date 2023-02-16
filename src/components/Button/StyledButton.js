import styled, {css} from "styled-components";

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
      case "primary":
        return css`
          border: 2px solid #222;
          background-color: #222;
          color: #fff;
          transition: transform .2s;

          &:active {
            transform: translateY(2px);
          }

          &:focus-visible {
            outline: none;
            box-shadow: 0 0 0 3px rgba(34, 34, 34, .4);
          }

          @media (any-hover: hover) {
            &:hover {
              background-color: #000;
            }
          }
        `;
      case "secondary":
        return css`
          border: 2px solid #f4f4f4;
          background-color: #f4f4f4;
          color: #222;
          transition: transform .2s, background-color .2s;

          &:active {
            transform: translateY(2px);
          }

          &:focus-visible {
            outline: none;
            box-shadow: 0 0 0 3px rgba(34, 34, 34, .4);
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
          transition: transform .2s, background-color .2s, color .2s;

          .plus-icon {
            display: block;
            width: 10px;
            height: 10px;
            fill: #fe5f1e;
            margin-right: 6px;
            transition: fill .2s;
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
            transition: background-color .2s, color .2s;
          }

          &:active {
            transform: translateY(2px);
          }

          &:focus-visible {
            outline: none;
            box-shadow: 0 0 0 3px rgba(254, 95, 30, .4);
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
        default:
        return css``;
    }
  }}
`;