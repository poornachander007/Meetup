import styled from 'styled-components'

//   RegisterPageContainer,
//   ContentContainer,
//   Image,
//   Form,
//   Heading,
//   Label,
//   Input,
//   Select,
//   Option,
//   Button,

export const RegisterPageContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  font-family: 'Roboto';
  @media screen and (max-width: 767px) {
    height: 90vh;
  }
`

export const ContentContainer = styled.div`
  width: 90%;
  //   height: ;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`

export const Image = styled.img`
  width: 400px;
  @media screen and (max-width: 767px) {
    width: 200px;
  }
`

export const Form = styled.form`
  //   width: 100%;
  //   height: ;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
`

export const Heading = styled.h1`
  font-size: 34px;
  color: #334155;
  font-weight: 600;
  font-family: 'Roboto';
`

export const Label = styled.label`
  font-size: 15px;
  color: #64748b;
  font-weight: 500;
  font-family: 'Roboto';
`

export const Input = styled.input`
  width: 100%;
  outline: none;
  border: 1px solid #99994d;
  border-radius: 5px;
  padding: 14px 10px 14px 10px;
  margin: 10px 0 10px 0;
  font-size: 15px;
`

export const Select = styled.select`
  width: 100%;
  outline: none;
  border: 1px solid #99994d;
  border-radius: 5px;
  padding: 14px 10px 14px 10px;
  margin: 10px 0 10px 0;
  font-size: 15px;
`

export const Option = styled.option``

export const Button = styled.button`
  border: none;
  border-radius: 8px;
  color: #ffffff;
  font-weight: bold;
  background-color: #3b82f6;
  padding: 10px 20px 10px 20px;
`

export const ErrorPara = styled.p`
  color: red;
  font-size: 15px;
  font-family: 'Roboto';
`
