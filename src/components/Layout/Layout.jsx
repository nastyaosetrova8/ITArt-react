import { Link, NavLink, Outlet } from 'react-router-dom';

import StyledContainer from './StyledContainer';
import StyledHeader from './StyledHeader';

export const Layout = () => {
  return (
    <>
      <StyledHeader>
        <Link to="/">LOGO link to HOME</Link>
        <p>name User</p>
        <button type="button">Log out</button>
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
