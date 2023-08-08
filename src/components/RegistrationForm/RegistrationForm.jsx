import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerUserThunk } from 'redux/Thunks/AuthUserThunk';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { IconButton, InputAdornment, Stack, TextField } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import HttpsIcon from '@mui/icons-material/Https';
import { ButtonActive, ButtonWhite, ButtonsBox } from 'pages/RegistrationPage/RegistrationPageStyled';
import { notifyRegisterError} from 'components/Toastify/Toastify';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';


export const RegistrationForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(show => !show);
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
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
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  style={{ width: '100%' }}
                  variant="standard"
                  label="Password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  //type="password"
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
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >                          
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  style={{ width: '100%' }}
                  variant="standard"
                  label="Confirm password"
                  name="confirmPassword"
                  type={showPassword ? 'text' : 'password'}
                  // type="password"
                  onChange={formik.handleChange}
                  error={Boolean(formik.errors.confirmPassword)}
                  helperText={
                    formik.errors.confirmPassword &&
                    'Please enter your valid password'
                  }
                />

                <ButtonsBox style={{ margin: '52px auto 0' }}>
                  <ButtonActive                                        
                    type="submit"
                  >
                    Register
                  </ButtonActive>

                  <Link to="/login">
                    <ButtonWhite                                            
                      type="submit"
                    >
                      Log in
                    </ButtonWhite>
                  </Link>
                </ButtonsBox>
              </Stack>
            </Form>
          </Stack>
        )}
      </Formik>    
  );
};
