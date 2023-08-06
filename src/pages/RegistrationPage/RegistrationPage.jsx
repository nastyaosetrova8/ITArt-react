import { Container, LogoStyle, RegistrationPageStyle } from './RegistrationPageStyled';
import { Stack } from '@mui/material';
import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';
import Logo from '../../assets/images/logo.svg'

function RegisterPage() {
  return (
    <RegistrationPageStyle>
      <Container sx={{ backgroundColor: 'rgba(255, 255, 255, 0.25)' }}>
        <Stack>
          <LogoStyle>
          <img src={Logo} alt="Logo Wallet" width="36px" height="36px" />
          <h3>MoneyGuard</h3>
          </LogoStyle>
        </Stack>
        <RegistrationForm />
      </Container>
    </RegistrationPageStyle>
  );
}

export default RegisterPage;
