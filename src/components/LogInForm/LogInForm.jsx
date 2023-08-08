import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logInUserThunk } from 'redux/Thunks/AuthUserThunk';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  IconButton,  
  InputAdornment,  
  Stack,
  TextField,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import HttpsIcon from '@mui/icons-material/Https';
import { ButtonActive, ButtonWhite, ButtonsBox } from 'pages/LoginPage/LoginPageStyled';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';

export const LogInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(show => !show);
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  const dispatch = useDispatch();

  const handlerOnSubmit = values => {
    const logInUserData = values;
    dispatch(logInUserThunk(logInUserData));
    //Form.reset();
    // evt.currentTarget.reset();
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required'),
  }); 

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={values => handlerOnSubmit(values)}
      validationSchema={validationSchema}
    >
      {formik => (
        <Stack sx={{ margin: '75px auto' }}>
          <Form>
            <Stack spacing={4}>
              
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
                  formik.errors.password && 'Please enter your valid password'
                }
              />
            
              <ButtonsBox style={{ margin: '52px auto 0' }}>
                <ButtonActive                  
                  variant="contained"
                  type="submit"
                >
                  Log in
                </ButtonActive>

                <Link to="/register">
                  <ButtonWhite                    
                    variant="contained"
                    type="submit"
                  >
                    Register
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
