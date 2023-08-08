import styled from 'styled-components';
import { Card } from '@mui/material';
import loginPicture from '../../assets/images/login_desktop@1x.jpg';


export const LoginPageStyle = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${loginPicture});
  //background-color: rgba(255, 255, 255, 0.3);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 0px;
  @media (max-width: 780px) {
    /* max-width: 600px;     */
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
  //background-color: rgba(255, 255, 255, 0.25);

  h3 {
    margin: 0 auto;
    color: var(--white, #fbfbfb);    
    font-size: 28px;    
    font-weight: 400;    
    line-height: 40px;
  }

  @media (max-width: 780px) {
    padding: 98px 20px;
    //width: 533px;
  }
  @media (max-width: 370px) {
  }
`;
export const LogoStyle = styled.div`  
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ButtonsBox = styled.div`
  width: 300px;
  display: flex;
  //margin: 52px auto 0;
  flex-direction: column;
  gap: 20px;

  button {
    width: 300px;
    height: 50px;
    border-radius: 20px;
    font-size: 18px;
    text-transform: uppercase;    
    transition: transform 300ms ease-in;    
    border: transparent;    

    &:hover {
      border: 1px solid rgba(74, 86, 226, 1);
      transform: scale(1.02)
      
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
