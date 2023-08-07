import styled from 'styled-components';
//import { Card } from '@mui/material';
//import loginPicture from '../../assets/images/login_desktop@1x.jpg';



export const LogoStyle = styled.div`
  /* outline: 1px solid black; */
  width: 182px;
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
    color: rgba(98, 63, 139, 1);
    &:hover {
      background-color: rgba(252, 252, 252, 1);
      border: 1px solid rgba(74, 86, 226, 1);
    }
  }
`;
