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
            ֍
          </NavigationLogo>
          <NaviLink to="/test">
          ֍
          </NaviLink>
          <div>
          ᴓ
          </div>
          <div>
          ᴓ
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