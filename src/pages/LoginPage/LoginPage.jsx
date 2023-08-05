import { Container, LoginPageStyle, LogoStyle } from './LoginPageStyled';
//import { Stack } from '@mui/material';
import { LogInForm } from 'components/LogInForm/LogInForm';
import Logo from '../../assets/images/logo.svg';

function LoginPage() {
  return (
    <LoginPageStyle>
      <Container sx={{ backgroundColor: 'rgba(255, 255, 255, 0.25)' }}>
        {/* <Stack> */}
        <LogoStyle>
          <img src={Logo} alt="Logo Wallet" width="36px" height="36px" />
          <h3>MoneyGuard</h3>
        </LogoStyle>
        {/* </Stack> */}
        <LogInForm />
      </Container>
    </LoginPageStyle>
  );
}

export default LoginPage;
