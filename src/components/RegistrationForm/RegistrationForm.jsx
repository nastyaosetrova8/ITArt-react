import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerUserThunk } from 'redux/Thunks/AuthUserThunk';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Button, InputAdornment, Stack, TextField } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import HttpsIcon from '@mui/icons-material/Https';
import { ButtonsBox } from 'pages/RegistrationPage/RegistrationPageStyled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notifyRegisterError} from 'components/Toastify/Toastify';

export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handlerOnSubmit = values => {
    if (values.password === values.confirmPassword) {     
      const registerUserData = {
        username: values.username,
        email: values.email,
        password: values.password,
      };      
      dispatch(registerUserThunk(registerUserData));
    } else {
      notifyRegisterError();
    }
    //Form.reset();
    //evt.currentTarget.reset();
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().min(6).max(12).required('Required'),
  });

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={values => handlerOnSubmit(values)}
        validationSchema={validationSchema}
      >
        {formik => (
          <Stack sx={{ margin: '50px auto', width: '400px' }}>
            <Form onSubmit={formik.handleSubmit}>
              <Stack spacing={3}>
                <TextField
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon />
                      </InputAdornment>
                    ),
                  }}
                  style={{ width: '100%' }}
                  variant="standard"
                  label="Name"
                  name="username"
                  type="text"
                  onChange={formik.handleChange}
                  error={Boolean(formik.errors.username)}
                  helperText={
                    formik.errors.username && 'Please enter your name'
                  }
                />
                <TextField
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                  style={{ width: '100%' }}
                  variant="standard"
                  label="Email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  error={Boolean(formik.errors.email)}
                  helperText={
                    formik.errors.email && 'Please enter a valid email address'
                  }
                />

                <TextField
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <HttpsIcon />
                      </InputAdornment>
                    ),
                  }}
                  style={{ width: '100%' }}
                  variant="standard"
                  label="Password"
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  error={Boolean(formik.errors.password)}
                  helperText={
                    formik.errors.password &&
                    'Please enter your valid password (from 6 to 12 symbols)'
                  }
                />

                <TextField
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <HttpsIcon />
                      </InputAdornment>
                    ),
                  }}
                  style={{ width: '100%' }}
                  variant="standard"
                  label="Confirm password"
                  name="confirmPassword"
                  type="password"
                  onChange={formik.handleChange}
                  error={Boolean(formik.errors.confirmPassword)}
                  helperText={
                    formik.errors.confirmPassword &&
                    'Please enter your valid password'
                  }
                />

                <ButtonsBox style={{ margin: '52px auto 0' }}>
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{
                      backgroundImage:
                        'linear-gradient(120deg, rgba(255, 199, 39, 1), rgba(158, 64, 186, 1) 80%, rgba(112, 0, 256))',
                    }}
                  >
                    Register
                  </Button>

                  <Link to="/login">
                    <Button
                      variant="contained"
                      type="submit"
                      sx={{ backgroundColor: 'rgba(252, 252, 252, 1)' }}
                    >
                      Log in
                    </Button>
                  </Link>
                </ButtonsBox>
              </Stack>
            </Form>
          </Stack>
        )}
      </Formik>
    </>
  );
};
