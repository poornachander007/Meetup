import {NavBar, Image} from './styledComponents'

const webSiteUrl =
  'https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png'
//  alt should be website logo

const Header = () => (
  <NavBar>
    <Image alt="website logo" src={webSiteUrl} />
  </NavBar>
)

export default Header
