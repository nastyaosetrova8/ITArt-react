import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerUserThunk } from 'redux/Thunks/AuthUserThunk';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Button, Stack, TextField } from '@mui/material';

export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handlerOnSubmit = evt => {
    //evt.preventDefault();
    const children = evt.currentTarget.elements;
    const username = children.username.value;
    const email = children.email.value;
    const password = children.password.value;

    const registerUserData = { username, email, password };
    console.log(registerUserData);
    dispatch(registerUserThunk(registerUserData));
    evt.currentTarget.reset();
  }

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
      <Stack sx={{ margin: '75px auto', width: '400px' }}>
        <Form onSubmit={formik.handleSubmit}>
          <Stack spacing={4}>
          <TextField
              variant="standard"
              label="Name"
              name="username"
              type="text"
              onChange={formik.handleChange}
              error={formik.errors.username}
              helperText={
                formik.errors.username && 'Please enter your name'
              }
            />

            <TextField
              variant="standard"
              label="Email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              error={formik.errors.email}
              // helperText={
              //   formik.errors.email && 'Please enter a valid email address'
              // }
            />
            <TextField
              variant="standard"
              label="Password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              // error={formik.errors.password}
              // helperText={
              //   formik.errors.password && 'Please enter your valid password (from 6 to 12 symbols)'
              // }
            />
            <TextField
              variant="standard"
              label="Confirm password"
              name="confirmPassword"
              type="password"
              onChange={formik.handleChange}
              // error={formik.errors.confirmPassword}
              // helperText={
              //   formik.errors.confirmPassword && 'Please enter your valid password'
              // }
            />
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              mt={4}
            >
              <Button
                variant="contained"
                type="submit"
                size="large"
                //disabled={!formik.isValid}
              >
                Log in
              </Button>
              <Button
                variant="contained"
                type="submit"
                size="large"
                //disabled={!formik.isValid}
              >
                Register
              </Button>
              <Link to="/login">Log In</Link>
            </Stack>
          </Stack>
        </Form>
      </Stack>
    )}
  </Formik>

  //===============================================
  // <>
  // <h3>RegistrationForm</h3>
  // <form onSubmit={handlerOnSubmit} style={{
  //   width: '500px',
  //   display: 'flex',
  //   flexDirection: 'column',
  //   gap: '15px'
  //   }}>
  //   <label htmlFor="">Name</label>
  //   <input type="text" name="username"/>
  //   <label htmlFor="">Email</label>
  //   <input type="email" name="email"/>
  //   <label htmlFor="">Password</label>
  //   <input type="password" name="password"/>
  //   <label htmlFor="">Confirm Password</label>
  //   <input type="password" />
  //   <button type='submit'>REGISTER</button>
  // </form>
  // </>
);
}
