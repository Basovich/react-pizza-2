import { ButtonProps, LinkButtonProps } from "./types";
import { StyledButton, StyledLinkButton } from "./StyledButton";

export function Button(props: ButtonProps) {
  return (
    <StyledButton {...props} />
  )
}

export function LinkButton(props: LinkButtonProps) {
  return (
    <StyledLinkButton {...props} />
  )
}