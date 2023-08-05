import styled from 'styled-components';
import RegisterPicture from '../../assets/images/registration_desktop@1x.jpg';
import { Card } from '@mui/material';


export const RegistrationPageStyle = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${RegisterPicture});
  //background-color: rgba(255, 255, 255, 0.3);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 0px;
`;

export const Container = styled(Card)`
  margin: 0 auto;
  width: 533px;
  height: 570px;
  padding: 80px 62px;
  border-radius: 14px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  //background-color: rgba(255, 255, 255, 0.25);
  
  h3 {
    margin: 0 auto;
    //color: var(--white, #fbfbfb);
    font-family: Poppins;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  `
