import { useDispatch } from 'react-redux';
import { logOutUserThunk } from 'redux/Thunks/AuthUserThunk';
import { ButtonActive, ButtonWhite, ButtonsBox, LogoStyle, ModalWrap, TitleWrapper } from './ModalLogOutStyled';
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
        <TitleWrapper>
          <h4>Are you sure you want to log out?</h4>
          </TitleWrapper>
      </LogoStyle>
      <ButtonsBox >
        <ButtonActive
          type="button"
          onClick={handleLogOut}
        >
          Log Out
        </ButtonActive>

        <ButtonWhite
          type="button"
          onClick={handleOnClick}
        >
          Cancel
        </ButtonWhite>
      </ButtonsBox>
    </ModalWrap>
  );
};
