import { StyledTitle } from "./StyledTitle";
import { Props } from "./types";

export const Title: React.FC<Props> = (props) => {
  return (
    <StyledTitle {...props} />
  )
}