import { Link, NavLink, Outlet } from 'react-router-dom';

import StyledContainer from './StyledContainer';
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
        <Link to="/">LOGO link to HOME</Link>
        <p>Hello, {userName}</p>
        <button type="submit" onClick={handleOnClick}>
          Log out
        </button>
      </StyledHeader>
      <main>
        <section>
          <StyledContainer>
            <div className="side-bar">
              <nav>
                <NavLink to="/">HOME</NavLink>
                <NavLink to="statistic">Statistic</NavLink>
              </nav>
              <h2>My balance: ₴ 24000</h2>
              <p>SOME EXCHANGE RATE</p>
            </div>
            <Outlet />
          </StyledContainer>
        </section>
      </main>
    </>
  );
};
