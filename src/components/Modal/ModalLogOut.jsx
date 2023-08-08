import { useDispatch } from 'react-redux';
import { logOutUserThunk } from 'redux/Thunks/AuthUserThunk';
import { Button } from '@mui/material';
// import { ButtonsBox } from 'pages/LoginPage/LoginPageStyled';
import { ButtonsBox, LogoStyle, ModalWrap } from './ModalLogOutStyled';
import Logo from '../../assets/images/logo.svg';
import { toggleShowModal } from 'redux/modal/modalSlice';

export const LogOutForm = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOutUserThunk());
    dispatch(toggleShowModal(''));
  };

  const handleOnClick = () => {
    dispatch(toggleShowModal(''));
  };

  return (
    <ModalWrap>
      <LogoStyle>
        <img src={Logo} alt="Logo Wallet" width="36px" height="36px" />
        <h3>MoneyGuard</h3>
        <h4>Are you sure you want to log out?</h4>
      </LogoStyle>
      <ButtonsBox >
        <Button
          sx={{
            backgroundImage:
              'linear-gradient(120deg, rgba(255, 199, 39, 1), rgba(158, 64, 186, 1) 80%, rgba(112, 0, 256))',
          }}
          variant="contained"
          type="button"
          onClick={handleLogOut}
        >
          Log Out
        </Button>

        <Button
          sx={{ backgroundColor: 'rgba(252, 252, 252, 1)' }}
          variant="contained"
          type="button"
          onClick={handleOnClick}
        >
          Cancel
        </Button>
      </ButtonsBox>
    </ModalWrap>
  );
};
