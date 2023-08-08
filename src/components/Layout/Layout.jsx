import { Link, Navigate, Outlet } from 'react-router-dom';

import StyledHeader from './StyledHeader';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuth, selectUserName } from 'redux/selectors';
import {
  selectIsLogoutOpen,
  selectIsShowModal,
} from 'redux/modal/modalSelectors';
import { openLogout, toggleShowModal } from 'redux/modal/modalSlice';
import Modal from 'components/Modal/Modal';
// import { logOutUserThunk } from 'redux/Thunks/AuthUserThunk';

export const Layout = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const isAuth = useSelector(selectIsAuth);
  const isShowModal = useSelector(selectIsShowModal);

  // const handleOnClick = () => {
  //   dispatch(logOutUserThunk());
  // };

  const handleOpenModal = evt => {
    dispatch(toggleShowModal(evt.currentTarget.name));
  };

  return isAuth ? (
    <>
      <StyledHeader>
        <Link to="/home">LOGO link to HOME</Link>
        <p>Hello, {userName}</p>
        <button
          type="button"
          name="logout"
          // onClick={handleOnClick}
          onClick={handleOpenModal}
        >
          Log out
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
