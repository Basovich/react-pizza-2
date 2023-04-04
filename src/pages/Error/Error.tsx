import { StyledErrorContent } from './StyledError';

export default function Error() {
  return (
    <StyledErrorContent>
      <h1 className="title">Oops!</h1>
      <p className="text">Sorry, an unexpected error has occurred.</p>
      <p className="status">404</p>
      <p className="text">Page not found!</p>
    </StyledErrorContent>
  )
}