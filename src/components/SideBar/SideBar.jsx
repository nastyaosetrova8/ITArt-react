import Balance from 'components/Balance/Balance';
import { StyledLink, StyledSideBar } from './StyledSideBar';
import Currency from 'components/Currency/Currency';
import HomeIcon from '@mui/icons-material/Home';
import TimelineIcon from '@mui/icons-material/Timeline';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';

function SideBar() {
  return (
    <StyledSideBar>
      <div className="area-nav-balance">
        <nav>
          <StyledLink to="/home">
            <div className="wrap">
              <HomeIcon className="icon-home" />
            </div>
            <span>Home</span>
          </StyledLink>
          <StyledLink to="/statistic">
            <div className="wrap">
              <TimelineIcon className="icon-diag" />
            </div>
            <span>Statistic</span>
          </StyledLink>
          {window.innerWidth < 768 && (
            <button type="" className="wrap">
              <AttachMoneyOutlinedIcon className="icon-money" />
            </button>
          )}
        </nav>
        <div className="balance-invisible">
          <Balance />
        </div>
      </div>
      <Currency />
    </StyledSideBar>
  );
}

export default SideBar;
