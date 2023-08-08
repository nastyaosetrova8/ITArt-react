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
    color: var(--white, #fbfbfb); /*  */
    font-size: 28px;
    /* font-style: normal; */
    font-weight: 400;
    line-height: 40px;
  }
  @media (max-width: 780px) {
    padding: 23px 20px;
    //width: 533px;
  }
`;
export const LogoStyle = styled.div`
  /* outline: 1px solid black; */
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonsBox = styled.div`
  //margin: 52px auto 0;

  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  button {
    width: 300px;
    height: 50px;
    border-radius: 20px;
    font-size: 18px;
    text-transform: uppercase;
    transition: font-weight 250ms ease-in;
    border: transparent;

    &:hover {
      border: 1px solid rgba(74, 86, 226, 1);
      font-weight: bold;
    }
  }
  @media (max-width: 780px){
    button{
      width: 280px;
    }
  }
`;
export const ButtonActive = styled.button`
  color: white;
  background-image: linear-gradient(
    120deg,
    rgba(255, 199, 39, 1),
    rgba(158, 64, 186, 1) 80%,
    rgba(112, 0, 256)
  );
`;
export const ButtonWhite = styled.button`
  color: rgba(98, 63, 139, 1);
  background-color: rgba(252, 252, 252, 1);
`;
