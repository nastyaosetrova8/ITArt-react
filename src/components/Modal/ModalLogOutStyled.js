import styled from 'styled-components';
//import { Card } from '@mui/material';
//import loginPicture from '../../assets/images/login_desktop@1x.jpg';

export const ModalWrap = styled.div`
  /* max-width: 533px;
padding: 60px 117px;
@media (max-width: 780px){
  padding: 240px 20px;
} */
`;

export const LogoStyle = styled.div`  
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    margin: 0 auto 52px;
    color: var(--white, #fbfbfb);
    font-size: 27px;    
    font-weight: 400;
    line-height: 40px;
  }
  h4 {
    margin: 0 auto 52px;
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
  }
  @media (max-width: 780px) {
    img {
      display: none;
    }
    h3 {
      display: none;
    }
    h4 {
      margin: 0 auto 40px;
    }
  }
`;
export const ButtonsBox = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 20px;

  button {
    width: 300px;
    height: 50px;
    border-radius: 20px;
    font-size: 18px;
    text-transform: uppercase;    
    transition: font-weight 250ms ease-in-out;    
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
