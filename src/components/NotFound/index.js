import {FullPageContainer, Image, Heading, Para} from './styledComponents'

const notFoundUrl =
  'https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png'
//  alt should be not found

const NotFound = () => (
  <FullPageContainer>
    <Image alt="not found" src={notFoundUrl} />
    <Heading>Page Not Found</Heading>
    <Para>We are sorry, the page you requested could not be found.</Para>
  </FullPageContainer>
)

export default NotFound
