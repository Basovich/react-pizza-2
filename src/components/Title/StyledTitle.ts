import styled from "styled-components";
import { Props } from "./types";
import { mediaQuery } from "../../utils/media-query";

const {tabletMd, desktopSm} = mediaQuery;

export const StyledTitle = styled.h1<Props>`
  font-weight: 700;
  font-size: 22px;
  line-height: 120%;
  color: ${props => props.color || '#222'};
  text-align: ${props => props.textAlign || 'left'};
  
  @media (min-width: ${tabletMd}) {
    font-size: 28px;
  }
  
  @media (min-width: ${desktopSm}) {
    font-size: 32px;
  }
`;