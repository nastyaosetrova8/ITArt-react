import {
  Container,
  LogoStyle,
  RegistrationPageStyle,
} from './RegistrationPageStyled';
import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';
import Logo from '../../assets/images/logo.svg';

function RegisterPage() {
  return (
    <RegistrationPageStyle>      
      <Container>        
        <div>
          <LogoStyle>
            <img src={Logo} alt="Logo Wallet" width="36px" height="36px" />
            <h3>MoneyGuard</h3>
          </LogoStyle>
        </div>        
        <RegistrationForm />
      </Container>
    </RegistrationPageStyle>
  );
}

export default RegisterPage;
