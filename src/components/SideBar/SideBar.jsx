import Balance from 'components/Balance/Balance';
import { StyledLink, StyledSideBar } from './StyledSideBar';
import Currency from 'components/Currency/Currency';

function SideBar() {
  return (
    <StyledSideBar>
      <nav>
        <StyledLink to="/home">Home</StyledLink>
        <StyledLink to="/statistic">Statistic</StyledLink>
      </nav>
      <Balance />
      <Currency />
    </StyledSideBar>
  );
}

export default SideBar;
