import { Container, RegistrationPageStyle } from './RegistrationPageStyled';
import { Stack } from '@mui/material';
import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';
function RegisterPage() {
  return (
    <RegistrationPageStyle>
      <Container sx={{ backgroundColor: 'rgba(255, 255, 255, 0.25)' }}>
        <Stack>
          <h3>MoneyGuard</h3>
        </Stack>
        <RegistrationForm />
      </Container>
    </RegistrationPageStyle>
  );
}

export default RegisterPage;
