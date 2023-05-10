import {Link} from 'react-router-dom'
import MeetUpContext from '../../MeetUpContext'

import {
  HomePageContainer,
  Heading,
  Para,
  ButtonContainer,
  Button,
  Image,
} from './styledComponents'
import Header from '../Header'

const meetUpUrl =
  'https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png'
//  alt should be meetup

const Home = () => (
  <MeetUpContext.Consumer>
    {value => {
      const {showRegisterInHome, name, topic} = value

      /* const onClickRegisterButton = () => {
        const {history} = props
        history.replace('/register')
      } */

      return (
        <>
          <Header />
          <HomePageContainer>
            {showRegisterInHome ? (
              <>
                <Heading registered>Hello {name}</Heading>
                <Para registered>Welcome to {topic}</Para>
                <Image alt="meetup" src={meetUpUrl} />
              </>
            ) : (
              <>
                <Heading>Welcome to Meetup</Heading>
                <Para>Please register for the topic</Para>
                <ButtonContainer>
                  <Link to="/register">
                    <Button type="button">Register</Button>
                  </Link>
                </ButtonContainer>
                <Image alt="meetup" src={meetUpUrl} />
              </>
            )}
          </HomePageContainer>
        </>
      )
    }}
  </MeetUpContext.Consumer>
)

export default Home
