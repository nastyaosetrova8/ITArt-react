import Balance from 'components/Balance/Balance';
import { StyledLink, StyledSideBar } from './StyledSideBar';
import Currency from 'components/Currency/Currency';
import HomeIcon from '@mui/icons-material/Home';
import TimelineIcon from '@mui/icons-material/Timeline';

function SideBar() {
  return (
    <StyledSideBar>
      <nav>
        <StyledLink to="/home">
          <div className="wrap">
            <HomeIcon className="icon-home" />
          </div>
          Home
        </StyledLink>
        <StyledLink to="/statistic">
          <div className="wrap">
            <TimelineIcon className="icon-diag" />
          </div>
          Statistic
        </StyledLink>
      </nav>
      <Balance />
      <Currency />
    </StyledSideBar>
  );
}

export default SideBar;
