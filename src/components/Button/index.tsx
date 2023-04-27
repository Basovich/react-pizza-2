import { ButtonProps, LinkButtonProps } from './types';
import { StyledButton, StyledLinkButton } from './StyledButton';

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <StyledButton {...props} />
  )
}

export const LinkButton: React.FC<LinkButtonProps> = (props: LinkButtonProps) => {
  return (
    <StyledLinkButton {...props} />
  )
}