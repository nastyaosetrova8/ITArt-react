import styled from 'styled-components';
import { Card } from '@mui/material';
import loginPicture from '../../assets/images/login_desktop@1x.jpg';
import loginPicture2 from '../../assets/images/login_desktop@2x.jpg';

export const LoginPageStyle = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${loginPicture});
  background-color: rgba(255, 255, 255, 0.3);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 0px;
  @media (max-width: 780px) {
    width: 600px;
    background-image: url(${loginPicture2});
  }
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
  
  h3 {
    margin: 0 auto;
    color: var(--white, #fbfbfb);
    font-family: Poppins;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  @media (max-width: 780px) {
    width: 533px;
  }
  @media (max-width: 370px) {
  }
  background-color: rgba(255, 255, 255, 0.25);
`;
