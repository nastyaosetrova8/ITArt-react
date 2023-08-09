import styled from 'styled-components';
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
`;

// export const Container = styled(Card)`
export const Container = styled.div`
  margin: 0 auto;
  width: 533px;
  height: 570px;
  /* padding: 80px 62px; */
  border-radius: 14px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var( --form-color);
  

  h3 {
    margin: 0 auto;
    color: var(--white);
    font-size: 28px;
    font-weight: 400;
    line-height: 40px;
  }

  @media (max-width: 780px) {
    padding: 23px 20px;
    width: 280px;
    //width: 533px;
  }
  @media (max-width: 780px) {
    /* width: 280px; */
  }
`;
export const LogoStyle = styled.div`
  width: 100%;
  margin: 70px auto 52px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

