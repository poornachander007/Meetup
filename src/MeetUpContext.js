import React from 'react'

const MeetUpContext = React.createContext({
  showRegisterInHome: false,
  toggleShowRegister: () => {},
  topicsList: [],
  name: '',
  topic: '',
  onChangeName: () => {},
  onChangeTopic: () => {},
  errorMsg: '',
})

export default MeetUpContext
