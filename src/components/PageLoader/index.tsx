import Logotype from '../../assets/images/logotype.svg';
import { StyledImagePageLoader, StyledPageLoader } from './StyledPageLoader';

export const PageLoader: React.FC = () => {
  return (
      <StyledPageLoader>
        <StyledImagePageLoader width="80" height="80" src={Logotype} alt="Logotype"/>
      </StyledPageLoader>          
  )
}