import {
  NavigationBackground,
  NavigationList,
  NavigationLogo,
  NavigationSearcher,
  NaviLink
} from "./styled";

function NavigationBar() {
  return (
    <NavigationBackground>
      <NavigationList>
        {/* <NavigationLogoLink to="/costam"> */}
          <NavigationLogo to="/">
            sum
            mary
          </NavigationLogo>
          <NaviLink to="/test">
         home
          </NaviLink>
          <div>
          calendar
          </div>
          <div>
          key information
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