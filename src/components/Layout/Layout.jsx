import { Navigate, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { toggleShowModal } from 'redux/modal/modalSlice';
import { selectIsAuth, selectUserName } from 'redux/selectors';
import { selectIsShowModal } from 'redux/modal/modalSelectors';

import { StyledHeader, StyledLink } from './StyledHeader';
import Modal from 'components/Modal/Modal';
import Logo from '../../assets/images/logo.svg';
import ExitIcon from './ExitIcon';

export const Layout = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const isAuth = useSelector(selectIsAuth);
  const isShowModal = useSelector(selectIsShowModal);

  const handleOpenModal = evt => {
    dispatch(toggleShowModal(evt.currentTarget.name));
  };

  return isAuth ? (
    <>
      <StyledHeader>
        <StyledLink to="/home">
          <img src={Logo} alt="Logo Wallet" width="23px" height="23px" />
          <p>Money Guard</p>
        </StyledLink>

        <p className="user-name">{userName}</p>
        <button type="button" name="logout" onClick={handleOpenModal}>
          <ExitIcon />
          <span className="btn-exit-text">Exit</span>
        </button>
        {isShowModal && <Modal />}
      </StyledHeader>
      <main>
        <Outlet />
      </main>
    </>
  ) : (
    <Navigate to="/register" replace={true} />
  );
};
