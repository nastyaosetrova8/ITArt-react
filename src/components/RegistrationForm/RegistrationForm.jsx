import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerUserThunk } from 'redux/Thunks/AuthUserThunk';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import HttpsIcon from '@mui/icons-material/Https';
import { notifyRegisterError } from 'components/Toastify/Toastify';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';
import {
  InputBtnWrap,
  InputsWrap,
  ButtonsBox,
  ButtonActive,
  ButtonWhite,
} from './RegistrationFormStyled';

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
        <Form onSubmit={formik.handleSubmit}>
          <InputBtnWrap>
            <InputsWrap>
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon sx={{ color: 'var(--white-40)' }} />
                    </InputAdornment>
                  ),
                }}
                sx={{ input: { color: 'var(--white)' } }}
                autoFocus='true'
                color= 'secondary'
                fullWidth = 'true'
                placeholder='Name'
                variant="standard"
                label="Name"
                name="username"
                type="text"
                onChange={formik.handleChange}
                error={Boolean(formik.errors.username)}
                helperText={formik.errors.username && 'Please enter your name'}
              />
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon sx={{ color: 'var(--white-40)' }} />
                    </InputAdornment>
                  ),
                }}
                sx={{ input: { color: 'var(--white)' } }}
                color= 'secondary'
                fullWidth = 'true'
                placeholder='Email'                
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
                      <HttpsIcon sx={{ color: 'var(--white-40)' }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        sx={{ color: 'var(--white-40)' }}
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{ input: { color: 'var(--white)' } }}
                color= 'secondary'
                fullWidth = 'true'
                placeholder='Password'
                variant="standard"
                label="Password"
                name="password"
                type={showPassword ? 'text' : 'password'}
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
                      <HttpsIcon sx={{ color: 'var(--white-40)' }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        sx={{ color: 'var(--white-40)' }}
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{ input: { color: 'var(--white)' } }}
                color= 'secondary'
                fullWidth = 'true'
                placeholder='Confirm password'
                variant="standard"
                label="Confirm password"
                name="confirmPassword"
                type={showPassword ? 'text' : 'password'}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.confirmPassword)}
                helperText={
                  formik.errors.confirmPassword &&
                  'Please enter your valid password'
                }
              />
            </InputsWrap>

            <ButtonsBox>
              <ButtonActive type="submit">Register</ButtonActive>

              <Link to="/login">
                <ButtonWhite type="submit">Log in</ButtonWhite>
              </Link>
            </ButtonsBox>
          </InputBtnWrap>
        </Form>
      )}
    </Formik>
  );
};
