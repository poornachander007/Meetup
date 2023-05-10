import MeetUpContext from '../../MeetUpContext'
import {
  RegisterPageContainer,
  ContentContainer,
  Image,
  Form,
  Heading,
  Label,
  Input,
  Select,
  Option,
  Button,
  ErrorPara,
} from './styledComponents'
import Header from '../Header'

const registerUrl =
  'https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png'
//  alt should be website register

const Register = props => (
  <MeetUpContext.Consumer>
    {value => {
      const {
        showRegisterInHome,
        name,
        topic,
        topicId,
        topicsList,
        onChangeName,
        onChangeTopic,
        errorMsg,
        toggleShowErrorMessage,
        toggleShowRegister,
      } = value

      const onChangeSelect = event => {
        onChangeTopic(event.target.value)
      }

      const onChangeInput = event => {
        onChangeName(event.target.value)
      }

      const onClickRegisterNow = () => {
        const {history} = props
        if (name !== '') {
          toggleShowRegister()
          history.replace('/')
        } else {
          toggleShowErrorMessage()
        }
      }

      return (
        <>
          <Header />
          <RegisterPageContainer>
            <ContentContainer>
              <Image alt="website register" src={registerUrl} />
              <Form onSubmit={onClickRegisterNow}>
                <Heading>Let us join</Heading>
                <Label htmlFor="name">NAME</Label>
                <Input
                  onChange={onChangeInput}
                  value={name}
                  id="name"
                  type="text"
                  placeholder="Your name"
                />
                <Label htmlFor="name">TOPICS</Label>
                <Select onChange={onChangeSelect} value={topicId}>
                  {topicsList.map(item => (
                    <Option key={item.id} value={item.id}>
                      {item.displayText}
                    </Option>
                  ))}
                </Select>
                <Button type="submit">Register Now</Button>
                {errorMsg && <ErrorPara>Please enter your name</ErrorPara>}
              </Form>
            </ContentContainer>
          </RegisterPageContainer>
        </>
      )
    }}
  </MeetUpContext.Consumer>
)

export default Register
