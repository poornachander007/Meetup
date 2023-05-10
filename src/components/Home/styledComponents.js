import styled from 'styled-components'

//   HomePageContainer,
//   Heading,
//   Para,
//   ButtonContainer,
//   Button,
//   Image,

export const HomePageContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  font-family: 'Roboto';
`

export const Heading = styled.h1`
  font-size: 34px;
  font-weight: ${props => (props.registered ? 'bold' : '500')};
  color: ${props => (props.registered ? '#2563eb' : '#334155')};
  margin-bottom: 0;
`

export const Para = styled.p`
  //   margin: 0;
  font-size: ${props => (props.registered ? '25px' : '20px')};
  font-weight: ${props => (props.registered ? 'bold' : 'normal')};
  color: ${props => (props.registered ? '#334155' : '#64748b')};
`

export const ButtonContainer = styled.div``

export const Button = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 10px 20px 10px 20px;
  font-family: 'Roboto';
  font-weight: bold;
`

export const Image = styled.img`
  padding-top: 20px;
  width: 700px;
  max-width: 100%;
`
