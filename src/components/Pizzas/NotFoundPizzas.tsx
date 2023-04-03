import { StyledNotFound } from "./StyledPizzas";

type NotFoundPizzasType = {
  children: React.ReactNode;
}

export function NotFoundPizzas(props: NotFoundPizzasType) {
  return (
    <StyledNotFound>
      <h1 className="not-found-text">{props.children}</h1>
    </StyledNotFound>
  )
}