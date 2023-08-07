import { useDispatch } from 'react-redux';
import { logOutUserThunk } from 'redux/Thunks/AuthUserThunk';
import { Button } from '@mui/material';
import { ButtonsBox } from 'pages/LoginPage/LoginPageStyled';
import { LogoStyle } from './ModalLogOutStyled';
import Logo from '../../assets/images/logo.svg';
import { toggleShowModal } from 'redux/modal/modalSlice';

export const LogOutForm = () => {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(toggleShowModal(''));
    dispatch(logOutUserThunk());
  }; 
 
  

  return (
    <>
      <LogoStyle>
        <img src={Logo} alt="Logo Wallet" width="36px" height="36px" />
        <h3>Are you sure you want to log out?</h3>
      </LogoStyle>
      <ButtonsBox style={{ margin: '52px auto 0' }}>
        <Button
          sx={{
            backgroundImage:
              'linear-gradient(120deg, rgba(255, 199, 39, 1), rgba(158, 64, 186, 1) 80%, rgba(112, 0, 256))',
          }}
          variant="contained"
          type="submit"
          onClick={handleLogOut}
        >
          Log Out
        </Button>

        <Button
          sx={{ backgroundColor: 'rgba(252, 252, 252, 1)' }}
          variant="contained"
          type="submit"
          onClick={handleOnClick}
        >
          Cancel
        </Button>
      </ButtonsBox>
    </>
  );
};
