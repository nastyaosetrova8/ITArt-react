import { Container,  LoginPageStyle } from './LoginPageStyled';
import { Stack } from '@mui/material';
import { LogInForm } from 'components/LogInForm/LogInForm';
//import Logo from '../../assets/images/'

function LoginPage() {
  return (
    
      <LoginPageStyle>
        <Container sx={{backgroundColor: 'rgba(255, 255, 255, 0.25)'}}>
          <Stack>
            <h3>MoneyGuard</h3>
          </Stack>
          <LogInForm />
        </Container>
      </LoginPageStyle>
  );
}

export default LoginPage;
