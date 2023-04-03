import { FilterInterface } from "../../redux/filter/types";
import {StyledButton, StyledLinkButton} from "./StyledButton";

type ButtonProps = {
  $btnType: string
  type: string
  children: React.ReactNode
  onClick?: () => void
}

type LinkButtonProps = {
  $btnLinkType: string
  to: string
  state: FilterInterface
  children: React.ReactNode
}

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