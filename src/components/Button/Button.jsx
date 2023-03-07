import {StyledButton, StyledLinkButton} from "./StyledButton";

export function Button(props) {
  return (
    <StyledButton {...props} />
  )
}

export function LinkButton(props) {
  return (
    <StyledLinkButton {...props} />
  )
}