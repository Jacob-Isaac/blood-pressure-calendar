import {
  NavigationBackground,
  NavigationList,
  NavigationLogo,
  NavigationSearcher,
} from "./styled";

function NavigationBar() {
  return (
    <NavigationBackground>
      <NavigationList>
        {/* <NavigationLogoLink to="/costam"> */}
          <NavigationLogo>
            {/* <StyledMovieIcon strokeWidth={3} opacity={1} /> */}
            ֍
          </NavigationLogo>
          <div>
          ֍
          </div>
          <div>
          ֍
          </div>
          <div>
          ֍
          </div>
        {/* </NavigationLogoLink>
        <NavigationLink to="/costam">Cos</NavigationLink>
        <NavigationLink to="/costam">Costanm</NavigationLink> */}
        <NavigationSearcher>
          <div />
        </NavigationSearcher>
      </NavigationList>
    </NavigationBackground>
  );
}

export default NavigationBar;