import { useRouteError } from "react-router-dom";
import {Header} from "../components/Header/Header";

export function Error() {
  const error = useRouteError();

  return (
    <>
      <Header isNeedCartButton={true} />
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>{error.status}</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </>
  )
}