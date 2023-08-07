import { Link, Navigate, Outlet } from 'react-router-dom';

import StyledHeader from './StyledHeader';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuth, selectUserName } from 'redux/selectors';
import { logOutUserThunk } from 'redux/Thunks/AuthUserThunk';

export const Layout = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const isAuth = useSelector(selectIsAuth);

  
  const handleOpenModal = () => {
    
    // dispatch(logOutUserThunk());
  };

  return isAuth ? (
    <>
      <StyledHeader>
        <Link to="/home">LOGO link to HOME</Link>
        <p>Hello, {userName}</p>
        {/* <button type="submit" onClick={handleOnClick}> */}
        <button type="submit" onClick={handleOpenModal}>
          Log out
        </button>
      </StyledHeader>
      <main>
        <Outlet />
      </main>
    </>
  ) : (
    <Navigate to="/register" replace={true} />
  );
};
