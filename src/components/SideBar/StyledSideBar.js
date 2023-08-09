import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledSideBar = styled.div`
  border-right: 1px solid var(--white);
  color: #fbfbfb;

  width: 100%;
  max-width: 480px;
  height: 100vh;

  /* background: linear-gradient(
    220deg,
    rgba(109, 84, 235, 0.6) 3.47%,
    rgba(101, 35, 146, 0.6) 90.06%
  ); */

  nav {
    display: flex;
    flex-direction: column;
    gap: 12px;
    height: 134px;
    padding: 40px 0 16px 28px;
    box-sizing: border-box;
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: var(--white);

  &.active {
    font-weight: bold;
  }
`;
