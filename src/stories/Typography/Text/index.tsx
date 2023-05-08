import { StyledText } from "./StyledText";
import { Props } from "./types";

export const Text: React.FC<Props> = (props) => {
  return (
    <StyledText {...props} />
  )
}