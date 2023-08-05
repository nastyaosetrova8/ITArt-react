import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logInUserThunk } from 'redux/Thunks/AuthUserThunk';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Button, Stack, TextField } from '@mui/material';

export const LogInForm = () => {
  const dispatch = useDispatch();

  const handlerOnSubmit = values => {
    //evt.preventDefault();
    // console.log(values);
    const logInUserData = values;
    dispatch(logInUserThunk(logInUserData));
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
        <Stack sx={{ margin: '75px auto', width: '400px' }}>
          <Form>
            <Stack spacing={4}>
              <TextField
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
                variant="standard"
                label="Password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                error={Boolean(formik.errors.password)}
                helperText={
                  formik.errors.password && 'Please enter your valid password'
                }
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

                <Link to="/register">
                  <Button
                    variant="contained"
                    type="submit"
                    size="large"
                    //disabled={!formik.isValid}
                  >
                    Register
                  </Button>
                </Link>
              </Stack>
            </Stack>
          </Form>
        </Stack>
      )}
    </Formik>
  );
};
