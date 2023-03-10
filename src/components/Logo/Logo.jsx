import Logotype from '../../assets/images/logotype.svg';
import {StyledLogoLink, StyledLogoDiv} from "./StyledLogo";
import {useLocation} from "react-router";
import {useSelector} from "react-redux";
import {selectFilter} from "../../redux/slices/filterSlice";

export function Logo() {
  const location = useLocation();
  const filter = useSelector(selectFilter);

  if (location.pathname === '/' ) {
    return (
      <StyledLogoDiv>
        <img width="38" src={Logotype} alt="Index logo"/>
        <div className="text">
          <h1>React Pizzas</h1>
          <p>the most delicious pizza in the universe</p>
        </div>
      </StyledLogoDiv>
    )
  } else {
    return (
      <StyledLogoLink to="/" state={{ ...filter }}>
        <img width="38" src={Logotype} alt="Index logo"/>
        <div className="text">
          <h1>React Pizzas</h1>
          <p>the most delicious pizza in the universe</p>
        </div>
      </StyledLogoLink>
    )
  }
}