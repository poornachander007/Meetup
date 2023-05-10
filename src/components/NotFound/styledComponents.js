import styled from 'styled-components'

// FullPageContainer, Image, Heading, Para

export const FullPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
`

export const Image = styled.img`
  width: 400px;
`

export const Heading = styled.h1`
  font-size: 34px;
  font-weight: bold;
  color: #003366;
  text-align: center;
  margin-bottom: 0;
  padding-bottom: 0;
`

export const Para = styled.p`
  font-size: 15px;
  font-weight: 600;
  color: #85adad;
  text-align: center;
`
