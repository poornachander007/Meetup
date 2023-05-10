import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import MeetUpContext from './MeetUpContext'
import NotFound from './components/NotFound'
import Home from './components/Home'
import Register from './components/Register'
import './App.css'

// These are the lists used in the application. You can move them to any component needed.
const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

// Replace your code here
// const App = () => <h1>Hello World</h1>

class App extends Component {
  state = {
    name: '',

    topic: topicsList[0].displayText,
    showRegisterInHome: false,
    errorMsg: false,
  }

  onChangeName = name => {
    this.setState({name})
  }

  onChangeTopic = topicId => {
    const topicObj = topicsList.find(item => item.id === topicId)
    const topic = topicObj.displayText
    this.setState({topic})
  }

  toggleShowRegister = () => {
    this.setState(preState => ({
      showRegisterInHome: !preState.showRegisterInHome,
    }))
  }

  toggleShowErrorMessage = () => {
    this.setState(preState => ({
      errorMsg: !preState.errorMsg,
    }))
  }

  render() {
    const {name, topic, showRegisterInHome, errorMsg} = this.state
    return (
      <MeetUpContext.Provider
        value={{
          showRegisterInHome,
          toggleShowRegister: this.toggleShowRegister,
          name,
          topic,
          topicsList,
          onChangeName: this.onChangeName,
          onChangeTopic: this.onChangeTopic,
          errorMsg,
          toggleShowErrorMessage: this.toggleShowErrorMessage,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </MeetUpContext.Provider>
    )
  }
}

export default App
