import {StyledTitle} from "./StyledTitle";

type Props = {
  children: JSX.Element | string,
};

export function Title(props: Props) {
  return (
    <StyledTitle {...props} />
  )
}