import { NavLink } from 'react-router-dom';
import StyledSideBar from './StyledSideBar';
import Balance from 'components/Balance/Balance';
import Currency from 'components/Currency/Currency';

function SideBar() {
  return (
    <StyledSideBar>
      <nav>
        <NavLink to="/home">HOME</NavLink>
        <NavLink to="/statistic">Statistic</NavLink>
      </nav>
      <Balance />
      <Currency />
    </StyledSideBar>
  );
}

export default SideBar;
