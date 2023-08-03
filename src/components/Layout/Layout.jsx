import { Link, Outlet } from 'react-router-dom';

import StyledHeader from './StyledHeader';

export const Layout = () => {
  return (
    <>
      <StyledHeader>
        <Link to="home">LOGO link to HOME</Link>
        <p>name User</p>
        <button type="button">Log out</button>
      </StyledHeader>
      <main>
        <Outlet />
      </main>
    </>
  );
};
