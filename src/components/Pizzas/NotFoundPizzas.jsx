import {StyledNotFound} from "./StyledPizzas";

export function NotFoundPizzas(props) {
  return (
    <StyledNotFound>
      <h1 className="not-found-text">{props.children}</h1>
    </StyledNotFound>
  )
}