import styled from 'styled-components';
//import { Card } from '@mui/material';
//import loginPicture from '../../assets/images/login_desktop@1x.jpg';

export const ModalWrap = styled.div`
max-width: 533px;
`

export const LogoStyle = styled.div`
  /* outline: 1px solid black; */
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    margin: 0 auto 52px;
    color: var(--white, #fbfbfb);
    font-size: 27px;
    /* font-style: normal; */
    font-weight: 400;
    line-height: 40px;
  }
  h4 {
    margin: 0 auto 52px;
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
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
    color: rgba(98, 63, 139, 1);
    font-size: 18px;
    &:hover {
      background-color: rgba(252, 252, 252, 1);
      border: 1px solid rgba(74, 86, 226, 1);
    }
  }
`;
