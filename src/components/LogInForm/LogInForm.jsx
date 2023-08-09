import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logInUserThunk } from 'redux/Thunks/AuthUserThunk';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import HttpsIcon from '@mui/icons-material/Https';
import {
  ButtonActive,
  ButtonWhite,
  ButtonsBox,
  InputBtnWrap,
  InputsWrap,
} from './LoginFormStyled';
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
        <Form>          
          <InputBtnWrap>
            <InputsWrap>
              <TextField
                InputProps={{                  
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon sx={{color: 'var(--white-40)'}}/>
                    </InputAdornment>                  
                  ),                  
                }}
                autoFocus='true'                
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
                      <HttpsIcon sx={{color: 'var(--white-40)'}} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        sx={{color: 'var(--white-40)'}}
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
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
                  formik.errors.password && 'Please enter your valid password'
                }
              />
            </InputsWrap>
            <ButtonsBox style={{ margin: '52px auto 0' }}>
              <ButtonActive type="submit">Log in</ButtonActive>

              <Link to="/register">
                <ButtonWhite type="submit">Register</ButtonWhite>
              </Link>
            </ButtonsBox>            
          </InputBtnWrap>
        </Form>        
      )}
    </Formik>
  );
};
