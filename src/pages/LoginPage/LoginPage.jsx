import { LogInForm } from 'components/LogInForm/LogInForm';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/selectors';

function LoginPage() {
  const isLoading = useSelector(selectIsLoading);
  return <>{!isLoading && <LogInForm />}</>;
}

export default LoginPage;
