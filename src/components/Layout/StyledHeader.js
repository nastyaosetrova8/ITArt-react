import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 32px;
  background: var(--header-background);
  box-shadow: var(--header-shadow);

  @media (max-width: 1280px) {
    padding: 16px 32px;
  }

  .user-name {
    margin: 0 12px 0 auto;
    color: var(--white-60);
    font-size: 16px;
  }

  button {
    background: transparent;
    padding: 6px 12px;
    border: none;
    border-left: 1px solid var(--white-60);
    display: flex;
    gap: 8px;
    align-items: center;
  }

  .btn-exit-text {
    font-size: 16px;
    color: var(--white-60);
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 17.097px;
  gap: 4px;
`;
