import styled, { css } from "styled-components";
import { Props } from "./types";
import { mediaQuery } from "../../../utils/media-query";

const {tabletMd, desktopLg} = mediaQuery;

export const StyledText = styled.p<Props>`
  display: block;
  width: 100%;
  font-weight: ${props => props.weight || '400'};
  line-height: 120%;
  color: ${props => props.color || '#222'};
  text-align: ${props => props.textAlign || 'left'};

  ${(props) => {
    switch (props.size) {
      case "large":
        return css`
          font-size: 1.8rem;

          @media (min-width: ${tabletMd}) {
            font-size: 2rem;
          }

          @media (min-width: ${desktopLg}) {
            font-size: 2.2rem;
          }
        `;
      case "medium":
        return css`
          font-size: 1.6rem;

          @media (min-width: ${tabletMd}) {
            font-size: 1.8rem;
          }
          
          @media (min-width: ${desktopLg}) {
            font-size: 2rem;
          }
        `;
      case "small":
        return css`
          font-size: 1.4rem;

          @media (min-width: ${tabletMd}) {
            font-size: 1.6rem;
          }
          
          @media (min-width: ${desktopLg}) {
            font-size: 1.8rem;
          }
        `;
      default:
        return css``;
    }
  }}
`;