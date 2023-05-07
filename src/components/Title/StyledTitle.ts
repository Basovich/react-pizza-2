import styled, { css } from "styled-components";
import { Props } from "./types";
import { mediaQuery } from "../../utils/media-query";

const {tabletMd, desktopSm} = mediaQuery;

export const StyledTitle = styled.h1<Props>`
  display: block;
  width: 100%;
  font-weight: 700;
  line-height: 120%;
  color: ${props => props.color || '#222'};
  text-align: ${props => props.textAlign || 'left'};

  ${(props) => {
    switch (props.size) {
      case "title-h1":
        return css`
          font-size: 2.2rem;

          @media (min-width: ${tabletMd}) {
            font-size: 2.8rem;
          }

          @media (min-width: ${desktopSm}) {
            font-size: 3.2rem;
          }
        `;
      case "title-h2":
        return css`
          font-size: 2rem;

          @media (min-width: ${tabletMd}) {
            font-size: 2.4rem;
          }
          
          @media (min-width: ${desktopSm}) {
            font-size: 2.8rem;
          }
        `;
      case "title-h3":
        return css`
          font-size: 1.8rem;

          @media (min-width: ${tabletMd}) {
            font-size: 2.2rem;
          }
          
          @media (min-width: ${desktopSm}) {
            font-size: 2.6rem;
          }
        `;
      case "title-h4":
        return css`
          font-size: 1.6rem;

          @media (min-width: ${tabletMd}) {
            font-size: 2rem;
          }
          
          @media (min-width: ${desktopSm}) {
            font-size: 2.4rem;
          }
        `;
      default:
        return css``;
    }
  }}
`;