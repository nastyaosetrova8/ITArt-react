import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { ButtonsBox } from 'pages/LoginPage/LoginPageStyled';
import { toggleShowModal } from 'redux/modal/modalSlice';


export const LogOutForm = () => {
  
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(toggleShowModal(''));
  }; 
 
  

  return (
    <>
      <ButtonsBox style={{ margin: '52px auto 0' }}>
        <Button
          variant="contained"
          type="submit"
          sx={{
            backgroundImage:
              'linear-gradient(120deg, rgba(255, 199, 39, 1), rgba(158, 64, 186, 1) 80%, rgba(112, 0, 256))',
          }}
        >
          Log out
        </Button>

        <Link to="/register">
          <Button
          onClick={handleOnClick}
            variant="contained"
            type="submit"
            sx={{ backgroundColor: 'rgba(252, 252, 252, 1)' }}
          >
            Cancel
          </Button>
        </Link>
      </ButtonsBox>
    </>
  );
};
