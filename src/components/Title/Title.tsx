import {StyledTitle} from "./StyledTitle";

type Props = {
  children: React.ReactNode;
};

export function Title(props: Props) {
  return (
    <StyledTitle {...props} />
  )
}