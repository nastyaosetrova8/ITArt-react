import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledSideBar = styled.div`
  border-right: 1px solid var(--white-60);
  color: #fbfbfb;

  width: 100%;
  max-width: 480px;
  height: 641px;

  nav {
    display: flex;
    flex-direction: column;
    gap: 12px;
    height: 134px;
    padding: 40px 0 16px 28px;
    box-sizing: border-box;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    border-radius: 5px;
    border: none;
    background: transparent;
    color: rgba(255, 255, 255, 0.4);
  }

  @media (min-width: 768px) and (max-width: 1280px) {
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
      margin-bottom: 28px;
    }
  }
  @media (min-width: 320px) and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    height: 148px;
    border-right: none;
    margin-left: auto;
    margin-right: auto;
    align-items: center;

    nav {
      display: flex;
      flex-direction: row;
      gap: 12px;
      height: 68px;
      padding: 12px 0;
      box-sizing: border-box;
      justify-content: center;
      align-items: center;
    }
    span {
      display: none;
    }
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

  .icon-money {
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

  @media (min-width: 320px) and (max-width: 767px) {
    .wrap {
      width: 44px;
      height: 44px;
    }
    .button {
      width: 44px;
      height: 44px;
    }
  }
`;
