import ContentLoader from "react-content-loader"
import {StyledSkeletonPizza} from "./StyledSkeletonPizza";

export const SkeletonPizza = () => (
  <StyledSkeletonPizza>
    <ContentLoader
      speed={2}
      width={275}
      height={450}
      viewBox="0 0 275 450"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="135" cy="98" r="91" />
      <rect x="0" y="410" rx="4" ry="4" width="71" height="32" />
      <rect x="0" y="305" rx="10" ry="10" width="275" height="80" />
      <rect x="24" y="204" rx="4" ry="4" width="224" height="26" />
      <rect x="7" y="237" rx="4" ry="4" width="265" height="33" />
      <rect x="108" y="399" rx="30" ry="30" width="165" height="48" />
    </ContentLoader>
  </StyledSkeletonPizza>
)

