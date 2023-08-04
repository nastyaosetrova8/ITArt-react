import { Link, Outlet } from 'react-router-dom';

import StyledHeader from './StyledHeader';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserName } from 'redux/selectors';
import { logOutUserThunk } from 'redux/Thunks/AuthUserThunk';

export const Layout = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  const handleOnClick = () => {
    dispatch(logOutUserThunk());
  };

  return (
    <>
      <StyledHeader>
        <Link to="/home">LOGO link to HOME</Link>
        <p>Hello, {userName}</p>
        <button type="submit" onClick={handleOnClick}>
          Log out
        </button>
      </StyledHeader>
      <main>
        <Outlet />
      </main>
    </>
  );
};
