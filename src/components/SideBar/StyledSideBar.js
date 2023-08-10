import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledSideBar = styled.div`
  border-right: 1px solid var(--white-60);
  color: #fbfbfb;

  width: 100%;
  max-width: 480px;
  height: 641px;

  @media (max-width: 1280px) {
    border-right: none;
    display: flex;
    flex-direction: row;
    max-width: 704px;
    height: 214px;

    .area-nav-balance {
      display: flex;
      flex-direction: column;
    }

    nav {
      height: 214px;
      padding-bottom: 0;
      font-size: 18px;
    }
  }

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
  display: flex;
  gap: 20px;
  align-items: flex-end;

  .wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    border-radius: 5px;
  }

  .icon-home {
    fill: rgba(255, 255, 255, 0.4);
  }
  .icon-diag {
    fill: rgba(255, 255, 255, 0.4);
  }

  &.active {
    font-weight: bold;
  }

  &.active .wrap {
    background: #734aef;

    filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
  }
`;
