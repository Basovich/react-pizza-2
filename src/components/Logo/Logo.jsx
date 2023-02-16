import Logotype from '../../assets/images/logotype.svg';
import {StyledLogo} from "./StyledLogo";

export function Logo() {
  return (
    <StyledLogo>
      <img width="38" src={Logotype} alt="Pizza logo"/>
      <div className="text">
        <h1>React Pizza</h1>
        <p>the most delicious pizza in the universe</p>
      </div>
    </StyledLogo>
  )
}